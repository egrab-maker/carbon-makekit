# RadioButton

## When to use
Use RadioButtonGroup with RadioButton children for mutually exclusive choices. Prefer over Dropdown when there are 2-5 options.

## RadioButtonGroup Props
| Prop | Type | Default |
|------|------|---------|
| `name` | `string` | required |
| `legendText` | `ReactNode` | required |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `defaultSelected` | `string` | — |
| `valueSelected` | `string` | — (controlled) |
| `onChange` | `(value, name, event) => void` | — |
| `disabled` | `boolean` | `false` |

## RadioButton Props
| Prop | Type | Default |
|------|------|---------|
| `id` | `string` | required |
| `value` | `string` | required |
| `labelText` | `ReactNode` | required |
| `disabled` | `boolean` | `false` |
| `labelPosition` | `'left' \| 'right'` | `'right'` |

## Examples
```tsx
import { RadioButton, RadioButtonGroup } from '@stoovles/carbon-makekit'

<RadioButtonGroup name="plan" legendText="Select a plan" defaultSelected="pro">
  <RadioButton id="free" value="free" labelText="Free" />
  <RadioButton id="pro" value="pro" labelText="Pro" />
  <RadioButton id="enterprise" value="enterprise" labelText="Enterprise" />
</RadioButtonGroup>
```

## Rules
- Always wrap RadioButton in RadioButtonGroup
- Each RadioButton must have a unique `value` within the group
- Use horizontal orientation for 2-3 options, vertical for more
