import { Timeline, Text } from '@mantine/core';
import { IconCalendarTime } from '@tabler/icons-react';

export function DPMTimeline() {
  return (
    <Timeline active={6} bulletSize={24} lineWidth={2} color="yellow">
      <Timeline.Item bullet={<IconCalendarTime size={12} />} title="Pendaftaran Calon Ketua Kelas">
        <Text size="xs" mt={4}>
          20 - 22 Agustus
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<IconCalendarTime size={12} />}
        title="Pemilihan Ketua Kelas Tingkat I-IV"
      >
        <Text size="xs" mt={4}>
          22 - 26 Agustus
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pengumpulan Berkas Calon Ketua DPM"
        bullet={<IconCalendarTime size={12} />}
      >
        <Text size="xs" mt={4}>
          29 Agustus
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Penyampaian Visi dan Misi Ketua DPM"
        bullet={<IconCalendarTime size={12} />}
      >
        <Text size="xs" mt={4}>
          31 Agustus
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Musyawarah DPM Awal" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          1 September
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Musyawarah DPM Final" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          5 September
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Pelantikan Kawaka Sema dan DPM" bullet={<IconCalendarTime size={12} />}>
        <Text size="xs" mt={4}>
          19 - 23 September
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
