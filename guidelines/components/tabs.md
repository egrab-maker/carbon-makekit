# Tabs

## When to use
Use Tabs for content switching within a section. Tabs organize related content into separate panels.

## Component structure
```tsx
<Tabs>
  <TabList aria-label="Tab navigation">
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Content for Tab 1</TabPanel>
    <TabPanel>Content for Tab 2</TabPanel>
    <TabPanel>Content for Tab 3</TabPanel>
  </TabPanels>
</Tabs>
```

## Tabs Props
| Prop | Type | Default |
|------|------|---------|
| `selectedIndex` | `number` | — (controlled) |
| `defaultSelectedIndex` | `number` | `0` |
| `onChange` | `({ selectedIndex }) => void` | — |

## TabList Props
| Prop | Type | Default |
|------|------|---------|
| `aria-label` | `string` | required |
| `contained` | `boolean` | `false` |
| `activation` | `'automatic' \| 'manual'` | `'automatic'` |

## Tab Props
| Prop | Type | Default |
|------|------|---------|
| `disabled` | `boolean` | `false` |
| `children` | `ReactNode` | required (tab label) |

## Examples
```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@stoovles/carbon-makekit'

{/* Default tabs */}
<Tabs>
  <TabList aria-label="Settings">
    <Tab>General</Tab>
    <Tab>Security</Tab>
    <Tab disabled>Advanced</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>General settings content</TabPanel>
    <TabPanel>Security settings content</TabPanel>
    <TabPanel>Advanced settings content</TabPanel>
  </TabPanels>
</Tabs>

{/* Contained tabs */}
<Tabs>
  <TabList aria-label="Data views" contained>
    <Tab>Table</Tab>
    <Tab>Chart</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Table view</TabPanel>
    <TabPanel>Chart view</TabPanel>
  </TabPanels>
</Tabs>
```

## Keyboard
- **ArrowLeft / ArrowRight**: Navigate between tabs
- **Home / End**: Jump to first/last tab
- In automatic mode, navigation selects the tab immediately

## Rules
- Always provide `aria-label` on TabList
- Tab count must match TabPanel count
- Use `contained` for tabs with background fill
