import { Timeline, Text } from '@mantine/core';
import { IconCalendarTime } from '@tabler/icons-react';

export function SemaTimeline() {
  return (
    <Timeline active={10} bulletSize={24} lineWidth={2} color="yellow">
      <Timeline.Item
        bullet={<IconCalendarTime size={12} />}
        title="Pendaftaran Ketua dan Wakil Ketua Sema"
      >
        <Text size="xs" mt={4}>
          22 Juli - 7 Agustus
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconCalendarTime size={12} />} title="Tes Tertulis">
        <Text size="xs" mt={4}>
          16 Agustus
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Fit and Proper Test (Wawancara)"
        bullet={<IconCalendarTime size={12} />}
      >
        <Text size="xs" mt={4}>
          18 Agustus
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pengundian Nomor Urut Cawaka SEMA"
        bullet={<IconCalendarTime size={12} />}
      >
        <Text size="xs" mt={4}>
          19 Agustus
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Masa Kampanye" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          22 - 27 Agustus
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Kampanye Akbar" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          23 - 25 Agustus
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Diskusi Panel" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          26 Agustus
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Masa Tenang" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          28 Agustus
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Pemilihan Raya Putaran 1" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          29 - 31 Agustus
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Pemilihan Raya Putaran 2" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          5 - 7 September
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Kawaka Sema dan DPM" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          19 - 23 September
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
