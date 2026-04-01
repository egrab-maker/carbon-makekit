# Breadcrumb

## When to use
Use Breadcrumb to show the user's location within a page hierarchy.

## Props
### Breadcrumb
| Prop | Type | Default |
|------|------|---------|
| `noTrailingSlash` | `boolean` | `false` |
| `aria-label` | `string` | `'Breadcrumb'` |

### BreadcrumbItem
| Prop | Type | Default |
|------|------|---------|
| `href` | `string` | — |
| `isCurrentPage` | `boolean` | `false` |
| `children` | `ReactNode` | required |

## Examples
```tsx
import { Breadcrumb, BreadcrumbItem } from '@stoovles/carbon-makekit'

<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>Widget Pro</BreadcrumbItem>
</Breadcrumb>
```

## Rules
- The last item should use `isCurrentPage` (adds `aria-current="page"`)
- Current page item should NOT have `href`
- Keep breadcrumb trails to 4-5 levels maximum
