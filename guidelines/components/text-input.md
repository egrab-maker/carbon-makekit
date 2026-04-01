# TextInput

## When to use
Use TextInput for single-line text entry. Always use `TextInput` instead of raw `<input>`.

## Props
| Prop | Type | Default |
|------|------|---------|
| `id` | `string` | required |
| `labelText` | `ReactNode` | required |
| `type` | `'text' \| 'email' \| 'password' \| 'tel' \| 'url'` | `'text'` |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| `placeholder` | `string` | — |
| `defaultValue` | `string` | — |
| `value` | `string` | — |
| `onChange` | `(e: ChangeEvent) => void` | — |
| `helperText` | `ReactNode` | — |
| `invalidText` | `ReactNode` | — |
| `warnText` | `ReactNode` | — |
| `invalid` | `boolean` | `false` |
| `warn` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `readOnly` | `boolean` | `false` |
| `hideLabel` | `boolean` | `false` |
| `inline` | `boolean` | `false` |

## Examples
```tsx
import { TextInput } from '@stoovles/carbon-makekit'

<TextInput
  id="email"
  labelText="Email address"
  type="email"
  placeholder="user@example.com"
  helperText="We'll never share your email"
/>

{/* With validation error */}
<TextInput
  id="name"
  labelText="Full name"
  invalid
  invalidText="Name is required"
/>

{/* Warning state */}
<TextInput
  id="username"
  labelText="Username"
  warn
  warnText="Username is already taken"
/>
```

## Rules
- Always provide `labelText` — use `hideLabel` only when context makes the label redundant
- Always provide `id` — it links the label to the input for accessibility
- Show `helperText` for guidance, `invalidText` for errors, `warnText` for warnings
- Only one validation state shows at a time: invalid takes priority over warn
