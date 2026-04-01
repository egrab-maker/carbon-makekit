import React, { forwardRef, useCallback, useEffect, useRef } from 'react';

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(' ');
}

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'id' | 'type' | 'className'
  > {
  id: string;
  labelText: React.ReactNode;
  indeterminate?: boolean;
  hideLabel?: boolean;
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const {
      id,
      labelText,
      checked,
      defaultChecked,
      indeterminate,
      onChange,
      disabled,
      hideLabel,
      readOnly,
      className,
      ...rest
    } = props;

    const innerRef = useRef<HTMLInputElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLInputElement | null) => {
        innerRef.current = node;
        if (node) {
          node.indeterminate = Boolean(indeterminate);
        }
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = Boolean(indeterminate);
      }
    }, [indeterminate]);

    return (
      <div className={cx('cds--form-item', 'cds--checkbox-wrapper', className)}>
        <input
          ref={setRefs}
          type="checkbox"
          id={id}
          className="cds--checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          aria-readonly={readOnly || undefined}
          {...rest}
        />
        <label htmlFor={id} className="cds--checkbox-label">
          <span
            className={cx(
              'cds--checkbox-label-text',
              hideLabel && 'cds--visually-hidden',
            )}>
            {labelText}
          </span>
        </label>
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export type CheckboxGroupOrientation = 'horizontal' | 'vertical';

export interface CheckboxGroupProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legendText?: React.ReactNode;
  orientation?: CheckboxGroupOrientation;
}

export function CheckboxGroup({
  legendText,
  orientation = 'vertical',
  children,
  className,
  ...rest
}: CheckboxGroupProps) {
  return (
    <fieldset
      className={cx(
        'cds--checkbox-group',
        orientation === 'horizontal' && 'cds--checkbox-group--horizontal',
        className,
      )}
      {...rest}>
      {legendText ? <legend className="cds--label">{legendText}</legend> : null}
      {children}
    </fieldset>
  );
}
