import React, { useState } from 'react';
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Pagination } from '@mantine/core';
import { Pages } from '../Pages/Pages';
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

export function BeritaLengkap() {
  const { classes } = useStyles();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = mockdata.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Menghitung indeks awal dan akhir berita yang akan ditampilkan pada halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCards = mockdata.slice(startIndex, endIndex);

  const cards = displayedCards.sort((a, b) => b.id - a.id).map((article) => (
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

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <Pages
      title="Berita Pemira"
      // description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements."
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      })}
    >
      <Container py="xl" size={'100%'}>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Container>
      
      <Pagination
        total={totalPages}
        value={currentPage}
        onChange={handlePageChange}
        size="md"
        variant="outline"
        color="blue"
        mt="xl"
        sx={{ justifyContent: 'center' }}
      />
    </Pages>
  );
}
