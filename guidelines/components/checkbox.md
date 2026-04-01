# Checkbox

## When to use
Use Checkbox for boolean selections. Use CheckboxGroup to group related checkboxes.

## Checkbox Props
| Prop | Type | Default |
|------|------|---------|
| `id` | `string` | required |
| `labelText` | `ReactNode` | required |
| `checked` | `boolean` | — (controlled) |
| `defaultChecked` | `boolean` | — (uncontrolled) |
| `indeterminate` | `boolean` | `false` |
| `onChange` | `(e, { checked, id }) => void` | — |
| `disabled` | `boolean` | `false` |
| `readOnly` | `boolean` | `false` |
| `hideLabel` | `boolean` | `false` |

## CheckboxGroup Props
| Prop | Type | Default |
|------|------|---------|
| `legendText` | `ReactNode` | required |
| `orientation` | `'horizontal' \| 'vertical'` | `'vertical'` |
| `children` | `ReactNode` | required |

## Examples
```tsx
import { Checkbox, CheckboxGroup } from '@stoovles/carbon-makekit'

<CheckboxGroup legendText="Select toppings">
  <Checkbox id="cheese" labelText="Extra cheese" />
  <Checkbox id="pepperoni" labelText="Pepperoni" />
  <Checkbox id="mushrooms" labelText="Mushrooms" defaultChecked />
</CheckboxGroup>
```

## Rules
- Always wrap checkboxes in CheckboxGroup when there are multiple related options
- Always provide `id` for each Checkbox — it links the label
- Use `indeterminate` for "select all" parent checkboxes
