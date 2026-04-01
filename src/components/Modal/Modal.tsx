import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';

function cx(...parts: Array<string | false | undefined | null>): string {
  return parts.filter(Boolean).join(' ');
}

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  open: boolean;
  onRequestClose?: () => void;
  onRequestSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  modalLabel?: React.ReactNode;
  modalHeading?: React.ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonDisabled?: boolean;
  secondaryButtons?: React.ReactNode[];
  danger?: boolean;
  preventCloseOnClickOutside?: boolean;
  size?: ModalSize;
  passiveModal?: boolean;
  hasScrollingContent?: boolean;
  children?: React.ReactNode;
}

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusable(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => el.offsetParent !== null || el === document.activeElement
  );
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  function Modal(
    {
      open,
      onRequestClose,
      onRequestSubmit,
      modalLabel,
      modalHeading,
      primaryButtonText,
      secondaryButtonText,
      primaryButtonDisabled,
      secondaryButtons,
      danger,
      preventCloseOnClickOutside,
      size = 'md',
      passiveModal,
      hasScrollingContent,
      children,
      className,
      ...rest
    },
    ref
  ) {
    const headingId = useId();
    const labelId = useId();
    const modalRef = useRef<HTMLDivElement>(null);
    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        modalRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    const sizeClass =
      size === 'md' ? '' : `cds--modal-container--${size}`;

    const threeButtonLayout =
      Array.isArray(secondaryButtons) && secondaryButtons.length === 2;

    const requestClose = useCallback(() => {
      onRequestClose?.();
    }, [onRequestClose]);

    useEffect(() => {
      if (!open) {
        return undefined;
      }

      function onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
          event.stopPropagation();
          requestClose();
        }
      }

      document.addEventListener('keydown', onKeyDown);
      return () => document.removeEventListener('keydown', onKeyDown);
    }, [open, requestClose]);

    useEffect(() => {
      if (!open || !modalRef.current) {
        return undefined;
      }

      const root = modalRef.current;
      const focusables = getFocusable(root);
      const first = focusables[0];
      first?.focus();

      function onDocumentTab(event: KeyboardEvent) {
        if (event.key !== 'Tab' || !modalRef.current) {
          return;
        }

        const list = getFocusable(modalRef.current);
        if (list.length === 0) {
          return;
        }

        const firstEl = list[0];
        const lastEl = list[list.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (event.shiftKey) {
          if (active === firstEl || !modalRef.current.contains(active)) {
            event.preventDefault();
            lastEl.focus();
          }
        } else if (active === lastEl) {
          event.preventDefault();
          firstEl.focus();
        }
      }

      document.addEventListener('keydown', onDocumentTab);
      return () => document.removeEventListener('keydown', onDocumentTab);
    }, [open]);

    function onBackdropMouseDown(event: React.MouseEvent<HTMLDivElement>) {
      if (preventCloseOnClickOutside) {
        return;
      }
      if (event.target === event.currentTarget) {
        requestClose();
      }
    }

    if (typeof document === 'undefined' || !open) {
      return null;
    }

    const ariaLabelledBy =
      [modalLabel && labelId, modalHeading && headingId].filter(Boolean).join(' ') ||
      undefined;

    const content = (
      <div
        {...rest}
        ref={setRefs}
        className={cx('cds--modal', open && 'cds--modal-is-visible', className)}
        role="presentation"
        onMouseDown={onBackdropMouseDown}>
        <div
          className={cx('cds--modal-container', sizeClass)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={ariaLabelledBy}>
          <div className="cds--modal-header">
            {modalLabel ? (
              <p className="cds--modal-header__label" id={labelId}>
                {modalLabel}
              </p>
            ) : null}
            {modalHeading ? (
              <h2 className="cds--modal-header__heading" id={headingId}>
                {modalHeading}
              </h2>
            ) : null}
            <button
              type="button"
              aria-label="Close"
              className="cds--modal-close"
              onClick={requestClose}>
              <svg
                className="cds--modal-close__icon"
                aria-hidden="true"
                width={20}
                height={20}
                viewBox="0 0 32 32">
                <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z" />
              </svg>
            </button>
          </div>
          <div
            className={cx(
              'cds--modal-content',
              hasScrollingContent && 'cds--modal-scroll-content'
            )}
            {...(hasScrollingContent
              ? {
                  tabIndex: 0,
                  role: 'region' as const,
                  'aria-labelledby': ariaLabelledBy,
                }
              : {})}>
            {children}
          </div>
          {!passiveModal ? (
            <div
              className={cx(
                'cds--modal-footer',
                threeButtonLayout && 'cds--modal-footer--three-button'
              )}>
              {Array.isArray(secondaryButtons) &&
              secondaryButtons.length > 0 &&
              secondaryButtons.length <= 2
                ? secondaryButtons.map((node, i) => (
                    <React.Fragment key={i}>{node}</React.Fragment>
                  ))
                : secondaryButtonText && (
                    <button
                      type="button"
                      className="cds--btn cds--btn--secondary"
                      onClick={requestClose}>
                      {secondaryButtonText}
                    </button>
                  )}
              {primaryButtonText ? (
                <button
                  type="button"
                  className={cx(
                    'cds--btn',
                    danger ? 'cds--btn--danger' : 'cds--btn--primary'
                  )}
                  disabled={primaryButtonDisabled}
                  onClick={(e) => {
                    onRequestSubmit?.(e);
                  }}>
                  {primaryButtonText}
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );

    return createPortal(content, document.body);
  }
);
