# Accordion

## When to use
Use Accordion for vertically stacked expandable/collapsible sections. Good for FAQs, settings, and long-form content.

## Accordion Props
| Prop | Type | Default |
|------|------|---------|
| `align` | `'start' \| 'end'` | `'end'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'lg'` |
| `disabled` | `boolean` | `false` |

## AccordionItem Props
| Prop | Type | Default |
|------|------|---------|
| `title` | `ReactNode` | required |
| `open` | `boolean` | — (controlled) |
| `defaultOpen` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `onHeadingClick` | `(event) => void` | — |
| `children` | `ReactNode` | required (panel content) |

## Examples
```tsx
import { Accordion, AccordionItem } from '@stoovles/carbon-makekit'

<Accordion>
  <AccordionItem title="What is Carbon?">
    Carbon is IBM's open-source design system.
  </AccordionItem>
  <AccordionItem title="How do I get started?">
    Install the package and import components.
  </AccordionItem>
  <AccordionItem title="Can I customize it?" defaultOpen>
    Yes, using themes and tokens.
  </AccordionItem>
</Accordion>
```

## Rules
- `align="start"` puts the chevron on the left, `"end"` on the right (default)
- Each AccordionItem manages its own open/close state by default
- Use `disabled` on Accordion to disable all items, or on individual AccordionItem
