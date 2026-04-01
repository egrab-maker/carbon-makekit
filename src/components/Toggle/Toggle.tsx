import React, { forwardRef, useCallback, useState } from 'react';

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(' ');
}

export type ToggleSize = 'sm' | 'md';

export interface ToggleProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'id' | 'type' | 'role' | 'aria-checked' | 'children' | 'onToggle'
  > {
  id: string;
  labelText?: React.ReactNode;
  labelA?: string;
  labelB?: string;
  toggled?: boolean;
  defaultToggled?: boolean;
  onToggle?: (toggled: boolean) => void;
  disabled?: boolean;
  size?: ToggleSize;
  hideLabel?: boolean;
  readOnly?: boolean;
  className?: string;
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  function Toggle(props, ref) {
    const {
      id,
      labelText,
      labelA = 'Off',
      labelB = 'On',
      toggled,
      defaultToggled = false,
      onToggle,
      disabled,
      size = 'md',
      hideLabel,
      readOnly,
      className,
      onClick,
      ...rest
    } = props;

    const [internalOn, setInternalOn] = useState(defaultToggled);
    const isControlled = toggled !== undefined;
    const isOn = isControlled ? Boolean(toggled) : internalOn;

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
        if (e.defaultPrevented || disabled || readOnly) {
          return;
        }
        const next = !isOn;
        if (!isControlled) {
          setInternalOn(next);
        }
        onToggle?.(next);
      },
      [disabled, readOnly, isControlled, isOn, onClick, onToggle],
    );

    const labelTextClasses = cx(
      'cds--toggle__label-text',
      Boolean(hideLabel && labelText) && 'cds--visually-hidden',
    );

    return (
      <div className={cx('cds--form-item', className)}>
        <div
          className={cx(
            'cds--toggle',
            disabled && 'cds--toggle--disabled',
            readOnly && 'cds--toggle--readonly',
            size === 'sm' && 'cds--toggle--sm',
          )}>
          <button
            ref={ref}
            id={id}
            type="button"
            role="switch"
            aria-checked={isOn}
            aria-readonly={readOnly || undefined}
            disabled={disabled}
            className="cds--toggle__button cds--toggle-input"
            onClick={handleClick}
            {...rest}
          />
          <label
            htmlFor={id}
            className="cds--toggle__label cds--toggle-input__label">
            {labelText ? (
              <span className={labelTextClasses}>{labelText}</span>
            ) : null}
            <div
              className={cx(
                'cds--toggle__appearance',
                size === 'sm' && 'cds--toggle__appearance--sm',
              )}>
              <div
                className={cx(
                  'cds--toggle__switch',
                  isOn && 'cds--toggle__switch--checked',
                )}>
                {size === 'sm' && !readOnly ? (
                  <svg
                    className="cds--toggle__check"
                    width={6}
                    height={5}
                    viewBox="0 0 6 5"
                    aria-hidden="true"
                    focusable="false">
                    <path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
                  </svg>
                ) : null}
              </div>
              <span className="cds--toggle__text" aria-hidden="true">
                {isOn ? labelB : labelA}
              </span>
            </div>
          </label>
        </div>
      </div>
    );
  },
);

Toggle.displayName = 'Toggle';
