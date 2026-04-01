# Form Composition

## Form layout
Forms in Carbon follow a vertical, single-column layout with consistent spacing:

```tsx
<form>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <TextInput id="name" labelText="Full name" />
    <TextInput id="email" labelText="Email" type="email" />
    <Dropdown
      id="role"
      titleText="Role"
      label="Select a role"
      items={roles}
    />
    <CheckboxGroup legendText="Notifications">
      <Checkbox id="email-notif" labelText="Email notifications" />
      <Checkbox id="sms-notif" labelText="SMS notifications" />
    </CheckboxGroup>
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
      <Button kind="secondary">Cancel</Button>
      <Button kind="primary" type="submit">Save</Button>
    </div>
  </div>
</form>
```

## Form validation pattern
```tsx
const [errors, setErrors] = useState({})

<TextInput
  id="email"
  labelText="Email"
  invalid={!!errors.email}
  invalidText={errors.email}
/>
```

## Button placement in forms
- Action buttons go at the bottom of the form
- Primary action on the right, secondary on the left
- Use `kind="primary"` for submit, `kind="secondary"` for cancel
- Add `type="submit"` to the primary button

## Form spacing
- `spacing05` (16px / 1rem) gap between form fields
- `spacing07` (32px / 2rem) between form sections
- `spacing05` (16px) between the last field and the button row

## Rules
- Every input needs `labelText` and `id`
- Show validation errors inline with `invalidText`
- Use `helperText` for guidance, not validation
- Group related fields with CheckboxGroup or RadioButtonGroup
- Forms should be single-column for clarity; use multi-column only for related short fields (city/state/zip)
