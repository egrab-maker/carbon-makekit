# Spacing Tokens

## Spacing scale
Carbon uses an 8px-based spacing scale (the "mini unit"). All spacing in layouts, padding, margins, and gaps should use these tokens.

| Token | Value | Pixels | Common usage |
|-------|-------|--------|-------------|
| `spacing01` | 0.125rem | 2px | Micro spacing, icon gaps |
| `spacing02` | 0.25rem | 4px | Tight spacing, inline elements |
| `spacing03` | 0.5rem | 8px | Compact padding, small gaps |
| `spacing04` | 0.75rem | 12px | Default input padding |
| `spacing05` | 1rem | 16px | Standard padding and gaps |
| `spacing06` | 1.5rem | 24px | Section spacing |
| `spacing07` | 2rem | 32px | Large section spacing |
| `spacing08` | 2.5rem | 40px | Component height (medium) |
| `spacing09` | 3rem | 48px | Component height (large) |
| `spacing10` | 4rem | 64px | Major section breaks |
| `spacing11` | 5rem | 80px | Page-level spacing |
| `spacing12` | 6rem | 96px | Large page margins |
| `spacing13` | 10rem | 160px | Maximum spacing |

## Container sizes (component heights)
| Size | Value | Pixels | Usage |
|------|-------|--------|-------|
| XSmall | 1.5rem | 24px | Compact tags, badges |
| Small (sm) | 2rem | 32px | Small buttons, inputs |
| Medium (md) | 2.5rem | 40px | Default buttons, inputs |
| Large (lg) | 3rem | 48px | Large buttons, inputs (Carbon default) |
| XLarge (xl) | 4rem | 64px | Extra large buttons |
| 2XLarge (2xl) | 5rem | 80px | Maximum size buttons |

## Breakpoints
| Name | Width | Columns | Usage |
|------|-------|---------|-------|
| `sm` | 320px | 4 | Mobile |
| `md` | 672px | 8 | Tablet |
| `lg` | 1056px | 16 | Desktop |
| `xlg` | 1312px | 16 | Large desktop |
| `max` | 1584px | 16 | Maximum width |

## Rules
- ALWAYS use spacing tokens for padding, margins, and gaps
- Never hardcode pixel values for spacing
- Carbon's default component height is `lg` (48px / 3rem)
- Use `spacing05` (16px) as the default gap between form elements
- Use `spacing07` (32px) as the default section spacing
