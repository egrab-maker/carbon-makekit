# Button

## When to use
Use Button for all interactive actions — form submissions, navigation triggers, and commands. Always use the `Button` component, never a raw `<button>` element.

## Variants (kind)
| Kind | Frequency | Use for |
|------|-----------|---------|
| `primary` | ~25% | Main CTA — one per visible section |
| `secondary` | ~30% | Supporting actions alongside primary |
| `tertiary` | ~20% | Low-emphasis actions, text-like buttons |
| `ghost` | ~15% | Minimal actions, icon buttons in toolbars |
| `danger` | ~5% | Destructive actions (delete, remove) |
| `danger-tertiary` | ~3% | Low-emphasis destructive actions |
| `danger-ghost` | ~2% | Minimal destructive actions |

IMPORTANT: Valid `kind` values are `"primary"`, `"secondary"`, `"tertiary"`, `"ghost"`, `"danger"`, `"danger-tertiary"`, `"danger-ghost"` — nothing else.

## Sizes
| Size | Height | Usage |
|------|--------|-------|
| `xs` | 24px | Extremely compact (rarely used) |
| `sm` | 32px | Compact UIs, table rows |
| `md` | 40px | Medium density |
| `lg` | 48px | **Default — most cases** |
| `xl` | 64px | Extra large |
| `2xl` | 80px | Maximum size |

## Props
| Prop | Type | Default |
|------|------|---------|
| `kind` | `'primary' \| 'secondary' \| 'tertiary' \| 'ghost' \| 'danger' \| 'danger-tertiary' \| 'danger-ghost'` | `'primary'` |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `undefined` (defaults to lg) |
| `disabled` | `boolean` | `false` |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` |
| `href` | `string` | — (renders as `<a>` when provided) |
| `renderIcon` | `React.ElementType` | — |
| `hasIconOnly` | `boolean` | `false` |
| `tooltipText` | `string` | — (for icon-only buttons) |
| `isExpressive` | `boolean` | `false` |
| `dangerDescription` | `string` | `'Danger'` |

## Examples
```tsx
import { Button } from '@stoovles/carbon-makekit'

{/* Primary CTA */}
<Button kind="primary">Save changes</Button>

{/* Secondary */}
<Button kind="secondary">Cancel</Button>

{/* Tertiary */}
<Button kind="tertiary">Learn more</Button>

{/* Ghost */}
<Button kind="ghost">View details</Button>

{/* Danger */}
<Button kind="danger">Delete</Button>

{/* Small size */}
<Button kind="primary" size="sm">Compact action</Button>

{/* As link */}
<Button kind="primary" href="/dashboard">Go to dashboard</Button>

{/* Icon-only with tooltip */}
<Button kind="ghost" hasIconOnly tooltipText="Settings" renderIcon={SettingsIcon} />
```

## Rules
- Only one `primary` button per visible section
- Primary action goes on the right in button groups (Cancel left, Save right)
- Use `kind="danger"` only for destructive actions
- Always provide `tooltipText` for icon-only buttons
- Do not use `kind` values that don't exist
