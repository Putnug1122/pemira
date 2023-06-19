import { Timeline, Text } from '@mantine/core';
import { IconCalendarTime } from '@tabler/icons-react';

export function KetingTimeline() {
  return (
    <Timeline active={8} bulletSize={24} lineWidth={2} color="yellow">
      <Timeline.Item
        bullet={<IconCalendarTime size={12} />}
        title="Pendaftaran Calon Ketua Tingkat"
      >
        <Text size="xs" mt={4}>
          12 - 16 September
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconCalendarTime size={12} />} title="Pengumpulan Berkas">
        <Text size="xs" mt={4}>
          12 - 16 September
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Seleksi Berkas" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          17 - 18 September
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Wawancara Calon Ketua Tingkat" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          19 September
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Pengundian Nomor Urut" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          20 September
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Masa Kampanye" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          21 - 24 September
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Masa Tenang" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          25 - 26 September
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Pemilihan Ketua Tingkat" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          27 - 28 September
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Pelantikan" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          24 - 27 Oktober
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
