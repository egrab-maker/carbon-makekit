# Layout Patterns

## Page structure
A typical Carbon page follows this hierarchy:

```
ThemeProvider (theme="white")
└── Page wrapper (background)
    ├── Header / Navigation
    ├── Main content area
    │   ├── Page title (heading05)
    │   ├── Content sections (layer01 cards)
    │   │   ├── Section heading (headingCompact02)
    │   │   └── Section content
    │   └── More sections...
    └── Footer (optional)
```

## Spacing between elements
| Between | Spacing |
|---------|---------|
| Page title and first section | `spacing07` (32px) |
| Sections | `spacing07` (32px) |
| Section heading and content | `spacing05` (16px) |
| Form fields | `spacing05` (16px) |
| Buttons in a row | `spacing05` (16px) |
| Label and helper text | `spacing02` (4px) |

## Content containers
Use `layer01` background for content cards/panels on the default `background` canvas:

```tsx
<ThemeProvider theme="white">
  <div style={{ background: 'var(--cds-background)', minHeight: '100vh', padding: '2rem' }}>
    <h1 className="cds--type-heading-05">Page Title</h1>
    <div style={{ background: 'var(--cds-layer-01)', padding: '1.5rem', marginTop: '2rem' }}>
      <h2 className="cds--type-heading-compact-02">Section</h2>
      {/* content */}
    </div>
  </div>
</ThemeProvider>
```

## Responsive breakpoints
| Breakpoint | Width | Columns | Typical layout |
|------------|-------|---------|---------------|
| sm | 320px | 4 | Single column, stacked |
| md | 672px | 8 | Two column, sidebar possible |
| lg | 1056px | 16 | Full desktop layout |
| xlg | 1312px | 16 | Wide desktop |
| max | 1584px | 16 | Maximum content width |

## Rules
- Always wrap the entire app in `ThemeProvider`
- Use Carbon's type classes for headings: `cds--type-heading-05`, `cds--type-heading-compact-02`, etc.
- Use CSS custom properties for theme-aware colors: `var(--cds-background)`, `var(--cds-layer-01)`, `var(--cds-text-primary)`
- Never hardcode pixel values for spacing — use Carbon spacing tokens
