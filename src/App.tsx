import React, { useState } from 'react';
import './styles/global.scss';

import {
  ThemeProvider,
  useTheme,
  Button,
  Link,
  Tag,
  Loading,
  Breadcrumb,
  BreadcrumbItem,
  TextInput,
  Checkbox,
  CheckboxGroup,
  RadioButton,
  RadioButtonGroup,
  Toggle,
  Dropdown,
  Modal,
  InlineNotification,
  ToastNotification,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  Tooltip,
} from './index';

import type {
  ButtonKind,
  TagType,
  NotificationKind,
  DropdownItem,
} from './index';

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid var(--cds-border-subtle)',
        }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Row({
  children,
  gap = '1rem',
  wrap = true,
  align = 'center',
}: {
  children: React.ReactNode;
  gap?: string;
  wrap?: boolean;
  align?: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        alignItems: align,
        marginBottom: '1rem',
      }}>
      {children}
    </div>
  );
}

function SubSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3
        style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--cds-text-secondary)',
          marginBottom: '0.75rem',
        }}>
        {label}
      </h3>
      {children}
    </div>
  );
}

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const themes = ['white', 'g10', 'g90', 'g100'] as const;

  return (
    <div
      style={{
        display: 'flex',
        gap: '0.5rem',
        padding: '1rem 0',
        alignItems: 'center',
      }}>
      <span
        style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--cds-text-secondary)',
          marginRight: '0.5rem',
        }}>
        Theme:
      </span>
      {themes.map((t) => (
        <Button
          key={t}
          kind={t === theme ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setTheme(t)}>
          {t}
        </Button>
      ))}
    </div>
  );
}

const BUTTON_KINDS: ButtonKind[] = [
  'primary',
  'secondary',
  'tertiary',
  'ghost',
  'danger',
  'danger-tertiary',
  'danger-ghost',
];

const TAG_TYPES: TagType[] = [
  'red',
  'magenta',
  'purple',
  'blue',
  'cyan',
  'teal',
  'green',
  'gray',
  'cool-gray',
  'warm-gray',
  'high-contrast',
  'outline',
];

const NOTIFICATION_KINDS: NotificationKind[] = [
  'success',
  'info',
  'info-square',
  'warning',
  'warning-alt',
  'error',
];

const DROPDOWN_ITEMS: DropdownItem[] = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
];

function Showcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dangerModalOpen, setDangerModalOpen] = useState(false);
  const [passiveModalOpen, setPassiveModalOpen] = useState(false);

  return (
    <div
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '2rem',
        color: 'var(--cds-text-primary)',
        backgroundColor: 'var(--cds-background)',
        minHeight: '100vh',
      }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '0.5rem' }}>
          Carbon MakeKit
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--cds-text-secondary)' }}>
          AI-generated React component showcase — visual validation
        </p>
        <ThemeSwitcher />
      </header>

      {/* Button */}
      <Section title="Button">
        <SubSection label="Kinds">
          <Row>
            {BUTTON_KINDS.map((kind) => (
              <Button key={kind} kind={kind}>
                {kind}
              </Button>
            ))}
          </Row>
        </SubSection>

        <SubSection label="Sizes">
          <Row align="flex-end">
            {(['sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
              <Button key={size} size={size}>
                {size}
              </Button>
            ))}
          </Row>
        </SubSection>

        <SubSection label="States">
          <Row>
            <Button disabled>Disabled</Button>
            <Button isExpressive>Expressive</Button>
            <Button kind="ghost" hasIconOnly tooltipText="Settings" aria-label="Settings">
              ⚙
            </Button>
          </Row>
        </SubSection>
      </Section>

      {/* Link */}
      <Section title="Link">
        <Row>
          <Link href="#">Default link</Link>
          <Link href="#" size="sm">Small link</Link>
          <Link href="#" size="lg">Large link</Link>
          <Link href="#" inline>Inline link</Link>
          <Link href="#" visited>Visited link</Link>
          <Link disabled>Disabled link</Link>
        </Row>
      </Section>

      {/* Tag */}
      <Section title="Tag">
        <SubSection label="Types">
          <Row>
            {TAG_TYPES.map((type) => (
              <Tag key={type} type={type}>
                {type}
              </Tag>
            ))}
          </Row>
        </SubSection>

        <SubSection label="Sizes">
          <Row>
            <Tag size="sm">Small</Tag>
            <Tag size="md">Medium</Tag>
            <Tag size="lg">Large</Tag>
          </Row>
        </SubSection>

        <SubSection label="Filter tags">
          <Row>
            <Tag type="blue" filter onClose={() => {}}>
              Filterable
            </Tag>
            <Tag type="purple" filter disabled>
              Disabled filter
            </Tag>
          </Row>
        </SubSection>
      </Section>

      {/* Loading */}
      <Section title="Loading">
        <Row>
          <div style={{ width: 64, height: 64 }}>
            <Loading description="Active spinner" />
          </div>
          <div style={{ width: 32, height: 32 }}>
            <Loading small description="Small spinner" />
          </div>
          <div style={{ width: 64, height: 64 }}>
            <Loading active={false} description="Stopped spinner" />
          </div>
        </Row>
      </Section>

      {/* Breadcrumb */}
      <Section title="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Category</BreadcrumbItem>
          <BreadcrumbItem href="#" isCurrentPage>
            Current page
          </BreadcrumbItem>
        </Breadcrumb>
        <div style={{ marginTop: '1rem' }}>
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem href="#">No trailing slash</BreadcrumbItem>
            <BreadcrumbItem href="#" isCurrentPage>
              Current
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </Section>

      {/* TextInput */}
      <Section title="TextInput">
        <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
          <TextInput labelText="Default" placeholder="Enter text..." />
          <TextInput labelText="Small" size="sm" placeholder="Small input" />
          <TextInput labelText="Large" size="lg" placeholder="Large input" />
          <TextInput
            labelText="With helper"
            helperText="This is helper text"
            placeholder="With helper"
          />
          <TextInput
            labelText="Invalid"
            invalid
            invalidText="This field is required"
            placeholder="Invalid input"
          />
          <TextInput
            labelText="Warning"
            warn
            warnText="Check this value"
            placeholder="Warning input"
          />
          <TextInput labelText="Disabled" disabled placeholder="Disabled" />
          <TextInput labelText="Read only" readOnly defaultValue="Read-only value" />
          <TextInput labelText="Hidden label" hideLabel placeholder="Hidden label" />
          <TextInput labelText="Password" type="password" placeholder="Enter password" />
        </div>
      </Section>

      {/* Checkbox */}
      <Section title="Checkbox">
        <SubSection label="Standalone">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Checkbox id="cb-1" labelText="Default checkbox" />
            <Checkbox id="cb-2" labelText="Checked" defaultChecked />
            <Checkbox id="cb-3" labelText="Indeterminate" indeterminate />
            <Checkbox id="cb-4" labelText="Disabled" disabled />
            <Checkbox id="cb-5" labelText="Hidden label" hideLabel />
          </div>
        </SubSection>

        <SubSection label="Group">
          <CheckboxGroup legendText="Checkbox group" orientation="vertical">
            <Checkbox id="cbg-1" labelText="Option A" />
            <Checkbox id="cbg-2" labelText="Option B" defaultChecked />
            <Checkbox id="cbg-3" labelText="Option C" />
          </CheckboxGroup>
        </SubSection>

        <SubSection label="Horizontal group">
          <CheckboxGroup legendText="Horizontal group" orientation="horizontal">
            <Checkbox id="cbh-1" labelText="Alpha" />
            <Checkbox id="cbh-2" labelText="Beta" />
            <Checkbox id="cbh-3" labelText="Gamma" />
          </CheckboxGroup>
        </SubSection>
      </Section>

      {/* RadioButton */}
      <Section title="RadioButton">
        <SubSection label="Vertical group">
          <RadioButtonGroup name="radio-v" legendText="Select one" defaultSelected="b">
            <RadioButton id="rb-a" labelText="Option A" value="a" />
            <RadioButton id="rb-b" labelText="Option B" value="b" />
            <RadioButton id="rb-c" labelText="Option C" value="c" />
          </RadioButtonGroup>
        </SubSection>

        <SubSection label="Horizontal group">
          <RadioButtonGroup
            name="radio-h"
            legendText="Horizontal"
            orientation="horizontal"
            defaultSelected="x">
            <RadioButton id="rb-x" labelText="X" value="x" />
            <RadioButton id="rb-y" labelText="Y" value="y" />
            <RadioButton id="rb-z" labelText="Z" value="z" />
          </RadioButtonGroup>
        </SubSection>

        <SubSection label="Disabled">
          <RadioButtonGroup name="radio-d" legendText="Disabled group" disabled>
            <RadioButton id="rb-d1" labelText="Disabled A" value="d1" />
            <RadioButton id="rb-d2" labelText="Disabled B" value="d2" />
          </RadioButtonGroup>
        </SubSection>
      </Section>

      {/* Toggle */}
      <Section title="Toggle">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Toggle id="toggle-1" labelText="Default toggle" />
          <Toggle id="toggle-2" labelText="Small toggle" size="sm" />
          <Toggle id="toggle-3" labelText="Toggled on" defaultToggled />
          <Toggle id="toggle-4" labelText="Disabled" disabled />
          <Toggle id="toggle-5" labelText="Read-only" readOnly defaultToggled />
          <Toggle id="toggle-6" labelText="Custom labels" labelA="No" labelB="Yes" />
        </div>
      </Section>

      {/* Dropdown */}
      <Section title="Dropdown">
        <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
          <Dropdown
            id="dd-1"
            titleText="Default dropdown"
            label="Choose an option"
            items={DROPDOWN_ITEMS}
          />
          <Dropdown
            id="dd-2"
            titleText="Small"
            label="Pick one"
            items={DROPDOWN_ITEMS}
            size="sm"
          />
          <Dropdown
            id="dd-3"
            titleText="Large"
            label="Pick one"
            items={DROPDOWN_ITEMS}
            size="lg"
          />
          <Dropdown
            id="dd-4"
            titleText="Invalid"
            label="Pick one"
            items={DROPDOWN_ITEMS}
            invalid
            invalidText="Selection required"
          />
          <Dropdown
            id="dd-5"
            titleText="Warning"
            label="Pick one"
            items={DROPDOWN_ITEMS}
            warn
            warnText="Check selection"
          />
          <Dropdown
            id="dd-6"
            titleText="Disabled"
            label="Pick one"
            items={DROPDOWN_ITEMS}
            disabled
          />
        </div>
      </Section>

      {/* Modal */}
      <Section title="Modal">
        <Row>
          <Button onClick={() => setModalOpen(true)}>Open modal</Button>
          <Button kind="danger" onClick={() => setDangerModalOpen(true)}>
            Danger modal
          </Button>
          <Button kind="tertiary" onClick={() => setPassiveModalOpen(true)}>
            Passive modal
          </Button>
        </Row>

        <Modal
          open={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          onRequestSubmit={() => setModalOpen(false)}
          modalLabel="Account resources"
          modalHeading="Add a custom domain"
          primaryButtonText="Add"
          secondaryButtonText="Cancel">
          <p style={{ marginBottom: '1rem' }}>
            Custom domains direct requests for your apps in this Cloud Foundry
            organization to a URL that you own.
          </p>
          <TextInput
            labelText="Domain name"
            placeholder="e.g. example.com"
          />
        </Modal>

        <Modal
          open={dangerModalOpen}
          onRequestClose={() => setDangerModalOpen(false)}
          onRequestSubmit={() => setDangerModalOpen(false)}
          modalHeading="Are you sure?"
          primaryButtonText="Delete"
          secondaryButtonText="Cancel"
          danger
          size="sm">
          <p>
            This action is irreversible. All data associated with this resource
            will be permanently deleted.
          </p>
        </Modal>

        <Modal
          open={passiveModalOpen}
          onRequestClose={() => setPassiveModalOpen(false)}
          modalHeading="Passive modal"
          passiveModal>
          <p>
            This modal has no action buttons. Click the close button or press
            Escape to dismiss.
          </p>
        </Modal>
      </Section>

      {/* Notification */}
      <Section title="Notification">
        <SubSection label="Inline notifications">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {NOTIFICATION_KINDS.map((kind) => (
              <InlineNotification
                key={kind}
                kind={kind}
                title={`${kind} notification`}
                subtitle="Additional information about the notification."
              />
            ))}
            <InlineNotification
              kind="info"
              title="Low contrast"
              subtitle="With lowContrast prop enabled."
              lowContrast
            />
          </div>
        </SubSection>

        <SubSection label="Toast notifications">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '400px' }}>
            <ToastNotification
              kind="success"
              title="Success"
              subtitle="Your request was completed."
              caption={new Date().toLocaleString()}
            />
            <ToastNotification
              kind="error"
              title="Error"
              subtitle="Something went wrong."
              caption="Just now"
            />
          </div>
        </SubSection>
      </Section>

      {/* Tabs */}
      <Section title="Tabs">
        <SubSection label="Default">
          <Tabs>
            <TabList aria-label="Tabs example">
              <Tab>Dashboard</Tab>
              <Tab>Monitoring</Tab>
              <Tab>Activity</Tab>
              <Tab disabled>Disabled</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p style={{ padding: '1rem 0' }}>Dashboard panel content.</p>
              </TabPanel>
              <TabPanel>
                <p style={{ padding: '1rem 0' }}>Monitoring panel content.</p>
              </TabPanel>
              <TabPanel>
                <p style={{ padding: '1rem 0' }}>Activity panel content.</p>
              </TabPanel>
              <TabPanel>
                <p style={{ padding: '1rem 0' }}>Disabled panel content.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </SubSection>

        <SubSection label="Contained">
          <Tabs>
            <TabList aria-label="Contained tabs" contained>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p style={{ padding: '1rem 0' }}>Contained tab 1 content.</p>
              </TabPanel>
              <TabPanel>
                <p style={{ padding: '1rem 0' }}>Contained tab 2 content.</p>
              </TabPanel>
              <TabPanel>
                <p style={{ padding: '1rem 0' }}>Contained tab 3 content.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </SubSection>
      </Section>

      {/* Accordion */}
      <Section title="Accordion">
        <SubSection label="Default">
          <Accordion>
            <AccordionItem title="Section 1" defaultOpen>
              <p>Content for section 1. This item starts open.</p>
            </AccordionItem>
            <AccordionItem title="Section 2">
              <p>Content for section 2.</p>
            </AccordionItem>
            <AccordionItem title="Section 3">
              <p>Content for section 3.</p>
            </AccordionItem>
            <AccordionItem title="Disabled" disabled>
              <p>This item is disabled.</p>
            </AccordionItem>
          </Accordion>
        </SubSection>

        <SubSection label="Small, end-aligned">
          <Accordion size="sm" align="end">
            <AccordionItem title="Small A">
              <p>Small accordion content A.</p>
            </AccordionItem>
            <AccordionItem title="Small B">
              <p>Small accordion content B.</p>
            </AccordionItem>
          </Accordion>
        </SubSection>
      </Section>

      {/* Tooltip */}
      <Section title="Tooltip">
        <Row gap="2rem">
          <Tooltip label="Top tooltip (default)">
            <Button kind="ghost" size="sm">Hover me (top)</Button>
          </Tooltip>
          <Tooltip label="Bottom tooltip" align="bottom">
            <Button kind="ghost" size="sm">Hover me (bottom)</Button>
          </Tooltip>
          <Tooltip label="Left tooltip" align="left">
            <Button kind="ghost" size="sm">Hover me (left)</Button>
          </Tooltip>
          <Tooltip label="Right tooltip" align="right">
            <Button kind="ghost" size="sm">Hover me (right)</Button>
          </Tooltip>
        </Row>
      </Section>

      {/* Composition: Form */}
      <Section title="Composition — Form">
        <div
          style={{
            maxWidth: '480px',
            padding: '2rem',
            border: '1px solid var(--cds-border-subtle)',
            borderRadius: '4px',
          }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Create account
          </h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <TextInput labelText="Full name" placeholder="Jane Doe" />
            <TextInput labelText="Email" type="email" placeholder="jane@example.com" />
            <TextInput labelText="Password" type="password" placeholder="Create password" />
            <Dropdown
              id="form-role"
              titleText="Role"
              label="Select a role"
              items={[
                { id: 'dev', label: 'Developer' },
                { id: 'des', label: 'Designer' },
                { id: 'pm', label: 'Product Manager' },
              ]}
            />
            <CheckboxGroup legendText="Notifications">
              <Checkbox id="form-cb1" labelText="Email notifications" defaultChecked />
              <Checkbox id="form-cb2" labelText="SMS notifications" />
            </CheckboxGroup>
            <Toggle id="form-toggle" labelText="Enable two-factor auth" />
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
              <Button kind="secondary">Cancel</Button>
              <Button kind="primary">Create account</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider theme="white">
      <Showcase />
    </ThemeProvider>
  );
}
