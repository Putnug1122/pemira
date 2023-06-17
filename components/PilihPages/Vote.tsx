import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  SimpleGrid,
  Radio,
  Container,
  MediaQuery,
  Title,
} from '@mantine/core';
import { useState } from 'react';
import localFonts from 'next/font/local';

const myFont = localFonts({ src: '../fonts/Fontspring-DEMO-greycliffcf-heavy.otf' });

export default function ImageCheckboxes() {
  const [value, setValue] = useState('react');
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
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                  />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>
                <Text size="sm" color="dimmed">
                  With Fjord Tours you can explore more of the magical fjord landscapes with tours
                  and activities on and around the fjords of Norway
                </Text>
                <Radio value="react" label="React" />
              </Card>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                  />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>
                <Text size="sm" color="dimmed">
                  With Fjord Tours you can explore more of the magical fjord landscapes with tours
                  and activities on and around the fjords of Norway
                </Text>
                <Radio value="svelte" label="Svelte" />
              </Card>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                  />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>
                <Text size="sm" color="dimmed">
                  With Fjord Tours you can explore more of the magical fjord landscapes with tours
                  and activities on and around the fjords of Norway
                </Text>
                <Radio value="vue" label="Vue" />
              </Card>
            </SimpleGrid>
          </Container>
        </Group>
      </Radio.Group>
    </>
  );
}
