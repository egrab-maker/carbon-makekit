# Carbon Design System MakeKit Guidelines

## Product character
This is the **IBM Carbon Design System** — a mature, enterprise-grade design system optimized for data-dense, productivity-focused applications.

- **Density**: Compact and efficient, with generous but purposeful whitespace
- **Surface strategy**: Layered — `$background` page canvas with `$layer-01` cards and containers
- **Color palette**: Predominantly neutral grays with blue (`$interactive` / `#0f62fe`) as the primary action color. Used sparingly for CTAs and interactive elements only
- **Corner style**: None (0px border-radius) for most elements; some components have 0 or minimal rounding
- **Typography**: IBM Plex Sans, a humanist sans-serif optimized for UI text
- **Iconography**: 16px and 20px icons from Carbon's icon library

## Reading order
**MUST READ before writing any code:**
1. This file (`overview.md`) — system character, rules, and workflows
2. `setup.md` — imports, ThemeProvider, build configuration
3. `foundations/` — all token files (color, typography, spacing, motion)
4. `components/overview.md` — full component catalog with alternative names

**Read on-demand:**
- `components/{name}.md` — read BEFORE using that component
- `composition/` — read when building page layouts or combining components

## Workflows

### Before using a component
1. Check `components/overview.md` for the component catalog
2. Read `components/{name}.md` for the specific component
3. Follow all rules, valid props, and usage notes
4. Do NOT write code using a component until you have read its guidelines file

### When building a layout
1. Read `composition/layout.md` for page structure patterns
2. Read `composition/forms.md` for form composition
3. Use Carbon's spacing tokens — never hardcode pixel values
4. Use `$background` as the page canvas, `$layer-01` for elevated content

## Rules
- Always use design system components from `@stoovles/carbon-makekit` over raw HTML elements (`Button` not `<button>`, `TextInput` not `<input>`)
- All spacing must use Carbon spacing tokens — never hardcode pixel values
- Import styles via `import '@stoovles/carbon-makekit/styles.css'`
- Wrap your app in `<ThemeProvider>` for theme support
- The four available themes are: `white` (default), `g10`, `g90`, `g100`
- Carbon uses `cds--` as its CSS class prefix — do not create custom classes that start with `cds--`
- Do NOT use bright or brand colors as backgrounds for large areas — blue is for interactive elements only
