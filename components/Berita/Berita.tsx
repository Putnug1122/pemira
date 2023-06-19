import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Button,
  rem,
  Box,
  Flex,
} from '@mantine/core';
import { IconCalendarEvent, IconEdit } from '@tabler/icons-react';
import { PageSection } from '../PageSection/PageSection';
import { mockdata } from './Mockdata';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function Berita() {
  const { classes } = useStyles();

  // Ambil hanya 6 data pertama dari mockdata
  const slicedMockdata = mockdata.sort((a, b) => b.id - a.id).slice(0, 6);

  const cards = slicedMockdata.map((article) => (
    <Link
      key={article.title}
      href={`/detail?judul=${article.title}`}
      className={classes.card}
      style={{ width: 'auto', height: 'auto', textDecoration: 'none' }}
    >
      <Card p="md" radius="md" className={classes.card} style={{ width: 'auto', height: 'auto' }}>
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.image} />
        </AspectRatio>
        <Text className={classes.title} mt={15}>
          {article.title}
        </Text>
        <Text mt={10} size="sm" align="justify">
          {article.excerpt}
        </Text>
        <Box mt={20}>
          <Flex align="center" justify="space-between">
            <Flex align="center">
              <IconCalendarEvent
                size={18}
                strokeWidth={2}
                color={'grey'}
                style={{ marginRight: '0.5rem' }}
              />
              <Text size="xs" color="gray" transform="uppercase" weight={700}>
                {article.date}
              </Text>
            </Flex>
            <Flex align="center">
              <IconEdit
                size={18}
                strokeWidth={2}
                color={'grey'}
                style={{ marginRight: '0.5rem' }}
              />
              <Text size="xs" color="gray" transform="uppercase" weight={700}>
                {article.author}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Card>
    </Link>
  ));

  function ButtonDirect() {
    return (
      <Link href="/berita" style={{ textDecoration: 'none' }}>
        <Button
          variant="light"
          radius="xl"
          size="md"
          style={{
            marginTop: rem(25),
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent: 'center',
          }}
        >
          Lebih Banyak Berita
        </Button>
      </Link>
    );
  }

  return (
    <section id="berita">
      <PageSection
        title="Berita Pemira"
        // description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements."
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        })}
      >
        <Container py="xl">
          <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {cards}
          </SimpleGrid>
          <ButtonDirect />
        </Container>
      </PageSection>
    </section>
  );
}
