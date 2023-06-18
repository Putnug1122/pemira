import React, { useState } from 'react';
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Pagination, Box, Flex, Input } from '@mantine/core';
import { IconCalendarEvent, IconEdit, IconSearch } from '@tabler/icons-react';
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
  const [searchQuery, setSearchQuery] = useState('');
  const totalItems = mockdata.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Menghitung indeks awal dan akhir berita yang akan ditampilkan pada halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // Filter berita berdasarkan pencarian
  const filteredCards = mockdata.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const displayedCards = filteredCards.slice(startIndex, endIndex);

  const cards = displayedCards.sort((a, b) => b.id - a.id).map((article) => (
    <Link key={article.title} href={`/detail?judul=${article.title}`} className={classes.card} style={{ width: 'auto', height: 'auto', textDecoration:'none' }}>
      <Card p="md" radius="md" className={classes.card} style={{ width: 'auto', height: 'auto' }}>
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.image} />
        </AspectRatio>
        <Text className={classes.title} mt={15} align='start'>
          {article.title}
        </Text>
        <Text mt={10} size="sm" align='justify'>
          {article.excerpt}
        </Text>
        <Box mt={20}>
        <Flex align="center" justify="space-between">
          <Flex align="center">
          <IconCalendarEvent size={18} strokeWidth={2} color={'grey'} style={{ marginRight: '0.5rem' }}/>
            <Text size="xs" color="gray" transform="uppercase" weight={700}>{article.date}</Text>
          </Flex>
          <Flex align="center">
          <IconEdit size={18} strokeWidth={2} color={'grey'} style={{ marginRight: '0.5rem' }}/>
            <Text size="xs" color="gray" transform="uppercase" weight={700}>{article.author}</Text>
          </Flex>
        </Flex>
        </Box>
      </Card>
    </Link>
  ));

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset halaman saat pencarian berubah
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
      <Input
          placeholder="Cari berita berdasarkan judul..."
          value={searchQuery}
          onChange={handleSearchChange}
          size="md"
          mb="xl"
        />
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
