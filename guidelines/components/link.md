# Link

## When to use
Use Link for navigation to other pages or resources. Always use `Link` instead of raw `<a>`.

## Props
| Prop | Type | Default |
|------|------|---------|
| `href` | `string` | — |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `disabled` | `boolean` | `false` |
| `inline` | `boolean` | `false` |
| `visited` | `boolean` | `false` |
| `renderIcon` | `React.ElementType` | — |
| `target` | `string` | — |
| `as` | `React.ElementType` | `'a'` |

## Examples
```tsx
import { Link } from '@stoovles/carbon-makekit'

<Link href="/docs">Documentation</Link>

<Link href="https://example.com" target="_blank" renderIcon={LaunchIcon}>
  External link
</Link>

{/* Inline within text */}
<p>Read our <Link href="/terms" inline>terms of service</Link> for details.</p>
```

## Rules
- Use `inline` when the link appears within a sentence
- Use `renderIcon` with a launch icon for external links
- Disabled links render as `<p>` elements (not clickable)
