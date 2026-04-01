# Navigation Patterns

## Breadcrumb navigation
Use Breadcrumb at the top of content areas to show page hierarchy:

```tsx
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/settings">Settings</BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>Profile</BreadcrumbItem>
</Breadcrumb>
```

## Tabbed navigation
Use Tabs for content switching within a section:

```tsx
<Tabs>
  <TabList aria-label="Account settings">
    <Tab>Profile</Tab>
    <Tab>Security</Tab>
    <Tab>Preferences</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>{/* Profile form */}</TabPanel>
    <TabPanel>{/* Security settings */}</TabPanel>
    <TabPanel>{/* Preferences */}</TabPanel>
  </TabPanels>
</Tabs>
```

## Page with breadcrumb + tabs
A common pattern combines both:

```tsx
<div>
  <Breadcrumb>
    <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>Settings</BreadcrumbItem>
  </Breadcrumb>
  <h1 className="cds--type-heading-05" style={{ marginTop: '1rem' }}>Settings</h1>
  <Tabs>
    <TabList aria-label="Settings sections">
      <Tab>General</Tab>
      <Tab>Security</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>{/* General settings */}</TabPanel>
      <TabPanel>{/* Security settings */}</TabPanel>
    </TabPanels>
  </Tabs>
</div>
```

## Navigation hierarchy
```
Breadcrumb → page location (always at top)
Tabs → content sections within a page
Accordion → expandable sub-sections within content
```

## Rules
- Breadcrumb is for showing WHERE you are
- Tabs are for switching WHAT you see
- Never use Tabs for navigation between unrelated pages
- Breadcrumb should appear above the page title
