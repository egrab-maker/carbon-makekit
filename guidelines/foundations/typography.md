# Typography Tokens

## Font family
Carbon uses **IBM Plex Sans** for all UI text. The font is loaded via `@carbon/styles`.

| Family | Value | Usage |
|--------|-------|-------|
| Sans | `'IBM Plex Sans', system-ui, sans-serif` | All UI text |
| Mono | `'IBM Plex Mono', monospace` | Code, technical content |
| Serif | `'IBM Plex Serif', Georgia, serif` | Quotations, editorial |

## Font weights
| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Large headings (heading06, heading07) |
| Regular | 400 | Body text, labels, inputs |
| Semibold | 600 | Headings, emphasis, buttons |

## Type scale
Carbon uses a modular type scale starting at 12px:
12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48, 54, 60...

## Type styles (commonly used)
| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `label01` | 0.75rem (12px) | 400 | 1.33 | Small labels |
| `label02` | 0.875rem (14px) | 400 | 1.29 | Standard labels |
| `bodyCompact01` | 0.875rem (14px) | 400 | 1.29 | Compact body text |
| `bodyCompact02` | 1rem (16px) | 400 | 1.375 | Standard body text |
| `body01` | 0.875rem (14px) | 400 | 1.43 | Long-form body text |
| `body02` | 1rem (16px) | 400 | 1.5 | Long-form reading |
| `headingCompact01` | 0.875rem (14px) | 600 | 1.29 | Small headings |
| `headingCompact02` | 1rem (16px) | 600 | 1.375 | Section headings |
| `heading03` | 1.25rem (20px) | 400 | 1.4 | Page section headings |
| `heading04` | 1.75rem (28px) | 400 | 1.29 | Major headings |
| `heading05` | 2rem (32px) | 400 | 1.25 | Page titles |

## Decision tree
```
Small label/caption? → label01 (12px) or label02 (14px)
Body text (compact)? → bodyCompact01 (14px) or bodyCompact02 (16px)
Body text (reading)? → body01 (14px) or body02 (16px)
Section heading? → headingCompact01/02 (14-16px, semibold)
Page subsection? → heading03 (20px)
Major heading? → heading04 (28px) or heading05 (32px)
Page title? → heading05 (32px) or heading06 (42px)
```

## Rules
- The dominant body text size is 14px (`bodyCompact01`) for data-dense UIs
- Use 16px (`bodyCompact02`, `body02`) for reading-heavy content
- Do NOT use arbitrary font sizes — every text element maps to a type style
- Button text uses 14px semibold (built into the Button component)
