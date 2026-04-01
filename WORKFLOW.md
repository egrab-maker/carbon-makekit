# Generation Workflow

This document describes the end-to-end workflow used to generate the Carbon MakeKit — from extracting design system source material through to assembling the final MakeKit in Figma Make.

## Overview

The workflow has six phases, designed to be executed sequentially with AI assistance:

1. **Extract** — Pull design tokens and component specs from Carbon's non-React packages
2. **Scaffold** — Create the npm package structure, build config, and theming layer
3. **Generate** — Produce React components using structured prompts and extracted source material
4. **Publish** — Build the package and publish to npm
5. **Document** — Write MakeKit guidelines that teach Figma Make how to use the components
6. **Validate** — Test in Figma Make and iterate

## Constraints

The core constraint driving this workflow: **no reference to `@carbon/react`**. The goal is to evaluate AI's ability to generate React components from non-React design system assets alone. The only Carbon packages used as source material are:

- `@carbon/styles` — Sass stylesheets and BEM class definitions
- `@carbon/web-components` — Lit-based web components (for API specs only, not code reuse)
- `@carbon/colors`, `@carbon/themes`, `@carbon/type`, `@carbon/layout`, `@carbon/motion` — Design token packages

---

## Phase 1: Extract source material

### Design tokens

Extract concrete values from Carbon's JavaScript token packages into a portable TypeScript reference format. These serve as the factual foundation for both component generation and MakeKit guidelines.

| Token category | Source package | What to extract |
|---|---|---|
| Colors | `@carbon/colors` | Full IBM color palette with hex values |
| Themes | `@carbon/themes` | Semantic color mappings for white, g10, g90, g100 |
| Typography | `@carbon/type` | Font families, weights, size scale, type styles |
| Spacing | `@carbon/layout` | Spacing scale, breakpoints, container sizes |
| Motion | `@carbon/motion` | Duration values and easing curves |

The extracted tokens are written to `src/tokens/` as TypeScript files, giving both the package and the guidelines a single source of truth.

### Component specifications

For each target component, read the web component's `defs.ts` file from `@carbon/web-components`. These files contain:

- Enum values (e.g., button kinds, input sizes)
- Property names and defaults
- Event signatures
- Variant constants

This gives the AI a precise API specification to target, without seeing any React implementation.

**Tier 1 components selected (15):**

Accordion, Breadcrumb, Button, Checkbox, Dropdown, Link, Loading, Modal, Notification (Inline + Toast), RadioButton, Tabs, Tag, TextInput, Toggle, Tooltip

Selection criteria: most commonly used in enterprise UI, covers all major interaction patterns (actions, inputs, navigation, feedback, layout).

---

## Phase 2: Scaffold the package

Create the npm package with:

- **Vite config** — Library mode build, ESM output, React externalized, Sass compilation with `modern-compiler` API
- **TypeScript config** — Strict mode, declaration emit, JSX React-JSX transform
- **`package.json`** — Proper `exports` map for both JS and CSS entry points, peer dependencies on React 18/19
- **ThemeProvider** — A React Context component that applies Carbon theme classes (`cds--white`, `cds--g10`, etc.) to a wrapping div and exposes a `useTheme` hook for runtime switching
- **Global styles** — A single `@use '@carbon/styles'` entry point that pulls in Carbon's full stylesheet
- **Barrel exports** — `src/index.ts` re-exporting all components, types, and tokens

---

## Phase 3: Generate components

### Per-component prompt template

Each component is generated using a structured prompt that includes:

1. **Role** — "Generate a React component for Carbon Design System"
2. **Source material** — The extracted `defs.ts` enums/constants for that component
3. **Requirements checklist:**
   - Functional component using `React.forwardRef`
   - TypeScript with exported prop interface
   - Apply Carbon BEM classes (`cds--` prefix) — no inline styles, no CSS modules
   - Support all variants from the web component spec (kinds, sizes, states)
   - Include ARIA attributes and keyboard handling
   - Accept `className` and spread `...rest` props
   - No dependency on `@carbon/react` or any React-specific Carbon package
   - Embed small SVG icons inline rather than importing from an icon package

### Generation checklist (applied per component)

After generation, each component is verified against:

- [ ] Props match the web component spec (names, types, defaults)
- [ ] All variant enum values are handled
- [ ] BEM class names follow the `cds--{component}--{modifier}` pattern
- [ ] `disabled`, `readOnly`, and `invalid` states are implemented
- [ ] ARIA attributes are present (`aria-label`, `aria-expanded`, `aria-selected`, etc.)
- [ ] Keyboard interaction works (Enter, Space, Escape, Arrow keys as appropriate)
- [ ] `forwardRef` is wired correctly
- [ ] Component has a `displayName`
- [ ] TypeScript compiles without errors

### Complex component notes

Some components required additional attention:

