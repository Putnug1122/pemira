import { Tabs } from '@mantine/core';
import { IconInfoCircle, IconSelect } from '@tabler/icons-react';
import NoUrutControl from './NoUrutControl';
import VotePaslon from './Vote';

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
        <NoUrutControl />
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        <VotePaslon />
      </Tabs.Panel>
    </Tabs>
  );
}
