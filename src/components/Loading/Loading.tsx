import React from 'react';

function cx(...parts: Array<string | false | undefined | null>): string {
  return parts.filter(Boolean).join(' ');
}

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  withOverlay?: boolean;
  small?: boolean;
  description?: string;
}

export const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(function Loading(
  {
    active = true,
    withOverlay = false,
    small = false,
    description = 'Loading',
    className,
    ...rest
  },
  ref
) {
  const loadingClassName = cx(
    'cds--loading',
    small ? 'cds--loading--small' : '',
    !active ? 'cds--loading--stop' : '',
    className
  );

  const overlayClassName = cx(
    'cds--loading-overlay',
    !active ? 'cds--loading-overlay--stop' : ''
  );

  const loadingInner = (
    <div
      ref={withOverlay ? undefined : ref}
      {...rest}
      aria-atomic="true"
      aria-live={active ? 'assertive' : 'off'}
      aria-busy={active || undefined}
      className={loadingClassName}>
      <svg
        className="cds--loading__svg"
        viewBox="0 0 100 100"
        role="img"
        aria-label={description}>
        <title>{description}</title>
        {small ? (
          <circle className="cds--loading__background" cx="50%" cy="50%" r="42" />
        ) : null}
        <circle
          className="cds--loading__stroke"
          cx="50%"
          cy="50%"
          r={small ? '42' : '44'}
        />
      </svg>
    </div>
  );

  if (withOverlay) {
    return (
      <div ref={ref} className={overlayClassName}>
        {loadingInner}
      </div>
    );
  }

  return loadingInner;
});
