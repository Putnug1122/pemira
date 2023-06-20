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
import imageSVG from './image.svg';

export function Sambutan() {
  const imageUrl: string = image.src;
  const imageSVGUrl: string = imageSVG.src;
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
          cols={2}
          mt={30}
          spacing={60}
          breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 30 }]}
          pb={60}
        >
          <div>
            <Image
              src={imageSVGUrl}
              radius="md"
              className={classes.image}
              // width="469.01px"
              // height="330.5px"
              // style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <div>
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
