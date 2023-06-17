import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Button, rem } from '@mantine/core';
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
  const slicedMockdata = mockdata.slice(0, 6);

  const cards = slicedMockdata.map((article) => (
    <Link key={article.title} href={`/detail?judul=${article.title}`} className={classes.card} style={{ width: 'auto', height: 'auto' }}>
      <Card p="md" radius="md" className={classes.card} style={{ width: 'auto', height: 'auto' }}>
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.image} />
        </AspectRatio>
        <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
          {article.date}
        </Text>
        <Text className={classes.title} mt={5}>
          {article.title}
        </Text>
        <Text mt={5} size="sm" align='justify'>
          {article.excerpt}
        </Text>
      </Card>
    </Link>
  ));

  function ButtonDirect() {
    return (
      <Link href="/berita">
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
            textDecoration: 'none',
          }}
        >
          Lebih Banyak Berita
        </Button>
      </Link>
    );
  }

  return (
    <PageSection
      title="Berita Pemira"
      // description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements."
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      })}
    >
      <Container py="xl">
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {cards}
        </SimpleGrid>
        <ButtonDirect />
      </Container>
    </PageSection>
  );
}
