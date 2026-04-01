# Notification

## When to use
Use InlineNotification for persistent status messages within the page flow. Use ToastNotification for brief, dismissible messages.

## Kinds
| Kind | Icon | Usage |
|------|------|-------|
| `success` | Checkmark | Action completed successfully |
| `info` | Information | General information |
| `info-square` | Information (square) | Alternative info style |
| `warning` | Warning triangle | Caution, potential issue |
| `warning-alt` | Warning (alt) | Alternative warning style |
| `error` | Error circle | Error, action failed |

## InlineNotification Props
| Prop | Type | Default |
|------|------|---------|
| `kind` | `NotificationKind` | required |
| `title` | `string` | required |
| `subtitle` | `ReactNode` | — |
| `hideCloseButton` | `boolean` | `false` |
| `onClose` | `() => void` | — |
| `lowContrast` | `boolean` | `false` |
| `role` | `string` | `'status'` |
| `statusIconDescription` | `string` | — |

## ToastNotification Props
Same as InlineNotification plus:
| Prop | Type | Default |
|------|------|---------|
| `caption` | `ReactNode` | — |
| `timeout` | `number` | `0` (no auto-dismiss) |

## Examples
```tsx
import { InlineNotification, ToastNotification } from '@stoovles/carbon-makekit'

<InlineNotification
  kind="success"
  title="Success"
  subtitle="Your changes have been saved."
/>

<InlineNotification
  kind="error"
  title="Error"
  subtitle="Failed to save. Please try again."
/>

<ToastNotification
  kind="info"
  title="New update"
  subtitle="A new version is available."
  caption="Just now"
  timeout={5000}
/>
```

## Rules
- Use `kind="error"` for failures, `kind="success"` for confirmations
- InlineNotification for persistent messages, ToastNotification for transient ones
- Set `timeout` on ToastNotification for auto-dismiss (in milliseconds)
- Use `lowContrast` for subtler visual treatment
