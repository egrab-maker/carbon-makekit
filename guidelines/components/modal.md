# Modal

## When to use
Use Modal for focused tasks that require user attention — confirmations, forms, detailed information. Modals block interaction with the page behind them.

## Props
| Prop | Type | Default |
|------|------|---------|
| `open` | `boolean` | required |
| `onRequestClose` | `() => void` | — |
| `onRequestSubmit` | `(event) => void` | — |
| `modalLabel` | `ReactNode` | — (subtitle above heading) |
| `modalHeading` | `ReactNode` | — |
| `primaryButtonText` | `string` | — |
| `secondaryButtonText` | `string` | — |
| `primaryButtonDisabled` | `boolean` | `false` |
| `danger` | `boolean` | `false` |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| `passiveModal` | `boolean` | `false` (no footer) |
| `preventCloseOnClickOutside` | `boolean` | `false` |
| `hasScrollingContent` | `boolean` | `false` |
| `children` | `ReactNode` | — (body content) |

## Examples
```tsx
import { Modal, Button } from '@stoovles/carbon-makekit'
import { useState } from 'react'

function ConfirmDialog() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={() => { /* handle submit */ setOpen(false) }}
        modalHeading="Confirm action"
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
      >
        <p>Are you sure you want to proceed?</p>
      </Modal>
    </>
  )
}

{/* Danger modal */}
<Modal
  open={open}
  danger
  modalHeading="Delete item"
  primaryButtonText="Delete"
  secondaryButtonText="Cancel"
  onRequestClose={() => setOpen(false)}
>
  <p>This action cannot be undone.</p>
</Modal>

{/* Passive modal (no actions, just close) */}
<Modal
  open={open}
  passiveModal
  modalHeading="Information"
  onRequestClose={() => setOpen(false)}
>
  <p>Here is some information.</p>
</Modal>
```

## Behavior
- **Focus trap**: Focus is trapped inside the modal when open
- **Escape**: Closes the modal
- **Click outside**: Closes the modal (unless `preventCloseOnClickOutside`)
- **Portal**: Modal renders into `document.body` via React portal

## Rules
- Always provide `onRequestClose` to handle closing
- Use `danger` for destructive actions (delete, remove)
- Use `passiveModal` when there are no actions needed
- Use `size="sm"` for simple confirmations, `size="lg"` for complex forms
