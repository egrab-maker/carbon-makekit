import React, {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

function cx(...parts: Array<string | false | undefined | null>): string {
  return parts.filter(Boolean).join(' ');
}

export type TooltipAlign = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  align?: TooltipAlign;
  label?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactElement;
  enterDelayMs?: number;
  leaveDelayMs?: number;
  defaultOpen?: boolean;
}

export const Tooltip = React.forwardRef<HTMLSpanElement, TooltipProps>(
  function Tooltip(
    {
      align = 'top',
      label,
      description,
      children,
      enterDelayMs = 100,
      leaveDelayMs = 300,
      defaultOpen = false,
      className,
      ...rest
    },
    ref
  ) {
    const tooltipId = useId().replace(/:/g, '');
    const [open, setOpen] = useState(defaultOpen);
    const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearEnter = useCallback(() => {
      if (enterTimer.current != null) {
        clearTimeout(enterTimer.current);
        enterTimer.current = null;
      }
    }, []);

    const clearLeave = useCallback(() => {
      if (leaveTimer.current != null) {
        clearTimeout(leaveTimer.current);
        leaveTimer.current = null;
      }
    }, []);

    const scheduleOpen = useCallback(() => {
      clearLeave();
      clearEnter();
      enterTimer.current = setTimeout(() => {
        setOpen(true);
        enterTimer.current = null;
      }, enterDelayMs);
    }, [clearEnter, clearLeave, enterDelayMs]);

    const scheduleClose = useCallback(() => {
      clearEnter();
      clearLeave();
      leaveTimer.current = setTimeout(() => {
        setOpen(false);
        leaveTimer.current = null;
      }, leaveDelayMs);
    }, [clearEnter, clearLeave, leaveDelayMs]);

    useEffect(() => {
      return () => {
        clearEnter();
        clearLeave();
      };
    }, [clearEnter, clearLeave]);

    const body = label ?? description;

    if (!isValidElement(children)) {
      return null;
    }

    const childProps = children.props as {
      className?: string;
      onMouseEnter?: (ev: React.MouseEvent) => void;
      onMouseLeave?: (ev: React.MouseEvent) => void;
      onFocus?: (ev: React.FocusEvent) => void;
      onBlur?: (ev: React.FocusEvent) => void;
    };

    const triggerProps = {
      ...childProps,
      className: cx('cds--tooltip-trigger', childProps.className),
      'aria-describedby': open ? tooltipId : undefined,
      onMouseEnter: (e: React.MouseEvent) => {
        childProps.onMouseEnter?.(e);
        scheduleOpen();
      },
      onMouseLeave: (e: React.MouseEvent) => {
        childProps.onMouseLeave?.(e);
        scheduleClose();
      },
      onFocus: (e: React.FocusEvent) => {
        childProps.onFocus?.(e);
        scheduleOpen();
      },
      onBlur: (e: React.FocusEvent) => {
        childProps.onBlur?.(e);
        scheduleClose();
      },
    };

    return (
      <span
        {...rest}
        ref={ref}
        className={cx(
          'cds--popover-container',
          'cds--tooltip',
          'cds--popover--caret',
          'cds--popover--drop-shadow',
          'cds--popover--high-contrast',
          open && 'cds--popover--open',
          `cds--popover--${align}`,
          className
        )}>
        <div className="cds--tooltip-trigger__wrapper">
          {cloneElement(children, triggerProps as never)}
        </div>
        <span className="cds--popover">
          <span
            className={cx('cds--popover-content', 'cds--tooltip-content')}
            id={tooltipId}
            role="tooltip">
            {body}
          </span>
          <span className="cds--popover-caret" aria-hidden="true" />
        </span>
      </span>
    );
  }
);
