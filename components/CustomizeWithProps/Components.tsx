import React from 'react';
import { IconForms, IconCalendar } from '@tabler/icons-react';
import { DemoTabs } from '../DemoTabs/DemoTabs';
import { DPMTimeline } from './demos/DPM';
import { SemaTimeline } from './demos/Sema';
import { KetingTimeline } from './demos/Keting';

const data = [
  { demo: DPMTimeline, icon: IconForms, name: 'Inputs', description: '20+ input components' },
  {
    demo: SemaTimeline,
    icon: IconCalendar,
    name: 'Date pickers',
    description: 'Calendar, date pickers, time inputs',
  },
  {
    demo: KetingTimeline,
    icon: IconCalendar,
    name: 'Date pickers',
    description: 'Calendar, date pickers, time inputs',
  },
];

export function TimelineTab() {
  return <DemoTabs data={data} title="Timeline" />;
}
