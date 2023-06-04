import { Center, SegmentedControl, Box, Space, Stack } from '@mantine/core';
import { Chrono } from 'react-chrono';
import { IconCode, IconExternalLink, IconEye } from '@tabler/icons-react';
import { useState } from 'react';
import { DPMTimeline } from './DPM';
import { KetingTimeline } from './Keting';
import { SemaTimeline } from './Sema';

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
  const [s, setS] = useState('DPM');

  return (
    <Stack spacing="xl">
      <SegmentedControl
        fullWidth
        size="md"
        color="yellow"
        defaultValue="DPM"
        value={s}
        onChange={(value) => setS(value)}
        transitionTimingFunction="ease"
        data={[
          {
            value: 'DPM',
            label: (
              <Center>
                <IconEye size="1rem" />
                <Box ml={10}>DPM</Box>
              </Center>
            ),
          },
          {
            value: 'SEMA',
            label: (
              <Center>
                <IconCode size="1rem" />
                <Box ml={10}>SEMA</Box>
              </Center>
            ),
          },
          {
            value: 'Keting',
            label: (
              <Center>
                <IconExternalLink size="1rem" />
                <Box ml={10}>Keting</Box>
              </Center>
            ),
          },
        ]}
      />

      {s === 'DPM' && <DPMTimeline />}
      {s === 'SEMA' && <SemaTimeline />}
      {s === 'Keting' && <KetingTimeline />}
    </Stack>
  );
}
