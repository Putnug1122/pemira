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
          <Image src={imageUrl} radius="md" className={classes.image} />
        </div>
        <div>
          <Blockquote cite="– Wildan Miftah Alfarid" icon={<IconFlame size="1.5rem" />}>
            Pemira adalah pesta demokrasi yang memfasilitasi regenerasi lembaga kampus. Dalam waktu
            dekat, pengurus DPM, Sema, dan Ketua Tingkat akan digantikan untuk tahun akademik
            2022/2023. Regenerasi kepemimpinan diperlukan untuk melanjutkan program dan memberikan
            inovasi ke depan. Panitia Pemilihan Raya (Papera) dibentuk berdasarkan AD/ART Imapolstat
            sebagai badan independen yang bertanggung jawab atas pelaksanaan Pemira.
          </Blockquote>
          {/* <Text size="lg">
            Pemira adalah pesta demokrasi yang memfasilitasi regenerasi lembaga kampus. Dalam waktu
            dekat, pengurus DPM, Sema, dan Ketua Tingkat akan digantikan untuk tahun akademik
            2022/2023. Regenerasi kepemimpinan diperlukan untuk melanjutkan program dan memberikan
            inovasi ke depan. Panitia Pemilihan Raya (Papera) dibentuk berdasarkan AD/ART Imapolstat
            sebagai badan independen yang bertanggung jawab atas pelaksanaan Pemira.
          </Text> */}

          {/* <Prism
            language="tsx"
            noCopy
            mt="xl"
            radius="md"
            styles={{
              code: {
                backgroundColor:
                  theme.colorScheme === 'dark' ? `${theme.colors.dark[7]} !important` : undefined,
              },
            }}
          >
            {code}
          </Prism> */}

          {/* <Group position="center" mt="xl">
            <Button
              variant="default"
              radius="md"
              leftIcon={
                colorScheme === 'dark' ? (
                  <IconSun size={rem(16)} color={theme.colors.yellow[4]} />
                ) : (
                  <IconMoonStars size={rem(16)} color={theme.colors.blue[7]} />
                )
              }
              onClick={() => toggleColorScheme()}
            >
              Toggle color scheme
            </Button>
          </Group> */}
        </div>
      </SimpleGrid>
    </PageSection>
  );
}
