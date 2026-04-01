import React from 'react';

export type TagType =
  | 'red'
  | 'magenta'
  | 'purple'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'gray'
  | 'cool-gray'
  | 'warm-gray'
  | 'high-contrast'
  | 'outline';

export type TagSize = 'sm' | 'md' | 'lg';

function cx(...parts: Array<string | false | undefined | null>): string {
  return parts.filter(Boolean).join(' ');
}

const TYPE_CLASS: Record<TagType, string> = {
  red: 'cds--tag--red',
  magenta: 'cds--tag--magenta',
  purple: 'cds--tag--purple',
  blue: 'cds--tag--blue',
  cyan: 'cds--tag--cyan',
  teal: 'cds--tag--teal',
  green: 'cds--tag--green',
  gray: 'cds--tag--gray',
  'cool-gray': 'cds--tag--cool-gray',
  'warm-gray': 'cds--tag--warm-gray',
  'high-contrast': 'cds--tag--high-contrast',
  outline: 'cds--tag--outline',
};

function TagCloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 32 32"
      fill="currentColor"
      focusable="false"
      aria-hidden="true">
      <path d="M17.4141 16L24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16z" />
    </svg>
  );
}

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: TagType;
  size?: TagSize;
  filter?: boolean;
  disabled?: boolean;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  renderIcon?: React.ElementType<{ className?: string; 'aria-hidden'?: string | boolean }>;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(function Tag(
  {
    type = 'gray',
    size = 'md',
    filter = false,
    disabled = false,
    onClose,
    renderIcon: RenderIcon,
    className,
    children,
    ...rest
  },
  ref
) {
  const classes = cx(
    'cds--tag',
    TYPE_CLASS[type],
    size === 'sm' ? 'cds--tag--sm' : '',
    size === 'lg' ? 'cds--tag--lg' : '',
    filter ? 'cds--tag--filter' : '',
    disabled ? 'cds--tag--disabled' : '',
    className
  );

  const iconEl = RenderIcon ? (
    <span className="cds--tag__custom-icon">
      <RenderIcon aria-hidden="true" />
    </span>
  ) : null;

  return (
    <span
      ref={ref}
      className={classes}
      aria-disabled={disabled || undefined}
      {...rest}>
      {iconEl}
      <span className="cds--tag__label">{children}</span>
      {filter ? (
        <button
          type="button"
          className="cds--tag__close-icon"
          aria-label="Clear filter"
          disabled={disabled}
          onClick={onClose}>
          <TagCloseIcon />
        </button>
      ) : null}
    </span>
  );
});
