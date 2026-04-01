import React, {
  Children,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

function cx(...parts: Array<string | false | undefined | null>): string {
  return parts.filter(Boolean).join(' ');
}

interface TabsContextValue {
  baseId: string;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(component: string): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error(`${component} must be used within <Tabs>`);
  }
  return ctx;
}

const TabIndexContext = createContext<number>(-1);

const PanelIndexContext = createContext<number>(-1);

interface TabListOptionsContextValue {
  activation: 'automatic' | 'manual';
  focusedTabIndex: number;
  setFocusedTabIndex: (index: number) => void;
}

const TabListOptionsContext = createContext<TabListOptionsContextValue | null>(
  null
);

// --- Tabs ---

export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  selectedIndex?: number;
  defaultSelectedIndex?: number;
  onChange?: (selectedIndex: number) => void;
  children?: React.ReactNode;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  {
    selectedIndex: selectedIndexProp,
    defaultSelectedIndex = 0,
    onChange,
    children,
    className,
    ...rest
  },
  ref
) {
  const baseId = useId().replace(/:/g, '');
  const isControlled = selectedIndexProp !== undefined;
  const [internalIndex, setInternalIndex] = useState(defaultSelectedIndex);
  const selectedIndex = isControlled ? selectedIndexProp! : internalIndex;

  const setSelectedIndex = useCallback(
    (index: number) => {
      if (!isControlled) {
        setInternalIndex(index);
      }
      onChange?.(index);
    },
    [isControlled, onChange]
  );

  const value = useMemo(
    () => ({
      baseId,
      selectedIndex,
      setSelectedIndex,
    }),
    [baseId, selectedIndex, setSelectedIndex]
  );

  return (
    <TabsContext.Provider value={value}>
      <div ref={ref} className={className} {...rest}>
        {children}
      </div>
    </TabsContext.Provider>
  );
});

// --- TabList ---

export interface TabListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  activation?: 'automatic' | 'manual';
  'aria-label'?: string;
  contained?: boolean;
}

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  function TabList(
    {
      activation = 'automatic',
      'aria-label': ariaLabel,
      contained = false,
      children,
      className,
      ...rest
    },
    ref
  ) {
    const { selectedIndex, setSelectedIndex } = useTabsContext('TabList');
    const [focusedTabIndex, setFocusedTabIndex] = useState(selectedIndex);
    const outerRef = useRef<HTMLDivElement>(null);
    const tabListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setFocusedTabIndex(selectedIndex);
    }, [selectedIndex]);

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        outerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    const listOptions = useMemo(
      () => ({
        activation,
        focusedTabIndex,
        setFocusedTabIndex,
      }),
      [activation, focusedTabIndex]
    );

    const getEnabledTabButtons = useCallback(() => {
      const root = tabListRef.current;
      if (!root) {
        return [];
      }
      return Array.from(
        root.querySelectorAll<HTMLButtonElement>(
          'button[role="tab"]:not([disabled])'
        )
      );
    }, []);

    const onKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
          return;
        }

        event.preventDefault();
        const buttons = getEnabledTabButtons();
        if (buttons.length === 0) {
          return;
        }

        const active = document.activeElement;
        const currentIdx = buttons.findIndex((b) => b === active);
        if (currentIdx < 0) {
          return;
        }

        const delta = event.key === 'ArrowRight' ? 1 : -1;
        let next = currentIdx + delta;
        if (next < 0) {
          next = buttons.length - 1;
        }
        if (next >= buttons.length) {
          next = 0;
        }

        const nextButton = buttons[next];
        const raw = nextButton?.getAttribute('data-mk-tab-index');
        const nextIndex = raw != null ? Number(raw) : next;

        nextButton?.focus();
        if (activation === 'automatic') {
          setSelectedIndex(nextIndex);
        }
      },
      [activation, getEnabledTabButtons, setSelectedIndex]
    );

    return (
      <div
        className={cx('cds--tabs', contained && 'cds--tabs--contained', className)}
        ref={setRefs}>
        <TabListOptionsContext.Provider value={listOptions}>
          <div
            {...rest}
            ref={tabListRef}
            role="tablist"
            aria-label={ariaLabel}
            className="cds--tab--list"
            onKeyDown={onKeyDown}>
            <div className="cds--tabs__nav">
              {Children.map(children, (child, index) =>
                isValidElement(child) ? (
                  <TabIndexContext.Provider key={index} value={index}>
                    {child}
                  </TabIndexContext.Provider>
                ) : (
                  child
                )
              )}
            </div>
          </div>
        </TabListOptionsContext.Provider>
      </div>
    );
  }
);

// --- Tab ---

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(function Tab(
  { disabled, children, className, onClick, onKeyDown, onFocus, ...rest },
  ref
) {
  const { baseId, selectedIndex, setSelectedIndex } = useTabsContext('Tab');
  const index = useContext(TabIndexContext);
  const listOpts = useContext(TabListOptionsContext);

  const id = `${baseId}-tab-${index}`;
  const panelId = `${baseId}-panel-${index}`;
  const selected = selectedIndex === index;

  const focusIndex = listOpts?.focusedTabIndex ?? selectedIndex;
  const setFocusedTabIndex = listOpts?.setFocusedTabIndex;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) {
      return;
    }
    if (
      listOpts?.activation === 'manual' &&
      (event.key === 'Enter' || event.key === ' ')
    ) {
      event.preventDefault();
      if (!disabled) {
        setSelectedIndex(index);
      }
    }
  };

  return (
    <button
      {...rest}
      ref={ref}
      type="button"
      role="tab"
      id={id}
      data-mk-tab-index={index}
      aria-controls={panelId}
      aria-selected={selected}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      tabIndex={focusIndex === index ? 0 : -1}
      className={cx(
        'cds--tabs__nav-item',
        'cds--tabs__nav-link',
        selected && 'cds--tabs__nav-item--selected',
        disabled && 'cds--tabs__nav-item--disabled',
        className
      )}
      onFocus={(e) => {
        setFocusedTabIndex?.(index);
        onFocus?.(e);
      }}
      onClick={(e) => {
        if (!disabled) {
          setSelectedIndex(index);
        }
        onClick?.(e);
      }}
      onKeyDown={handleKeyDown}>
      <span className="cds--tabs__nav-item-label-wrapper">
        <span className="cds--tabs__nav-item-label">{children}</span>
      </span>
    </button>
  );
});

// --- TabPanels ---

export type TabPanelsProps = React.HTMLAttributes<HTMLDivElement>;

export const TabPanels = React.forwardRef<HTMLDivElement, TabPanelsProps>(
  function TabPanels({ children, className, ...rest }, ref) {
    return (
      <div ref={ref} className={className} {...rest}>
        {Children.map(children, (child, index) =>
          isValidElement(child) ? (
            <PanelIndexContext.Provider key={index} value={index}>
              {child}
            </PanelIndexContext.Provider>
          ) : (
            child
          )
        )}
      </div>
    );
  }
);

// --- TabPanel ---

export type TabPanelProps = React.HTMLAttributes<HTMLDivElement>;

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  function TabPanel({ children, className, ...rest }, ref) {
    const { baseId, selectedIndex } = useTabsContext('TabPanel');
    const index = useContext(PanelIndexContext);
    const tabId = `${baseId}-tab-${index}`;
    const panelId = `${baseId}-panel-${index}`;
    const visible = selectedIndex === index;

    return (
      <div
        {...rest}
        ref={ref}
        id={panelId}
        role="tabpanel"
        aria-labelledby={tabId}
        hidden={!visible}
        className={cx('cds--tab-content', className)}>
        {children}
      </div>
    );
  }
);
