import { Group, MediaQuery, SegmentedControl, Tabs, Title } from '@mantine/core';
import { IconInfoCircle, IconSelect } from '@tabler/icons-react';

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
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <SegmentedControl
            size="md"
            color="yellow"
            data={[
              { label: 'No. Urut', value: 'no_urut', disabled: true },
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
            ]}
          />
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <SegmentedControl
            size="sm"
            color="yellow"
            data={[
              { label: 'No. Urut', value: 'no_urut', disabled: true },
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
            ]}
          />
        </MediaQuery>
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
