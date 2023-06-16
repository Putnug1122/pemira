import {
  Center,
  Container,
  SegmentedControl,
  SimpleGrid,
  Title,
  Text,
  List,
  ThemeIcon,
  MediaQuery,
} from '@mantine/core';
import { useState } from 'react';
import localFonts from 'next/font/local';
import { Calon } from './Calon';
import { IconCircleCheck } from '@tabler/icons-react';

const myFont = localFonts({ src: '../fonts/Fontspring-DEMO-greycliffcf-heavy.otf' });

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
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Title
          align="center"
          my={15}
          className={[myFont.className].join(' ')}
          gradient={{ from: 'yellow', to: 'blue', deg: 45 }}
          variant="gradient"
        >
          Pasangan Calon Ketua – Wakil dan Wakil Ketua Senat Mahasiswa 2022 – 2023 <br /> Putaran ke
          – 1 Nomor Urut {section}
        </Title>
      </MediaQuery>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Title
          align="center"
          my={15}
          className={[myFont.className].join(' ')}
          gradient={{ from: 'yellow', to: 'blue', deg: 45 }}
          variant="gradient"
          order={3}
        >
          Pasangan Calon Ketua – Wakil dan Wakil Ketua Senat Mahasiswa 2022 – 2023 Putaran ke – 1
          Nomor Urut {section}
        </Title>
      </MediaQuery>
      <Text align="center" fs="italic">
        Klik foto calon untuk melihat pengalaman organisasi dan prestasi
      </Text>
      <Container py="xl">
        <Center>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            <Calon />
            <Calon />
          </SimpleGrid>
        </Center>
      </Container>
      <Container py="xl">
        <Title order={3} className={[myFont.className].join(' ')} align="left" mb={20}>
          Visi
        </Title>
        <Text mb={30} size="lg">
          Reformasi SEMA yang bersahabat terhadap potensi diri mahasiswa dan kepentingan bersama
          pada era transisi
        </Text>{' '}
        <Title order={3} className={[myFont.className].join(' ')} align="left" mb={20}>
          Misi
        </Title>
        <List
          spacing="md"
          size="md"
          type="ordered"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            Menfasilitasi dan memfokuskan mahasiswa tingkat 1 untuk mencapai terget "Angkatan 64
            TANPA Drop Out" dan mahasiswa tingkat 2 untuk mencapai target "Angkatan 63 STOP tahan
            tingkat"
          </List.Item>
          <List.Item>
            Memberi pelayanan dan dukungan demi tercapainya kesuksesan PKL Angkatan 62 dan
            pelaksanaan ujian komprehensif serta kelancaran penyusunan skripsi Angkatan 61 pada
            berbagai aspekInstall dependencies with yarn
          </List.Item>

          <List.Item>
            Mengadakan kegiatan dan program kerja sebagai sarana untuk mengeratkan tali silaturahmi
            seluruh mahasiswa dalam menghadapi transisi perkuliahan daring-luring pada bidang
            SAHABAT (Sport, Academic Habit, Art)
          </List.Item>
          <List.Item>
            Menjadikan SEMA sebagai organisasi yang ramah dan bersahabat dan dalam bersinergi dengan
            komponen integral dan eksternal Politeknik Statistika STIS
          </List.Item>
        </List>
      </Container>
    </>
  );
}
