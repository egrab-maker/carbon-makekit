# Color Tokens

## Color philosophy
Carbon uses a **layered neutral palette** with blue as the primary interactive color. ~90% of the UI is neutral grays and whites. Color is used purposefully for interactive elements, status, and emphasis.

## Semantic token categories

### Backgrounds
| Token | White theme value | Usage |
|-------|-------------------|-------|
| `background` | `#ffffff` | Page canvas |
| `backgroundInverse` | `#393939` | Inverted surfaces (tooltips) |
| `backgroundBrand` | `#0f62fe` | Brand elements |
| `backgroundHover` | `rgba(141,141,141,0.12)` | Hover state backgrounds |
| `backgroundSelected` | `rgba(141,141,141,0.2)` | Selected state backgrounds |

### Layers
| Token | Usage |
|-------|-------|
| `layer01` | Primary content containers (cards, panels) |
| `layer02` | Secondary containers (nested within layer01) |
| `layer03` | Tertiary containers |
| `layerHover01/02/03` | Hover states for each layer |
| `layerSelected01/02/03` | Selected states for each layer |

### Text
| Token | White theme value | Usage |
|-------|-------------------|-------|
| `textPrimary` | `#161616` | Primary body text |
| `textSecondary` | `#525252` | Secondary/supporting text |
| `textHelper` | `#6f6f6f` | Helper text, descriptions |
| `textError` | `#da1e28` | Error messages |
| `textOnColor` | `#ffffff` | Text on colored backgrounds |
| `textDisabled` | `rgba(22,22,22,0.25)` | Disabled text |

### Interactive
| Token | White theme value | Usage |
|-------|-------------------|-------|
| `interactive` | `#0f62fe` | Primary interactive color |
| `linkPrimary` | `#0f62fe` | Link text |
| `focus` | `#0f62fe` | Focus ring color |
| `borderInteractive` | `#0f62fe` | Interactive borders |

### Support / Status
| Token | White theme value | Usage |
|-------|-------------------|-------|
| `supportError` | `#da1e28` | Error states |
| `supportSuccess` | `#24a148` | Success states |
| `supportWarning` | `#f1c21b` | Warning states |
| `supportInfo` | `#0043ce` | Informational states |

## Decision tree: Background color
```
Page canvas? → background (#ffffff)
Content card/panel? → layer01 (#f4f4f4)
Nested container? → layer02 (#ffffff)
Primary action button? → buttonPrimaryBackground (#0f62fe)
Error/danger? → supportError (#da1e28)
```

## Decision tree: Text color
```
Primary content? → textPrimary (#161616)
Supporting info? → textSecondary (#525252)
Helper text? → textHelper (#6f6f6f)
Error message? → textError (#da1e28)
On blue background? → textOnColor (#ffffff)
Disabled? → textDisabled
```

## Rules
- NEVER use blue/brand colors as backgrounds for large areas
- NEVER hardcode hex values — always reference semantic tokens
- Layer hierarchy: background → layer01 → layer02 → layer03
- Dark themes (g90, g100) automatically invert all tokens
