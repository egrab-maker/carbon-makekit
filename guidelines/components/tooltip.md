# Tooltip

## When to use
Use Tooltip for contextual hints that appear on hover or focus. Good for icon button labels, abbreviation explanations, and supplementary info.

## Props
| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | required (tooltip text) |
| `align` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` |
| `enterDelayMs` | `number` | `100` |
| `leaveDelayMs` | `number` | `300` |
| `defaultOpen` | `boolean` | `false` |
| `children` | `ReactNode` | required (trigger element) |

## Examples
```tsx
import { Tooltip, Button } from '@stoovles/carbon-makekit'

<Tooltip label="Save your current progress" align="bottom">
  <Button kind="primary">Save</Button>
</Tooltip>

<Tooltip label="More options">
  <Button kind="ghost" hasIconOnly renderIcon={OverflowIcon} tooltipText="More" />
</Tooltip>
```

## Rules
- Keep tooltip text concise (1-2 short sentences max)
- Use `align` to position away from screen edges
- Tooltips show on hover and focus, hide on blur and mouse leave
- Do NOT use tooltips for critical information — it must be discoverable without hover
