# Dropdown

## When to use
Use Dropdown for selecting one option from a predefined list. Prefer Dropdown over RadioButtonGroup when there are more than 5 options.

## Props
| Prop | Type | Default |
|------|------|---------|
| `id` | `string` | required |
| `items` | `Array<{ id: string, label: string }>` | required |
| `selectedItem` | `{ id: string, label: string } \| null` | — (controlled) |
| `onChange` | `({ selectedItem }) => void` | — |
| `titleText` | `ReactNode` | — (label) |
| `label` | `string` | — (placeholder text) |
| `helperText` | `ReactNode` | — |
| `invalidText` | `ReactNode` | — |
| `warnText` | `ReactNode` | — |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `type` | `'default' \| 'inline'` | `'default'` |
| `direction` | `'top' \| 'bottom'` | `'bottom'` |
| `disabled` | `boolean` | `false` |
| `invalid` | `boolean` | `false` |
| `warn` | `boolean` | `false` |
| `readOnly` | `boolean` | `false` |
| `hideLabel` | `boolean` | `false` |

## Examples
```tsx
import { Dropdown } from '@stoovles/carbon-makekit'

const items = [
  { id: 'opt1', label: 'Option 1' },
  { id: 'opt2', label: 'Option 2' },
  { id: 'opt3', label: 'Option 3' },
]

<Dropdown
  id="my-dropdown"
  titleText="Choose an option"
  label="Select..."
  items={items}
  onChange={({ selectedItem }) => console.log(selectedItem)}
/>

{/* Inline variant */}
<Dropdown
  id="inline-dropdown"
  titleText="Sort by"
  label="Name"
  type="inline"
  items={items}
/>
```

## Keyboard interaction
- **Enter / Space**: Open/close menu, select highlighted item
- **ArrowDown / ArrowUp**: Navigate items
- **Escape**: Close menu

## Rules
- Always provide `titleText` as the label
- Items must have unique `id` values
- Use `type="inline"` for compact/embedded dropdowns only
- For 5 or fewer options, consider RadioButtonGroup instead
