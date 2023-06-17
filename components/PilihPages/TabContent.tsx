import { MediaQuery, SegmentedControl, Tabs } from '@mantine/core';
import { IconInfoCircle, IconSelect } from '@tabler/icons-react';
import { useState } from 'react';
import Info from './Info';
import ImageCheckboxes from './Vote';

export default function TabContent() {
  return (
    <Tabs color="red" variant="outline" defaultValue="gallery">
      <Tabs.List grow>
        <Tabs.Tab value="gallery" icon={<IconInfoCircle size="1rem" />}>
          Info
        </Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSelect size="1rem" />}>
          Vote
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        <Info />
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        <ImageCheckboxes />
      </Tabs.Panel>
    </Tabs>
  );
}
