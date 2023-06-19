import React from 'react';
import {
  Button,
  Image,
  SimpleGrid,
  Text,
  useMantineColorScheme,
  Group,
  rem,
  Blockquote,
} from '@mantine/core';
import { Prism } from '@mantine/prism';
import { IconFlame, IconMoonStars, IconSun } from '@tabler/icons-react';
import { PageSection } from '../PageSection/PageSection';
import image from './dark-theme-image.png';
import useStyles from './Sambutan.styles';

export function Sambutan() {
  const imageUrl: string = image.src;
  const { classes, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const code = `
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ colorScheme: '${colorScheme}' }}>
      <App />
    </MantineProvider>
  );
}
`;

  return (
    <section id="sambutan">
      <PageSection
        title="Sambutan Ketua PAPERA 2022"
        sx={{ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white }}
      >
        <SimpleGrid
          cols={1}
          mt={30}
        >
          <div style={{ display:'flex', alignItems:'center' }}>
            <Image src='https://pemira.stis.ac.id/assets/img/home/Logo_Papera.png' radius="md" className={classes.image} style={{ width:'auto', height:'auto' }}/>
            <Blockquote cite="– Wildan Miftah Alfarid" color="blue">
              Pemira adalah pesta demokrasi yang memfasilitasi regenerasi lembaga kampus. Dalam
              waktu dekat, pengurus DPM, Sema, dan Ketua Tingkat akan digantikan untuk tahun
              akademik 2022/2023. Regenerasi kepemimpinan diperlukan untuk melanjutkan program dan
              memberikan inovasi ke depan. Panitia Pemilihan Raya (Papera) dibentuk berdasarkan
              AD/ART Imapolstat sebagai badan independen yang bertanggung jawab atas pelaksanaan
              Pemira.
            </Blockquote>
          </div>
        </SimpleGrid>
      </PageSection>
    </section>
  );
}
