import React from 'react';
import { IconForms, IconCalendar } from '@tabler/icons-react';
import { DemoTabs } from '../DemoTabs/DemoTabs';
import { DPMTimeline } from './demos/DPM';
import { SemaTimeline } from './demos/Sema';
import { KetingTimeline } from './demos/Keting';

const data = [
  { demo: DPMTimeline, icon: IconCalendar, name: 'DPM', description: 'Timeline DPM 2022' },
  {
    demo: SemaTimeline,
    icon: IconCalendar,
    name: 'SEMA',
    description: 'Timeline Sema 2022',
  },
  {
    demo: KetingTimeline,
    icon: IconCalendar,
    name: 'Ketua Tingkat',
    description: 'Timeline Ketua Tingkat 2022',
  },
];

export function TimelineTab() {
  return (
    <section id="timeline">
      <DemoTabs data={data} title="Timeline" />
    </section>
  );
}
