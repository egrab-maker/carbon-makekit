# Project Setup

## Required imports
The package bundles Carbon's full stylesheet. Import the package in your root file:

```tsx
import { ThemeProvider, Button, TextInput } from '@stoovles/carbon-makekit'
```

Styles are automatically included when you import the package.

## Theme provider
Wrap your app root with `ThemeProvider`. This provides the Carbon theme class to all children.

```tsx
import { ThemeProvider } from '@stoovles/carbon-makekit'

function App() {
  return (
    <ThemeProvider theme="white">
      {/* app content */}
    </ThemeProvider>
  )
}
```

### Available themes
| Theme | Description | Usage |
|-------|-------------|-------|
| `white` | White background, light theme | Default, general use |
| `g10` | Gray 10 background, light theme | Subtle distinction from white |
| `g90` | Gray 90 background, dark theme | Dark mode |
| `g100` | Gray 100 background, dark theme | Maximum contrast dark mode |

### Theme hook
Use `useTheme` to read or switch the theme dynamically:

```tsx
import { useTheme } from '@stoovles/carbon-makekit'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button onClick={() => setTheme(theme === 'white' ? 'g100' : 'white')}>
      Toggle theme
    </Button>
  )
}
```

## Build configuration
This package is built with Vite and requires `sass` for Sass compilation:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
})
```

## Rules
- `ThemeProvider` is required at the app root for themes to work
- Do NOT add custom Carbon Sass configurations — the package provides all styles
- All components are named exports from `@stoovles/carbon-makekit`
