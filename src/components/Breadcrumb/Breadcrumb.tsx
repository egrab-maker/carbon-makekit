import React from 'react';

function cx(...parts: Array<string | false | undefined | null>): string {
  return parts.filter(Boolean).join(' ');
}

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {
  noTrailingSlash?: boolean;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  function Breadcrumb({ className, children, noTrailingSlash, ...rest }, ref) {
    return (
      <nav ref={ref} aria-label="Breadcrumb" className={className} {...rest}>
        <ol
          className={cx(
            'cds--breadcrumb',
            noTrailingSlash ? 'cds--breadcrumb--no-trailing-slash' : ''
          )}>
          {children}
        </ol>
      </nav>
    );
  }
);

export interface BreadcrumbItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'children'> {
  href?: string;
  isCurrentPage?: boolean;
  children?: React.ReactNode;
}

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  function BreadcrumbItem(
    { className, href, isCurrentPage, children, ...rest },
    ref
  ) {
    const itemClass = cx(
      'cds--breadcrumb-item',
      isCurrentPage ? 'cds--breadcrumb-item--current' : '',
      className
    );

    const linkContent = isCurrentPage ? (
      href ? (
        <a href={href} className="cds--link" aria-current="page">
          {children}
        </a>
      ) : (
        <span className="cds--link" aria-current="page">
          {children}
        </span>
      )
    ) : href ? (
      <a href={href} className="cds--link">
        {children}
      </a>
    ) : (
      <span className="cds--link">{children}</span>
    );

    return (
      <li ref={ref} className={itemClass} {...rest}>
        {linkContent}
      </li>
    );
  }
);
