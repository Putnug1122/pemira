import { Group, Avatar, Text, Accordion, createStyles, rem } from '@mantine/core';
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
    border: `${rem(1)} solid transparent`,
    position: 'relative',
    zIndex: 0,
    transition: 'transform 150ms ease',

    '&[data-active]': {
      transform: 'scale(1.03)',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(-90deg)',
    },
  },
}));

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Dewan Perwakilan Mahasiswa',
    description: 'DPM',
    content:
      'Dewan Perwakilan Mahasiswa (DPM) merupakan perubahan bentuk dari Badan Perwakilan Mahasiswa (BPM) dan Majelis Permusyawaratan Mahasiswa (MPM) yang menjalankan fungsi legislatif Imapolstat dan salah satu pemegang kekuasaan tertinggi dalam Imapolstat melalui Sidang Umum DPM. DPM menyalurkan aspirasi dari seluruh anggota Imapolstat yang dalam hal ini adalah mahasiswa/i Politeknik Statistika STIS secara keseluruhan, baik yang berkaitan dengan kinerja Sema maupun kepada Pimpinan Politeknik Statistika STIS. Anggota DPM terdiri dari ketua kelas terpilih dari masing-masing kelas atas persetujuan Direktur Politeknik Statistika STIS serta staf administrasi dan staf ahli yang dipilih oleh Ketua DPM.',
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Senat mahasiswa',
    description: 'Sema',
    content:
      'Senat mahasiswa (Sema) merupakan perubahan bentuk dari Badan Eksekutif Mahasiswa (BEM) yang menjalankan fungsi eksekutif Imapolstat. Dalam hal ini, Sema bertugas untuk mengelola keuangan dan inventaris Imapolstat yang akan dipertanggungjawabkan kepada DPM dan/atau Pimpinan Politeknik Statistika STIS. Selain itu, Sema juga berperan sebagai pionir seluruh kegiatan mahasiswa dalam unit kegiatan mahasiswa (UKM) untuk menjalankan program kerjanya. Anggota Sema dipilih melalui open recruitment yang diadakan secara mandiri oleh Ketua Sema.',
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Ketua Tingkat',
    description: 'Ketua Tingkat I-IV',
    content:
      'Ketua Tingkat merupakan seseorang yang bertanggung jawab atas seluruh kegiatan yang dilaksanakan oleh Pengurus Tingkat. Pengurus Tingkat merupakan badan otonom di bawah naungan Senat Mahasiswa (Sema) yang berfungsi sebagai wadah untuk mengakomodir kegiatan dan aspirasi dari setiap tingkat. Pengurus Tingkat berkordinasi dengan Sema terhadap seluruh kegiatannya. Pengurus Tingkat dipilih melalui open recruitment yang diadakan secara mandiri oleh Ketua Tingkat. Setiap tingkat memiliki Ketua dan Pengurus Tingkat masing-masing.',
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export function AccordionPilih() {
  const { classes } = useStyles();
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      // maw={420}
      mx="auto"
      variant="filled"
      defaultValue="customization"
      classNames={classes}
      className={classes.root}
    >
      {items}
    </Accordion>
  );
}
