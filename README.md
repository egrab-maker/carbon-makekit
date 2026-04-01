# Carbon MakeKit

AI-generated React components based on IBM's [Carbon Design System](https://carbondesignsystem.com/), packaged as a [Figma Make](https://www.figma.com/make/) MakeKit.

## What is this?

This project explores a workflow for teams that use a non-React design system but want high-fidelity prototypes from Figma Make (a prompt-to-prototype tool that outputs React). The idea: pre-generate a set of React components from non-React design system assets, publish them as an npm package, and bundle them with guidelines into a MakeKit that Figma Make can reuse across any prototype.

Carbon was chosen as the test case. **Importantly, these components were generated entirely from Carbon's non-React assets** — Sass styles (`@carbon/styles`), web component specs, and design token packages — without referencing `@carbon/react`. The goal is to evaluate how effectively AI can produce usable React components from non-React source material.

## What's in the box

### npm package (`@stoovles/carbon-makekit`)

15 Tier 1 Carbon components implemented as React functional components with TypeScript:

| Category | Components |
|---|---|
| Actions | Button, Link |
| Inputs | TextInput, Dropdown, Checkbox, RadioButton, Toggle |
| Navigation | Breadcrumb, Tabs |
| Feedback | InlineNotification, ToastNotification, Loading, Tag, Tooltip |
| Layout | Accordion, Modal |
| Theming | ThemeProvider (white, g10, g90, g100) |

Each component:
- Uses `React.forwardRef` and accepts standard HTML attributes via rest spread
- Applies Carbon's BEM class names (`cds--*`) for styling
- Includes proper ARIA attributes and keyboard handling
- Is typed with exported prop interfaces

### MakeKit guidelines (`guidelines/`)

Markdown files uploaded to Figma Make that instruct the AI how to use the components:

```
guidelines/
├── overview.md              # System character, rules, reading order
├── setup.md                 # Imports, ThemeProvider, build config
├── foundations/
│   ├── color.md             # Color tokens and CSS custom properties
│   ├── typography.md        # Type scale and font usage
│   ├── spacing.md           # Spacing tokens and grid
│   └── motion.md            # Motion durations and easing
├── components/
│   ├── overview.md          # Component catalog with alt names
│   ├── button.md            # Per-component API and usage
│   ├── text-input.md
│   └── ...                  # (one file per component)
└── composition/
    ├── layout.md            # Page structure patterns
    ├── forms.md             # Form composition
    └── navigation.md        # Navigation patterns
```

## Usage

### In Figma Make

1. Publish the package to npm
2. In Figma Make, create a new MakeKit
3. Add `@stoovles/carbon-makekit` as a package dependency
4. Upload the `guidelines/` markdown files
5. Publish the MakeKit
6. Use the MakeKit when creating new Makes — Figma Make will use the components and follow the guidelines

### Local development

A component showcase is included for local testing:

```bash
npm install
npm run dev
```

Open `http://localhost:5173` to see all components rendered with variant/state coverage and a live theme switcher.

### Build

```bash
npm run build
```

Produces `dist/index.js` (ESM) and `dist/index.css` (Carbon's compiled styles).

## Design tokens

Styles are powered by `@carbon/styles` and exposed as CSS custom properties (`--cds-*`). Wrap your app in `<ThemeProvider>` to activate a theme:

```tsx
import { ThemeProvider, Button } from '@stoovles/carbon-makekit'
import '@stoovles/carbon-makekit/styles.css'

function App() {
  return (
    <ThemeProvider theme="g100">
      <Button kind="primary">Click me</Button>
    </ThemeProvider>
  )
}
```

Available themes: `white`, `g10`, `g90`, `g100`.

## Project context

This is an experiment, not a production design system package. It exists to answer the question: **can AI generate a usable React component layer from a non-React design system, good enough for Figma Make prototyping?**

See [WORKFLOW.md](./WORKFLOW.md) for the full generation methodology — how tokens were extracted, how components were prompted and verified, how guidelines were structured, and how to reproduce this workflow for a different design system.

The source Carbon repo is at [`carbon-design-system/carbon`](https://github.com/carbon-design-system/carbon). This project is not affiliated with or endorsed by IBM.

## License

Apache-2.0
