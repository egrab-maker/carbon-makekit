# Loading

## When to use
Use Loading to indicate that content or an action is in progress.

## Props
| Prop | Type | Default |
|------|------|---------|
| `active` | `boolean` | `true` |
| `small` | `boolean` | `false` |
| `withOverlay` | `boolean` | `false` |
| `description` | `string` | `'Loading'` (aria-label) |

## Examples
```tsx
import { Loading } from '@stoovles/carbon-makekit'

{/* Default spinner */}
<Loading description="Loading data" />

{/* Small inline spinner */}
<Loading small description="Saving" />

{/* Full-page overlay */}
<Loading withOverlay description="Loading page" />
```

## Rules
- Use `small` for inline loading indicators (next to buttons, in table cells)
- Use `withOverlay` for blocking loading states (page load, form submission)
- Always provide `description` for screen reader accessibility