- **Modal** — Uses `createPortal` to render to `document.body`, implements focus trapping and Escape key dismissal
- **Dropdown** — Full keyboard navigation (ArrowUp/Down, Enter, Escape), click-outside-to-close, controlled/uncontrolled selection
- **Tabs** — Context-based architecture with `Tabs > TabList > Tab` and `TabPanels > TabPanel`, automatic and manual activation modes, arrow key navigation
- **Tooltip** — Hover/focus delay timers, `cloneElement` to inject trigger props onto the child element
- **Accordion** — Context for propagating disabled state from parent to items

---

## Phase 4: Build and publish

```bash
npm run build    # vite build && tsc --emitDeclarationOnly
npm publish --access public
```

The build produces:
- `dist/index.js` — ESM bundle (~66 KB) with all components, React externalized
- `dist/index.css` — Compiled Carbon stylesheet (~813 KB) with all theme classes and component styles

### `package.json` exports

The exports map is critical for bundler resolution in Figma Make's runtime:

```json
{
  ".": { "import": "./dist/index.js", "types": "./dist/index.d.ts" },
  "./styles.css": "./dist/index.css",
  "./dist/index.css": "./dist/index.css"
}
```

The `./dist/index.css` entry exists because Figma Make's bundler may resolve the literal `dist/` path.

---

## Phase 5: Write MakeKit guidelines

Guidelines are markdown files that Figma Make's AI reads to understand how to use the components. They are **not** published to npm — they're uploaded separately in the MakeKit UI.

### Guideline structure

| File | Purpose |
|---|---|
| `overview.md` | System character, mandatory reading order, global rules |
| `setup.md` | Import paths, ThemeProvider setup, build config |
| `foundations/color.md` | CSS custom property names for colors, usage rules |
| `foundations/typography.md` | Type scale, font usage |
| `foundations/spacing.md` | Spacing tokens, grid system |
| `foundations/motion.md` | Duration and easing values |
| `components/overview.md` | Full catalog with alternative names (so the AI can map "select" to `Dropdown`) |
| `components/{name}.md` | Per-component: valid props, variants, usage examples, do/don't rules |
| `composition/layout.md` | Page structure, surface strategy, grid patterns |
| `composition/forms.md` | Form layout, validation patterns, field grouping |
| `composition/navigation.md` | Breadcrumb, tabs, and navigation composition |

### Key guideline principles

- **Be explicit about import paths** — Figma Make generates `import` statements from what the guidelines say, so exact package names and paths matter
- **Include alternative names** — Map common terms ("select", "picker", "toggle switch") to the actual component names
- **Show don'ts, not just dos** — e.g., "do NOT hardcode hex colors, use `var(--cds-*)` custom properties"
- **Provide decision trees** — Help the AI choose between similar components (Dropdown vs RadioButtonGroup, Toggle vs Checkbox)

---

## Phase 6: Validate and iterate

### Local validation

A component showcase (`src/App.tsx`) renders every component with all variants, states, and sizes. Run with `npm run dev` and visually verify against Carbon's documentation.

The showcase includes:
- All button kinds and sizes
- All input states (valid, invalid, warning, disabled, read-only)
- All tag color types
- All notification kinds
- Modal variants (standard, danger, passive)
- A live theme switcher (white / g10 / g90 / g100)
- A composition example (full form combining multiple components)

### Figma Make validation

Test prompts that exercise different aspects:

1. **Dashboard page** (g100 theme) — Breadcrumb, Tags, Tabs, InlineNotification, layout composition
2. **Settings/form page** (white theme) — TextInput, Dropdown, Checkbox, RadioButton, Toggle, Button, form layout
3. **Confirmation flow** (g90 theme) — Accordion, Modal with trigger, Tag, Tooltip, ToastNotification
4. **Onboarding wizard** (g10 theme) — Multi-step state management, Loading, all input types, passive Modal

Each prompt targets a different theme to verify token application across all four Carbon themes.

### Common issues and fixes

| Issue | Cause | Fix |
|---|---|---|
| `Missing "./dist/index.css" specifier` | `package.json` exports didn't map the CSS path | Add `"./dist/index.css": "./dist/index.css"` to exports |
| `Failed to resolve import` | Package not published or MakeKit not refreshed | Republish package, re-save MakeKit |
| Styles not applying | CSS import missing or ThemeProvider not wrapping app | Ensure guidelines explicitly state the import path |
| Wrong package name in generated code | Stale guidelines referencing old package name | Update all guideline files to use correct `@scope/name` |

---

## Reproducing this workflow

To apply this workflow to a different design system:

1. **Identify token packages** — Find where the design system publishes its color, typography, spacing, and motion values
2. **Identify component specs** — Find the canonical list of component properties, variants, and states (web component definitions, Storybook args, TypeScript interfaces, or documentation)
3. **Select Tier 1 components** — Pick 10-20 most-used components that cover actions, inputs, navigation, feedback, and layout
4. **Extract and scaffold** — Pull tokens into TypeScript, set up the Vite library build
5. **Generate with structured prompts** — Feed the AI the extracted specs and a requirements checklist for each component
6. **Write guidelines** — Document every component's API, valid props, and usage patterns in markdown
7. **Iterate in Figma Make** — Test, find errors, fix the package or guidelines, republish
