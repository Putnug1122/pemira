import { SegmentedControl, Title } from '@mantine/core';
import { useState } from 'react';

export default function NoUrutControl({ size }: { size: 'sm' | 'md' | 'lg' }) {
  const [section, setSection] = useState<'1' | '2' | '3'>('1');
  return (
    <>
      <SegmentedControl
        value={section}
        onChange={(value) => setSection(value as '1' | '2' | '3')}
        size={size}
        color="yellow"
        data={[
          { label: 'No. Urut', value: 'no_urut', disabled: true },
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
        ]}
      />
      <Title align="center" mt={10} order={2}>
        Pasangan Calon Ketua-Wakil dan Wakil Ketua Senat Mahasiswa 2022-2023 <br /> Putaran ke-1
        Nomor Urut {section}
      </Title>
    </>
  );
}
