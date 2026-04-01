import React, { useEffect, useRef } from 'react';

function cx(...parts: Array<string | false | undefined | null>): string {
  return parts.filter(Boolean).join(' ');
}

export type NotificationKind =
  | 'success'
  | 'info'
  | 'info-square'
  | 'warning'
  | 'warning-alt'
  | 'error';

function defaultRoleForKind(kind: NotificationKind): 'alert' | 'status' {
  return kind === 'error' ? 'alert' : 'status';
}

function NotificationStatusIcon({ kind }: { kind: NotificationKind }) {
  const common = {
    'aria-hidden': true as const,
    width: 20,
    height: 20,
    viewBox: '0 0 32 32',
    fill: 'currentColor',
    focusable: 'false' as const,
  };

  switch (kind) {
    case 'success':
      return (
        <svg {...common}>
          <path d="M16 2a14 14 0 1014 14A14.016 14.016 0 0016 2zm-2 19.59l-5-5L10.59 15 14 18.41 22.59 9.82 24 11.23z" />
        </svg>
      );
    case 'info':
    case 'info-square':
      return (
        <svg {...common}>
          <path d="M16 2a14 14 0 1014 14A14.016 14.016 0 0016 2zm1 22h-2v-9h2zm0-12h-2V8h2z" />
        </svg>
      );
    case 'warning':
    case 'warning-alt':
      return (
        <svg {...common}>
          <path d="M16 2L2 28h28zm0 4.2L25.8 26H6.2zm-1 8v6h2v-6zm0 8v2h2v-2z" />
        </svg>
      );
    case 'error':
    default:
      return (
        <svg {...common}>
          <path d="M16 2a14 14 0 1014 14A14.016 14.016 0 0016 2zm-1 6h2v10h-2zm0 12h2v2h-2z" />
        </svg>
      );
  }
}

export interface InlineNotificationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  kind?: NotificationKind;
  title: string;
  subtitle?: React.ReactNode;
  hideCloseButton?: boolean;
  onClose?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  lowContrast?: boolean;
  role?: 'alert' | 'status';
  statusIconDescription?: string;
}

export const InlineNotification = React.forwardRef<
  HTMLDivElement,
  InlineNotificationProps
>(function InlineNotification(
  {
    kind = 'info',
    title,
    subtitle,
    hideCloseButton,
    onClose,
    lowContrast,
    role: roleProp,
    statusIconDescription = 'notification',
    className,
    children,
    ...rest
  },
  ref
) {
  const role = roleProp ?? defaultRoleForKind(kind);

  return (
    <div
      {...rest}
      ref={ref}
      role={role}
      className={cx(
        'cds--inline-notification',
        `cds--inline-notification--${kind}`,
        lowContrast && 'cds--inline-notification--low-contrast',
        className
      )}>
      <div className="cds--inline-notification__details">
        <div
          className="cds--inline-notification__icon"
          aria-label={statusIconDescription}>
          <NotificationStatusIcon kind={kind} />
        </div>
        <div className="cds--inline-notification__text-wrapper">
          <p className="cds--inline-notification__title">{title}</p>
          {subtitle ? (
            <div className="cds--inline-notification__subtitle">{subtitle}</div>
          ) : null}
          {children}
        </div>
      </div>
      {!hideCloseButton ? (
        <button
          type="button"
          aria-label="closes notification"
          className="cds--inline-notification__close-button"
          onClick={onClose}>
          <span className="cds--inline-notification__close-icon" aria-hidden="true">
            <svg width={16} height={16} viewBox="0 0 32 32" fill="currentColor">
              <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z" />
            </svg>
          </span>
        </button>
      ) : null}
    </div>
  );
});

export interface ToastNotificationProps extends InlineNotificationProps {
  caption?: React.ReactNode;
  timeout?: number;
}

export const ToastNotification = React.forwardRef<
  HTMLDivElement,
  ToastNotificationProps
>(function ToastNotification(
  {
    kind = 'info',
    title,
    subtitle,
    caption,
    timeout,
    hideCloseButton,
    onClose,
    lowContrast,
    role: roleProp,
    statusIconDescription = 'notification',
    className,
    children,
    ...rest
  },
  ref
) {
  const role = roleProp ?? defaultRoleForKind(kind);
  const savedOnClose = useRef(onClose);
  savedOnClose.current = onClose;

  useEffect(() => {
    if (timeout == null || timeout <= 0) {
      return undefined;
    }
    const id = window.setTimeout(() => {
      savedOnClose.current?.();
    }, timeout);
    return () => window.clearTimeout(id);
  }, [timeout]);

  return (
    <div
      {...rest}
      ref={ref}
      role={role}
      className={cx(
        'cds--toast-notification',
        `cds--toast-notification--${kind}`,
        lowContrast && 'cds--toast-notification--low-contrast',
        className
      )}>
      <div
        className="cds--toast-notification__icon"
        aria-label={statusIconDescription}>
        <NotificationStatusIcon kind={kind} />
      </div>
      <div className="cds--toast-notification__content">
        <p className="cds--toast-notification__title">{title}</p>
        {subtitle ? (
          <div className="cds--toast-notification__subtitle">{subtitle}</div>
        ) : null}
        {caption ? (
          <div className="cds--toast-notification__caption">{caption}</div>
        ) : null}
        {children}
      </div>
      {!hideCloseButton ? (
        <button
          type="button"
          aria-label="closes notification"
          className="cds--toast-notification__close-button"
          onClick={onClose}>
          <span className="cds--toast-notification__close-icon" aria-hidden="true">
            <svg width={16} height={16} viewBox="0 0 32 32" fill="currentColor">
              <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z" />
            </svg>
          </span>
        </button>
      ) : null}
    </div>
  );
});
