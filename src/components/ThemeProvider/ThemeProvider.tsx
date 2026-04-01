import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ThemeName } from '../../tokens/themes';

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'white',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export interface ThemeProviderProps {
  theme?: ThemeName;
  children: React.ReactNode;
}

const themeClassMap: Record<ThemeName, string> = {
  white: 'cds--white',
  g10: 'cds--g10',
  g90: 'cds--g90',
  g100: 'cds--g100',
};

export const ThemeProvider = React.forwardRef<HTMLDivElement, ThemeProviderProps>(
  function ThemeProvider({ theme: initialTheme = 'white', children }, ref) {
    const [theme, setThemeState] = useState<ThemeName>(initialTheme);

    const setTheme = useCallback((newTheme: ThemeName) => {
      setThemeState(newTheme);
    }, []);

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div ref={ref} className={themeClassMap[theme]}>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }
);
