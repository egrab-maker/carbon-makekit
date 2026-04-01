import React from 'react';

export type LinkSize = 'sm' | 'md' | 'lg';

function cx(...parts: Array<string | false | undefined | null>): string {
  return parts.filter(Boolean).join(' ');
}

type AnchorRest = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'className' | 'children' | 'href' | 'target' | 'as'
>;

export interface LinkProps extends AnchorRest {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  inline?: boolean;
  visited?: boolean;
  size?: LinkSize;
  renderIcon?: React.ElementType<{ className?: string; 'aria-hidden'?: string | boolean }>;
  href?: string;
  target?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement | HTMLParagraphElement, LinkProps>(
  function Link(
    {
      as,
      className,
      children,
      disabled = false,
      inline = false,
      visited = false,
      size = 'md',
      renderIcon: RenderIcon,
      href,
      target,
      ...rest
    },
    ref
  ) {
    const classes = cx(
      'cds--link',
      className,
      size === 'sm' ? 'cds--link--sm' : '',
      size === 'lg' ? 'cds--link--lg' : '',
      disabled ? 'cds--link--disabled' : '',
      visited ? 'cds--link--visited' : '',
      inline ? 'cds--link--inline' : ''
    );

    const iconEl = RenderIcon ? (
      <RenderIcon className="cds--link__icon" aria-hidden="true" />
    ) : null;

    if (disabled) {
      return (
        <p
          ref={ref as React.Ref<HTMLParagraphElement>}
          className={classes}
          {...(rest as React.HTMLAttributes<HTMLParagraphElement>)}>
          {children}
          {iconEl}
        </p>
      );
    }

    const Component = (as || 'a') as React.ElementType;

    return (
      <Component
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        href={href}
        target={target}
        {...rest}>
        {children}
        {iconEl}
      </Component>
    );
  }
);
