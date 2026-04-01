# Component Catalog

Always prefer components from `@stoovles/carbon-makekit` over plain HTML elements. Do NOT write code using a component until you have read its guidelines file.

```tsx
import { Button, TextInput, Dropdown, Modal } from '@stoovles/carbon-makekit'
```

## Buttons & Actions
| Component | Alt names | Purpose | Guidelines |
|-----------|-----------|---------|------------|
| Button | CTA, action button | Primary, secondary, tertiary, ghost, danger actions | button.md |

## Inputs & Forms
| Component | Alt names | Purpose | Guidelines |
|-----------|-----------|---------|------------|
| TextInput | Text field, input | Single-line text entry with label | text-input.md |
| Dropdown | Select, picker | Selection from predefined options | dropdown.md |
| Checkbox | Check, boolean input | Boolean selection with label | checkbox.md |
| RadioButton + RadioButtonGroup | Radio buttons, single select | Mutually exclusive choices | radio-button.md |
| Toggle | Switch, toggle switch | On/off toggle setting | toggle.md |

## Navigation
| Component | Alt names | Purpose | Guidelines |
|-----------|-----------|---------|------------|
| Breadcrumb + BreadcrumbItem | Breadcrumbs, nav trail | Page location hierarchy | breadcrumb.md |
| Tabs + TabList + Tab + TabPanels + TabPanel | Tab bar, tabbed content | Content switching within a section | tabs.md |

## Feedback & Status
| Component | Alt names | Purpose | Guidelines |
|-----------|-----------|---------|------------|
| InlineNotification | Alert, inline message | Inline status message with icon | notification.md |
| ToastNotification | Toast, snackbar | Brief notification that can auto-dismiss | notification.md |
| Loading | Spinner, loader | Loading state indicator | loading.md |
| Tag | Label, badge, chip | Categorization label | tag.md |
| Tooltip | Hint, popover info | Contextual hint on hover/focus | tooltip.md |

## Layout
| Component | Alt names | Purpose | Guidelines |
|-----------|-----------|---------|------------|
| Accordion + AccordionItem | Expandable sections, collapsible | Vertically stacked expandable sections | accordion.md |
| Modal | Dialog, popup, overlay | Focused task dialog with backdrop | modal.md |
| ThemeProvider | Theme wrapper | App root provider for theme management | ../setup.md |

## Common props
Most components accept:
- `className`: Additional CSS classes
- `disabled`: Boolean to disable the component
- `size`: Component size variant (`sm`, `md`, `lg`)
- All native HTML attributes via `...rest` spread

## Button variant decision tree
```
Main call-to-action? → kind="primary"
Supporting action? → kind="secondary"
Low-emphasis text action? → kind="tertiary"
Minimal ghost action? → kind="ghost"
Destructive action? → kind="danger"
```

## Input selection decision tree
```
Choose from fixed options (dropdown)? → Dropdown
Choose one of few options? → RadioButtonGroup
Boolean on/off toggle? → Toggle (setting) or Checkbox (form field)
Short text input? → TextInput
```
