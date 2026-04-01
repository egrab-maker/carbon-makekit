import React, { forwardRef, useId } from 'react';

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(' ');
}

function TextInputInvalidIcon({ warning }: { warning?: boolean }) {
  if (warning) {
    return (
      <svg
        className="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning"
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
      className="cds--text-input__invalid-icon"
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

export type TextInputSize = 'sm' | 'md' | 'lg' | 'xl';
export type TextInputType = 'text' | 'email' | 'password' | 'tel' | 'url';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  labelText: React.ReactNode;
  helperText?: React.ReactNode;
  invalidText?: React.ReactNode;
  warnText?: React.ReactNode;
  invalid?: boolean;
  warn?: boolean;
  size?: TextInputSize;
  type?: TextInputType;
  hideLabel?: boolean;
  inline?: boolean;
  /** Sets `cds--text-input--light` on the input. */
  light?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(props, ref) {
    const autoId = useId();
    const {
      id: idProp,
      labelText,
      helperText,
      invalidText,
      warnText,
      placeholder,
      defaultValue,
      value,
      onChange,
      disabled,
      invalid,
      warn,
      readOnly,
      size = 'md',
      type = 'text',
      hideLabel,
      inline,
      light,
      className,
      ...rest
    } = props;

    const id = idProp ?? autoId;
    const showInvalid = Boolean(invalid && invalidText);
    const showWarn = Boolean(warn && warnText && !showInvalid);
    const showHelper = Boolean(helperText) && !showInvalid && !showWarn;

    const sizeClass =
      size === 'sm'
        ? 'cds--text-input--sm'
        : size === 'lg'
          ? 'cds--text-input--lg'
          : size === 'xl'
            ? 'cds--text-input--xl'
            : undefined;

    const labelClasses = cx(
      'cds--label',
      disabled && 'cds--label--disabled',
      hideLabel && 'cds--visually-hidden',
      inline && 'cds--label--inline',
      inline && size === 'sm' && 'cds--label--inline--sm',
      inline && size === 'lg' && 'cds--label--inline--lg',
    );

    const helperId = `${id}-helper`;
    const requirementId = `${id}-requirement`;

    const describedBy = cx(
      showHelper && helperId,
      (showInvalid || showWarn) && requirementId,
    );

    return (
      <div className={cx('cds--form-item', className)}>
        <div
          className={cx(
            'cds--text-input-wrapper',
            inline && 'cds--text-input-wrapper--inline',
            inline && showInvalid && 'cds--text-input-wrapper--inline--invalid',
          )}>
          <label htmlFor={id} className={labelClasses}>
            {labelText}
          </label>
          <div
            className={cx(
              'cds--text-input__field-wrapper',
              showWarn && 'cds--text-input__field-wrapper--warning',
            )}
            data-invalid={showInvalid ? true : undefined}>
            <input
              ref={ref}
              id={id}
              type={type}
              className={cx(
                'cds--text-input',
                sizeClass,
                light && 'cds--text-input--light',
                showInvalid && 'cds--text-input--invalid',
                showWarn && 'cds--text-input--warning',
              )}
              placeholder={placeholder}
              defaultValue={defaultValue}
              value={value}
              onChange={onChange}
              disabled={disabled}
              readOnly={readOnly}
              aria-invalid={showInvalid || undefined}
              aria-describedby={describedBy || undefined}
              {...rest}
            />
            {showInvalid && <TextInputInvalidIcon />}
            {showWarn && <TextInputInvalidIcon warning />}
          </div>
          {showHelper && (
            <div id={helperId} className="cds--form__helper-text">
              {helperText}
            </div>
          )}
          {showInvalid && (
            <div
              id={requirementId}
              className="cds--form-requirement"
              role="alert">
              {invalidText}
            </div>
          )}
          {showWarn && (
            <div
              id={requirementId}
              className="cds--form-requirement"
              role="alert">
              {warnText}
            </div>
          )}
        </div>
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
