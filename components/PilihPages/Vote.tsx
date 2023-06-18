import {
  Group,
  SimpleGrid,
  Radio,
  Container,
  MediaQuery,
  Title,
  Center,
  Button,
} from '@mantine/core';
import { useState } from 'react';
import localFonts from 'next/font/local';
import { Paslon } from './Paslon';
import { notifications } from '@mantine/notifications';
import { IconCircleCheck, IconCircleX, IconClipboard } from '@tabler/icons-react';

const myFont = localFonts({ src: '../fonts/Fontspring-DEMO-greycliffcf-heavy.otf' });

export default function ImageCheckboxes() {
  const [value, setValue] = useState('');
  const [select, setSelect] = useState('');

  const submit = () => {
    if (value == '') {
      notifications.show({
        color: 'red',
        title: 'Gagal',
        icon: <IconCircleX />,
        message: 'Silahkan pilih salah satu paslon',
        autoClose: 3000,
      });
    } else {
      setSelect(value);
      notifications.show({
        color: 'green',
        title: 'Berhasil',
        message: 'Berhasil memilih',
        icon: <IconCircleCheck />,
        autoClose: 3000,
      });
    }
  };
  return (
    <>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Title
          align="center"
          my={15}
          className={[myFont.className].join(' ')}
          gradient={{ from: 'yellow', to: 'blue', deg: 45 }}
          variant="gradient"
        >
          Silahkan Pilih Pasangan Calon Ketua – Wakil dan Wakil Ketua <br />
          Senat Mahasiswa 2022 – 2023
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
          Silahkan Pilih Pasangan Calon Ketua – Wakil dan Wakil Ketua Senat Mahasiswa 2022 – 2023
        </Title>
      </MediaQuery>
      <Center>
        <Radio.Group
          withAsterisk
          value={value}
          onChange={setValue}
          label="Pilih Pasangan Calon"
          description="Suara bersifat rahasia"
        >
          <Group mt="xs" position="apart">
            {/* <Container> */}
            <SimpleGrid
              cols={3}
              spacing="md"
              breakpoints={[
                { maxWidth: 'md', cols: 2, spacing: 'md' },
                { maxWidth: 'sm', cols: 1, spacing: 'sm' },
                { maxWidth: 'sm', cols: 1, spacing: 'sm' },
              ]}
            >
              <Radio
                // classNames={classes}
                label={
                  <Paslon
                    image={
                      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
                    }
                    title={'Arfi & Anugerah'}
                    author={'Pasangan Nomor 1'}
                  />
                }
                value="candidate1"
              />
              <Radio
                label={
                  <Paslon
                    image={
                      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
                    }
                    title={'Gestyan & Kamal'}
                    author={'Pasangan Nomor 2'}
                  />
                }
                value="candidate2"
              />
              <Radio
                label={
                  <Paslon
                    image={
                      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
                    }
                    title={'Farhan & Kautsar'}
                    author={'Pasangan Nomor 3'}
                  />
                }
                value="candidate3"
              />
            </SimpleGrid>
            {/* </Container> */}
          </Group>
        </Radio.Group>
      </Center>
      <Container>
        {select == '' ? (
          <Button
            variant="gradient"
            color="blue"
            radius="md"
            size="lg"
            mt={20}
            onClick={submit}
            leftIcon={<IconClipboard />}
            fullWidth
          >
            Pilih
          </Button>
        ) : (
          <Button
            variant="gradient"
            color="blue"
            radius="md"
            size="lg"
            mt={20}
            leftIcon={<IconClipboard />}
            disabled
          >
            Pilih
          </Button>
        )}
      </Container>
    </>
  );
}
