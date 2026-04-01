import React, {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(' ');
}

function ListBoxInvalidIcon({ warning }: { warning?: boolean }) {
  if (warning) {
    return (
      <svg
        className="cds--list-box__invalid-icon cds--list-box__invalid-icon--warning"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width={16}
        height={16}
        aria-hidden="true"
        focusable="false">
        <path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2 c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" />
        <path
          d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8 c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"
          fill="none"
          opacity={0}
        />
      </svg>
    );
  }
  return (
    <svg
      className="cds--list-box__invalid-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      aria-hidden="true"
      focusable="false">
      <path d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.4,3.6h1.1v5H7.4V3.6z M8,12.2 c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      aria-hidden="true"
      focusable="false">
      <polygon points="8,11 3,6 3.7,5.3 8,9.6 12.3,5.3 13,6 " />
    </svg>
  );
}

export type DropdownSize = 'sm' | 'md' | 'lg';
export type DropdownType = 'default' | 'inline';
export type DropdownDirection = 'top' | 'bottom';

export interface DropdownItem {
  id: string;
  label: string;
}

export interface DropdownProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  id: string;
  items: DropdownItem[];
  selectedItem?: DropdownItem | null;
  onChange?: (data: { selectedItem: DropdownItem | null }) => void;
  titleText?: React.ReactNode;
  helperText?: React.ReactNode;
  invalidText?: React.ReactNode;
  warnText?: React.ReactNode;
  disabled?: boolean;
  invalid?: boolean;
  warn?: boolean;
  size?: DropdownSize;
  type?: DropdownType;
  label?: string;
  readOnly?: boolean;
  hideLabel?: boolean;
  direction?: DropdownDirection;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  function Dropdown(props, ref) {
    const uid = useId();
    const {
      id,
      items,
      selectedItem: selectedItemProp,
      onChange,
      titleText,
      helperText,
      invalidText,
      warnText,
      disabled,
      invalid,
      warn,
      size = 'md',
      type = 'default',
      label: placeholderLabel,
      readOnly,
      hideLabel,
      direction = 'bottom',
      className,
      ...rest
    } = props;

    const isControlled = selectedItemProp !== undefined;
    const [internalItem, setInternalItem] = useState<DropdownItem | null>(null);
    const selectedItem = isControlled ? (selectedItemProp ?? null) : internalItem;

    const [open, setOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const rootRef = useRef<HTMLDivElement | null>(null);

    const setRootRef = useCallback(
      (node: HTMLDivElement | null) => {
        rootRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    const labelId = `${id}-${uid}-lbl`;
    const helperId = `${id}-${uid}-hlp`;
    const requirementId = `${id}-${uid}-req`;
    const menuId = `${id}-${uid}-menu`;

    const selectedIndex = useMemo(() => {
      if (!selectedItem) {
        return -1;
      }
      return items.findIndex((i) => i.id === selectedItem.id);
    }, [items, selectedItem]);

    const showInvalid = Boolean(invalid && invalidText);
    const showWarn = Boolean(warn && warnText && !showInvalid);
    const showHelper = Boolean(helperText) && !showInvalid && !showWarn;

    const describedBy = cx(
      titleText != null && titleText !== '' && labelId,
      showHelper && helperId,
      (showInvalid || showWarn) && requirementId,
    );

    useEffect(() => {
      if (!open) {
        return;
      }
      const onDocMouseDown = (ev: MouseEvent) => {
        const el = rootRef.current;
        if (el && !el.contains(ev.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', onDocMouseDown);
      return () => document.removeEventListener('mousedown', onDocMouseDown);
    }, [open]);

    const commitSelection = useCallback(
      (item: DropdownItem | null) => {
        if (!isControlled) {
          setInternalItem(item);
        }
        onChange?.({ selectedItem: item });
      },
      [isControlled, onChange],
    );

    const toggleOpen = useCallback(() => {
      if (disabled || readOnly) {
        return;
      }
      setOpen((o) => {
        const next = !o;
        if (next) {
          const start =
            selectedIndex >= 0 ? selectedIndex : items.length > 0 ? 0 : -1;
          setHighlightedIndex(start >= 0 ? start : 0);
        }
        return next;
      });
    }, [disabled, readOnly, selectedIndex, items.length]);

    const onTriggerKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (disabled || readOnly) {
          return;
        }
        if (e.key === 'Escape' && open) {
          e.preventDefault();
          setOpen(false);
          return;
        }
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (open && highlightedIndex >= 0 && items[highlightedIndex]) {
            commitSelection(items[highlightedIndex]);
            setOpen(false);
          } else {
            toggleOpen();
          }
          return;
        }
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (!open) {
            setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
            setOpen(true);
            return;
          }
          setHighlightedIndex((i) =>
            items.length === 0 ? 0 : (i + 1) % items.length,
          );
          return;
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (!open) {
            const start =
              selectedIndex >= 0 ? selectedIndex : Math.max(0, items.length - 1);
            setHighlightedIndex(start);
            setOpen(true);
            return;
          }
          setHighlightedIndex((i) =>
            items.length === 0
              ? 0
              : (i - 1 + items.length) % items.length,
          );
        }
      },
      [
        disabled,
        readOnly,
        open,
        highlightedIndex,
        items,
        toggleOpen,
        commitSelection,
        selectedIndex,
      ],
    );

    const triggerLabel =
      selectedItem?.label ??
      placeholderLabel ??
      (titleText ? String(titleText) : '');

    const comboboxAriaLabel = titleText ? undefined : (placeholderLabel ?? 'Options');

    return (
      <div ref={setRootRef} className={cx('cds--form-item', className)} {...rest}>
        {titleText ? (
          <label
            id={labelId}
            htmlFor={id}
            className={cx('cds--label', hideLabel && 'cds--visually-hidden')}>
            {titleText}
          </label>
        ) : null}
        <div
          className={cx(
            'cds--dropdown',
            'cds--list-box',
            open && 'cds--dropdown--open',
            open && 'cds--list-box--expanded',
            size === 'sm' && 'cds--dropdown--sm',
            size === 'sm' && 'cds--list-box--sm',
            size === 'lg' && 'cds--dropdown--lg',
            size === 'lg' && 'cds--list-box--lg',
            type === 'inline' && 'cds--dropdown--inline',
            type === 'inline' && 'cds--list-box--inline',
            disabled && 'cds--dropdown--disabled',
            disabled && 'cds--list-box--disabled',
            invalid && 'cds--dropdown--invalid',
            warn && 'cds--dropdown--warning',
            warn && 'cds--list-box--warning',
            direction === 'top' && 'cds--list-box--up',
          )}
          data-invalid={invalid ? true : undefined}>
          <button
            type="button"
            id={id}
            className="cds--list-box__field"
            role="combobox"
            aria-expanded={open}
            aria-haspopup="listbox"
            aria-controls={menuId}
            aria-label={comboboxAriaLabel}
            aria-activedescendant={
              open && highlightedIndex >= 0
                ? `${id}-item-${highlightedIndex}`
                : undefined
            }
            aria-labelledby={titleText ? labelId : undefined}
            aria-describedby={describedBy || undefined}
            aria-invalid={showInvalid || undefined}
            aria-readonly={readOnly || undefined}
            disabled={disabled}
            onClick={() => {
              if (!readOnly) {
                toggleOpen();
              }
            }}
            onKeyDown={onTriggerKeyDown}>
            <span className="cds--list-box__label">{triggerLabel}</span>
            {showInvalid && <ListBoxInvalidIcon />}
            {showWarn && <ListBoxInvalidIcon warning />}
            <div
              className={cx(
                'cds--list-box__menu-icon',
                open && 'cds--list-box__menu-icon--open',
              )}>
              <ChevronDownIcon />
            </div>
          </button>
          <ul
            id={menuId}
            className="cds--list-box__menu"
            role="listbox"
            aria-labelledby={titleText ? labelId : undefined}
            tabIndex={-1}>
            {items.map((item, index) => {
              const isSelected = selectedItem?.id === item.id;
              const isHighlighted = open && highlightedIndex === index;
              return (
                <li
                  key={item.id}
                  role="presentation"
                  className={cx(
                    'cds--list-box__menu-item',
                    isSelected && 'cds--list-box__menu-item--active',
                    isHighlighted && 'cds--list-box__menu-item--highlighted',
                  )}>
                  <div
                    id={`${id}-item-${index}`}
                    role="option"
                    aria-selected={isSelected}
                    className="cds--list-box__menu-item__option"
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
                    onClick={() => {
                      if (disabled || readOnly) {
                        return;
                      }
                      commitSelection(item);
                      setOpen(false);
                    }}>
                    {item.label}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {showHelper ? (
          <div id={helperId} className="cds--form__helper-text">
            {helperText}
          </div>
        ) : null}
        {showInvalid ? (
          <div
            id={requirementId}
            className="cds--form-requirement"
            role="alert">
            {invalidText}
          </div>
        ) : null}
        {showWarn ? (
          <div
            id={requirementId}
            className="cds--form-requirement"
            role="alert">
            {warnText}
          </div>
        ) : null}
      </div>
    );
  },
);

Dropdown.displayName = 'Dropdown';
