# Toggle

## When to use
Use Toggle for on/off settings that take effect immediately. Prefer Toggle over Checkbox when the action is a setting (not a form field).

## Props
| Prop | Type | Default |
|------|------|---------|
| `id` | `string` | required |
| `labelText` | `ReactNode` | required |
| `labelA` | `string` | `'Off'` |
| `labelB` | `string` | `'On'` |
| `toggled` | `boolean` | — (controlled) |
| `defaultToggled` | `boolean` | `false` |
| `onToggle` | `(checked: boolean) => void` | — |
| `disabled` | `boolean` | `false` |
| `readOnly` | `boolean` | `false` |
| `size` | `'' \| 'sm'` | `''` (regular) |
| `hideLabel` | `boolean` | `false` |

## Examples
```tsx
import { Toggle } from '@stoovles/carbon-makekit'

<Toggle id="notifications" labelText="Enable notifications" />

<Toggle id="dark-mode" labelText="Dark mode" size="sm" labelA="Light" labelB="Dark" />
```

## Rules
- Always provide `id` and `labelText`
- Use Toggle for settings, Checkbox for form selections
- `labelA` is the off-state label, `labelB` is the on-state label
