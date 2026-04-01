# Tag

## When to use
Use Tag for categorization labels, status indicators, and filter chips.

## Types (colors)
| Type | Usage |
|------|-------|
| `gray` | Neutral, default |
| `cool-gray` | Cool neutral |
| `warm-gray` | Warm neutral |
| `red` | Error, critical |
| `magenta` | Category |
| `purple` | Category |
| `blue` | Informational |
| `cyan` | Category |
| `teal` | Category |
| `green` | Success, active |
| `high-contrast` | High visibility |
| `outline` | Subtle, outline only |

## Props
| Prop | Type | Default |
|------|------|---------|
| `type` | `TagType` | `'gray'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `filter` | `boolean` | `false` (adds close button) |
| `onClose` | `() => void` | — (for filter tags) |
| `disabled` | `boolean` | `false` |
| `renderIcon` | `React.ElementType` | — |

## Examples
```tsx
import { Tag } from '@stoovles/carbon-makekit'

<Tag type="blue">Active</Tag>
<Tag type="green">Approved</Tag>
<Tag type="red">Rejected</Tag>
<Tag type="gray" size="sm">Draft</Tag>

{/* Filter tag (dismissible) */}
<Tag type="blue" filter onClose={() => console.log('removed')}>
  Filter value
</Tag>
```

## Rules
- Use semantic colors: `green` for success, `red` for errors, `blue` for info
- Use `filter` prop for dismissible/removable tags
- Provide `onClose` when using `filter`
