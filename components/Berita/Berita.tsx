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
  Group,
  ActionIcon,
} from '@mantine/core';
import { IconCalendarEvent, IconEdit } from '@tabler/icons-react';
import { PageSection } from '../PageSection/PageSection';
import { mockdata } from './Mockdata';
import Link from 'next/link';
import { ArticleCardFooter } from './NewCard';

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
  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
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
      style={{ textDecoration: 'none' }}
    >
      <ArticleCardFooter
        date={article.date}
        image={article.image}
        tags={article.tags}
        title={article.title}
      />
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
