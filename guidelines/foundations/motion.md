# Motion Tokens

## Durations
| Token | Value | Usage |
|-------|-------|-------|
| `fast01` | 70ms | Micro-interactions (checkboxes, toggles) |
| `fast02` | 110ms | Small transitions (hover states) |
| `moderate01` | 150ms | Standard transitions (dropdowns, accordions) |
| `moderate02` | 240ms | Complex transitions (modals, notifications) |
| `slow01` | 400ms | Large transitions (page transitions) |
| `slow02` | 700ms | Background transitions |

## Easings
| Category | Mode | Curve | Usage |
|----------|------|-------|-------|
| Standard | Productive | `cubic-bezier(0.2, 0, 0.38, 0.9)` | Most UI transitions |
| Standard | Expressive | `cubic-bezier(0.4, 0.14, 0.3, 1)` | Dramatic transitions |
| Entrance | Productive | `cubic-bezier(0, 0, 0.38, 0.9)` | Elements entering view |
| Entrance | Expressive | `cubic-bezier(0, 0, 0.3, 1)` | Dramatic entrances |
| Exit | Productive | `cubic-bezier(0.2, 0, 1, 0.9)` | Elements leaving view |
| Exit | Expressive | `cubic-bezier(0.4, 0.14, 1, 1)` | Dramatic exits |

## Guidelines
- Use **productive** mode for standard enterprise UI (default)
- Use **expressive** mode for marketing or editorial contexts
- Combine duration + easing: e.g., `transition: all 150ms cubic-bezier(0.2, 0, 0.38, 0.9)`
- Most component transitions are handled automatically by Carbon's CSS
