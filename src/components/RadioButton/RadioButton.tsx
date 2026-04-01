import React, {
  forwardRef,
  useCallback,
  useState,
  Children,
  isValidElement,
} from 'react';

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(' ');
}

export type RadioButtonLabelPosition = 'left' | 'right';

export interface RadioButtonProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'id' | 'type' | 'className' | 'size'
  > {
  id: string;
  labelText: React.ReactNode;
  value: string;
  hideLabel?: boolean;
  labelPosition?: RadioButtonLabelPosition;
  className?: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  function RadioButton(props, ref) {
    const {
      id,
      labelText,
      value,
      name,
      checked,
      defaultChecked,
      onChange,
      disabled,
      hideLabel,
      readOnly,
      labelPosition = 'right',
      className,
      ...rest
    } = props;

    return (
      <div
        className={cx(
          'cds--form-item',
          'cds--radio-button-wrapper',
          labelPosition === 'left' && 'cds--radio-button-wrapper--label-left',
          labelPosition === 'right' && 'cds--radio-button-wrapper--label-right',
          className,
        )}>
        <input
          ref={ref}
          type="radio"
          id={id}
          className="cds--radio-button"
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          aria-readonly={readOnly || undefined}
          {...rest}
        />
        <label htmlFor={id} className="cds--radio-button__label">
          <span className="cds--radio-button__appearance" aria-hidden="true" />
          <span
            className={cx(
              'cds--radio-button__label-text',
              hideLabel && 'cds--visually-hidden',
            )}>
            {labelText}
          </span>
        </label>
      </div>
    );
  },
);

RadioButton.displayName = 'RadioButton';

export type RadioButtonGroupOrientation = 'horizontal' | 'vertical';

export interface RadioButtonGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name: string;
  legendText?: React.ReactNode;
  orientation?: RadioButtonGroupOrientation;
  defaultSelected?: string;
  valueSelected?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export function RadioButtonGroup({
  name,
  legendText,
  orientation = 'vertical',
  defaultSelected,
  valueSelected,
  onChange,
  disabled: groupDisabled,
  children,
  className,
  ...rest
}: RadioButtonGroupProps) {
  const [internalValue, setInternalValue] = useState(defaultSelected ?? '');
  const isControlled = valueSelected !== undefined;
  const selected = isControlled ? valueSelected : internalValue;

  const handleChildChange = useCallback(
    (value: string, event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(value);
      }
      onChange?.(value, event);
    },
    [isControlled, onChange],
  );

  const decorated = Children.map(children, (child) => {
    if (!isValidElement(child) || child.type !== RadioButton) {
      return child;
    }
    const childProps = child.props as RadioButtonProps;
    return React.cloneElement(
      child as React.ReactElement<RadioButtonProps>,
      {
        name,
        checked: selected === childProps.value,
        disabled: groupDisabled || childProps.disabled,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          childProps.onChange?.(e);
          if (!e.defaultPrevented && !groupDisabled) {
            handleChildChange(childProps.value, e);
          }
        },
      },
    );
  });

  return (
    <div className={cx('cds--form-item', className)} {...rest}>
      <fieldset
        className={cx(
          'cds--radio-button-group',
          orientation === 'vertical' && 'cds--radio-button-group--vertical',
        )}>
        {legendText ? <legend className="cds--label">{legendText}</legend> : null}
        {decorated}
      </fieldset>
    </div>
  );
}
