import React from 'react';
import { IconForms, IconCalendar } from '@tabler/icons-react';
import { Inputs } from './demos/Inputs';
import { Dates } from './demos/Dates';
import { DemoTabs } from '../DemoTabs/DemoTabs';
import { PageSection } from '../PageSection/PageSection';
import { AccordionPilih } from './AccordionPilih';

const data = [
  { demo: Inputs, icon: IconForms, name: 'Inputs', description: '20+ input components' },
  {
    demo: Dates,
    icon: IconCalendar,
    name: 'Date pickers',
    description: 'Calendar, date pickers, time inputs',
  },
  {
    demo: Dates,
    icon: IconCalendar,
    name: 'Date pickers',
    description: 'Calendar, date pickers, time inputs',
  },
];

export function Components() {
  return (
    <PageSection
      title="Bisa Pilih Siapa Aja?"
      // description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements."
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      })}
      centerTitle
    >
      <AccordionPilih />
    </PageSection>
  );
}
