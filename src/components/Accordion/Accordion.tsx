import React, { createContext, useContext, useId, useState } from 'react';

function cx(...parts: Array<string | false | undefined | null>): string {
  return parts.filter(Boolean).join(' ');
}

type AccordionSize = 'sm' | 'md' | 'lg';
type AccordionAlign = 'start' | 'end';

const AccordionDisabledContext = createContext(false);

// --- Accordion ---

export interface AccordionProps extends React.HTMLAttributes<HTMLUListElement> {
  align?: AccordionAlign;
  size?: AccordionSize;
  disabled?: boolean;
}

export const Accordion = React.forwardRef<HTMLUListElement, AccordionProps>(
  function Accordion(
    {
      align = 'start',
      size = 'md',
      disabled = false,
      children,
      className,
      ...rest
    },
    ref
  ) {
    return (
      <AccordionDisabledContext.Provider value={disabled}>
        <ul
          {...rest}
          ref={ref}
          className={cx(
            'cds--accordion',
            `cds--accordion--${size}`,
            `cds--accordion--${align}`,
            className
          )}>
          {children}
        </ul>
      </AccordionDisabledContext.Provider>
    );
  }
);

// --- AccordionItem ---

export interface AccordionItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'title'> {
  title: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  onHeadingClick?: (event: React.MouseEvent<HTMLButtonElement>, nextOpen: boolean) => void;
}

export const AccordionItem = React.forwardRef<HTMLLIElement, AccordionItemProps>(
  function AccordionItem(
    {
      title,
      open: openProp,
      defaultOpen = false,
      disabled: disabledProp,
      onHeadingClick,
      children,
      className,
      ...rest
    },
    ref
  ) {
    const rootDisabled = useContext(AccordionDisabledContext);
    const disabled = rootDisabled || Boolean(disabledProp);
    const contentId = useId().replace(/:/g, '');
    const isControlled = openProp !== undefined;
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const open = isControlled ? Boolean(openProp) : internalOpen;

    return (
      <li
        {...rest}
        ref={ref}
        className={cx(
          'cds--accordion__item',
          open && 'cds--accordion__item--active',
          disabled && 'cds--accordion__item--disabled',
          className
        )}>
        <button
          type="button"
          className="cds--accordion__heading"
          aria-expanded={open}
          aria-controls={contentId}
          disabled={disabled}
          onClick={(event) => {
            if (disabled) {
              return;
            }
            const next = !open;
            onHeadingClick?.(event, next);
            if (!isControlled) {
              setInternalOpen(next);
            }
          }}>
          <svg
            className="cds--accordion__arrow"
            aria-hidden="true"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            focusable="false">
            <path d="M8 11L3 6h10z" fill="currentColor" />
          </svg>
          <div className="cds--accordion__title">{title}</div>
        </button>
        <div className="cds--accordion__wrapper">
          <div className="cds--accordion__content" id={contentId}>
            {children}
          </div>
        </div>
      </li>
    );
  }
);
