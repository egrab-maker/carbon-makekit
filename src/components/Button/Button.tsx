import React, { useId } from 'react';

export type ButtonKind =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'danger'
  | 'danger-tertiary'
  | 'danger-ghost';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const KIND_TO_CLASS: Record<ButtonKind, string> = {
  primary: 'cds--btn--primary',
  secondary: 'cds--btn--secondary',
  tertiary: 'cds--btn--tertiary',
  ghost: 'cds--btn--ghost',
  danger: 'cds--btn--danger',
  'danger-tertiary': 'cds--btn--danger--tertiary',
  'danger-ghost': 'cds--btn--danger--ghost',
};

const DANGER_KINDS: ButtonKind[] = ['danger', 'danger-tertiary', 'danger-ghost'];

function cx(...parts: Array<string | false | undefined | null>): string {
  return parts.filter(Boolean).join(' ');
}

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  kind?: ButtonKind;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
  isExpressive?: boolean;
  isSelected?: boolean;
  hasIconOnly?: boolean;
  renderIcon?: React.ElementType<{ className?: string; 'aria-hidden'?: string | boolean }>;
  href?: string;
  tooltipText?: string;
  dangerDescription?: string;
}

function buildButtonClasses(
  kind: ButtonKind,
  size: ButtonSize | undefined,
  isExpressive: boolean,
  disabled: boolean,
  hasIconOnly: boolean,
  isSelected: boolean,
  className?: string
): string {
  const sizeClass =
    size === 'xl' || size === '2xl'
      ? size === 'xl'
        ? 'cds--btn--xl'
        : 'cds--btn--2xl'
      : size && !isExpressive
        ? `cds--btn--${size}`
        : '';

  return cx(
    className,
    'cds--btn',
    KIND_TO_CLASS[kind],
    sizeClass,
    size ? `cds--layout--size-${size}` : '',
    disabled ? 'cds--btn--disabled' : '',
    isExpressive ? 'cds--btn--expressive' : '',
    hasIconOnly ? 'cds--btn--icon-only' : '',
    hasIconOnly && isSelected && kind === 'ghost' ? 'cds--btn--selected' : ''
  );
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      kind = 'primary',
      size,
      type = 'button',
      disabled = false,
      isExpressive = false,
      isSelected = false,
      hasIconOnly = false,
      renderIcon: RenderIcon,
      href,
      tooltipText,
      dangerDescription = 'Danger',
      className,
      children,
      'aria-describedby': ariaDescribedByProp,
      'aria-pressed': ariaPressedProp,
      'aria-label': ariaLabelProp,
      ...domRest
    },
    ref
  ) {
    const dangerAssistiveId = useId();
    const isDanger = DANGER_KINDS.includes(kind);
    const buttonClasses = buildButtonClasses(
      kind,
      size,
      isExpressive,
      disabled,
      hasIconOnly,
      isSelected,
      className
    );

    const iconEl = RenderIcon ? (
      <RenderIcon className="cds--btn__icon" aria-hidden="true" />
    ) : null;

    const dangerAssistive =
      isDanger && dangerDescription ? (
        <span id={dangerAssistiveId} className="cds--visually-hidden">
          {dangerDescription}
        </span>
      ) : null;

    const mergedAriaDescribedBy =
      [isDanger ? dangerAssistiveId : '', ariaDescribedByProp].filter(Boolean).join(' ') ||
      undefined;

    const interactiveClassName = cx(
      buttonClasses,
      hasIconOnly && tooltipText ? 'cds--tooltip__trigger cds--tooltip--a11y' : ''
    );

    const ariaPressedValue =
      ariaPressedProp ?? (hasIconOnly && kind === 'ghost' ? isSelected : undefined);

    const ariaLabelValue =
      ariaLabelProp ?? (hasIconOnly && tooltipText ? tooltipText : undefined);

    const innerContent = (
      <>
        {dangerAssistive}
        {children}
        {iconEl}
        {hasIconOnly && tooltipText ? (
          <span className="cds--assistive-text" role="tooltip">
            {tooltipText}
          </span>
        ) : null}
      </>
    );

    const useAnchor = Boolean(href) && !disabled;

    let interactive: React.ReactElement;

    if (useAnchor) {
      interactive = (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={interactiveClassName}
          aria-describedby={mergedAriaDescribedBy}
          aria-pressed={ariaPressedValue}
          aria-label={ariaLabelValue}
          {...(domRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {innerContent}
        </a>
      );
    } else {
      interactive = (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type={type}
          disabled={disabled}
          className={interactiveClassName}
          aria-describedby={mergedAriaDescribedBy}
          aria-pressed={ariaPressedValue}
          aria-label={ariaLabelValue}
          {...domRest}>
          {innerContent}
        </button>
      );
    }

    if (hasIconOnly && tooltipText) {
      return (
        <span
          className={cx(
            'cds--icon-tooltip',
            disabled ? 'cds--icon-tooltip--disabled' : ''
          )}>
          <div className="cds--tooltip-trigger__wrapper">{interactive}</div>
        </span>
      );
    }

    return interactive;
  }
);
