import { Center, SegmentedControl, Box, Space, Stack } from '@mantine/core';
import { Chrono } from 'react-chrono';
import { IconCode, IconExternalLink, IconEye } from '@tabler/icons-react';
import { useState } from 'react';

const items = [
  {
    title: 'January 2022',
    cardTitle: 'Event 1',
    cardSubtitle: 'Event 1 Subtitle',
    cardDetailedText: 'This is the first event on the timeline.',
  },
  {
    title: 'February 2022',
    cardTitle: 'Event 2',
    cardSubtitle: 'Event 2 Subtitle',
    cardDetailedText: 'This is the second event on the timeline.',
  },
  {
    title: 'March 2022',
    cardTitle: 'Event 3',
    cardSubtitle: 'Event 3 Subtitle',
    cardDetailedText: 'This is the third event on the timeline.',
  },
];

export function TimelineSection() {
  const [s, setS] = useState('preview');

  return (
    <Stack spacing="xl">
      <SegmentedControl
        fullWidth
        size="md"
        color="yellow"
        defaultValue="preview"
        value={s}
        onChange={(value) => setS(value)}
        transitionTimingFunction="ease"
        data={[
          {
            value: 'preview',
            label: (
              <Center>
                <IconEye size="1rem" />
                <Box ml={10}>Preview</Box>
              </Center>
            ),
          },
          {
            value: 'code',
            label: (
              <Center>
                <IconCode size="1rem" />
                <Box ml={10}>Code</Box>
              </Center>
            ),
          },
          {
            value: 'export',
            label: (
              <Center>
                <IconExternalLink size="1rem" />
                <Box ml={10}>Export</Box>
              </Center>
            ),
          },
        ]}
      />

      {s === 'preview' && <Chrono items={items} mode="VERTICAL_ALTERNATING" />}
      {s === 'code' && <Box>Code</Box>}
      {s === 'export' && <Box>Export</Box>}
    </Stack>
  );
}
