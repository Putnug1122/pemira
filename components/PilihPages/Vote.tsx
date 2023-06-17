import {
  Card,
  Image,
  Text,
  Group,
  SimpleGrid,
  Radio,
  Container,
  MediaQuery,
  Title,
  createStyles,
} from '@mantine/core';
import { useState } from 'react';
import localFonts from 'next/font/local';

const myFont = localFonts({ src: '../fonts/Fontspring-DEMO-greycliffcf-heavy.otf' });

const useStyles = createStyles((theme) => ({}));

export default function ImageCheckboxes() {
  const [value, setValue] = useState('react');
  const { classes, theme } = useStyles();

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
      <Radio.Group withAsterisk value={value} onChange={setValue}>
        <Group mt="xs">
          <Container>
            <SimpleGrid
              cols={3}
              spacing="lg"
              breakpoints={[
                { maxWidth: 'md', cols: 2, spacing: 'md' },
                { maxWidth: 'sm', cols: 1, spacing: 'sm' },
                { maxWidth: 'sm', cols: 1, spacing: 'sm' },
              ]}
            >
              <Radio
                classNames={classes}
                label={
                  <Card withBorder shadow="sm" radius="md">
                    <Card.Section mt="sm">
                      <Image
                        src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        height="100%"
                      />
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="xs">
                      <Group position="apart">
                        <Text weight={500}>Review pictures</Text>
                      </Group>
                    </Card.Section>
                  </Card>
                }
                value="candidate1"
              />
              <Radio
                label={
                  <Card withBorder shadow="sm" radius="md">
                    <Card.Section mt="sm">
                      <Image
                        src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        height="100%"
                      />
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="xs">
                      <Group position="apart">
                        <Text weight={500}>Review pictures</Text>
                      </Group>
                    </Card.Section>
                  </Card>
                }
                value="candidate1"
              />
              <Radio
                label={
                  <Card withBorder shadow="sm" radius="md">
                    <Card.Section mt="sm">
                      <Image
                        src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        height="100%"
                      />
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="xs">
                      <Group position="apart">
                        <Text weight={500}>Review pictures</Text>
                      </Group>
                    </Card.Section>
                  </Card>
                }
                value="candidate1"
              />
            </SimpleGrid>
          </Container>
        </Group>
      </Radio.Group>
    </>
  );
}
