import { HeaderMegaMenu } from '../components/Header/Header';
import { FooterLinks } from '../components/Footer/Footer Back';
import { Card, Image, Text, Container, Box, Flex } from '@mantine/core';
import { useRouter } from 'next/router';
import { mockdata } from '../components/Berita/Mockdata';
import { IconCalendarEvent, IconEdit, IconTags } from '@tabler/icons-react';

const data = [
  {
    title: 'About',
    links: [
      {
        label: 'Features',
        link: '#',
      },
      {
        label: 'Pricing',
        link: '#',
      },
      {
        label: 'Support',
        link: '#',
      },
      {
        label: 'Forums',
        link: '#',
      },
    ],
  },
  {
    title: 'Project',
    links: [
      {
        label: 'Contribute',
        link: '#',
      },
      {
        label: 'Media assets',
        link: '#',
      },
      {
        label: 'Changelog',
        link: '#',
      },
      {
        label: 'Releases',
        link: '#',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        label: 'Join Discord',
        link: '#',
      },
      {
        label: 'Follow on Twitter',
        link: '#',
      },
      {
        label: 'Email newsletter',
        link: '#',
      },
      {
        label: 'GitHub discussions',
        link: '#',
      },
    ],
  },
];

interface ArticleInterface {
  id?: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  description: {
    paragraph_1: string;
    paragraph_2: string;
    paragraph_3: string;
    paragraph_4: string;
    paragraph_5: string;
  };
  paragraph_add: string;
  paragraph_footer: string;
  tags: string;
  author: string;
}

export default function DetailBerita() {
  const router = useRouter();
  const { judul } = router.query;

  // Ambil data berita berdasarkan judul artikel
  const berita = mockdata.find((article) => article.title === judul);

  return (
    <>
      <HeaderMegaMenu />
      <Container py="xl" size={'75%'}>
        <Card p="md" radius="md" style={{ width: '100%', textAlign: 'center' }}>
          <Text mt={20} align="center" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            {berita?.title}
          </Text>
          <Box mt={10}>
            <Flex align="center" justify="center">
              <Flex align="center" style={{ marginRight: '1rem' }}>
                <IconCalendarEvent
                  size={18}
                  strokeWidth={2}
                  color={'grey'}
                  style={{ marginRight: '0.5rem' }}
                />
                <Text size="xs" color="gray" transform="uppercase" weight={700}>
                  {berita?.date}
                </Text>
              </Flex>
              <Flex align="center" style={{ marginRight: '1rem' }}>
                <IconTags
                  size={18}
                  strokeWidth={2}
                  color={'grey'}
                  style={{ marginRight: '0.5rem' }}
                />
                <Text size="xs" color="gray" transform="uppercase" weight={700}>
                  {berita?.tags}
                </Text>
              </Flex>
              <Flex align="center" style={{ marginRight: '1rem' }}>
                <IconEdit
                  size={18}
                  strokeWidth={2}
                  color={'grey'}
                  style={{ marginRight: '0.5rem' }}
                />
                <Text size="xs" color="gray" transform="uppercase" weight={700}>
                  {berita?.author}
                </Text>
              </Flex>
            </Flex>
          </Box>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '1.75em 0',
            }}
          >
            <Image
              src={berita?.image}
              alt={berita?.title}
              style={{
                maxWidth: '500px',
                maxHeight: '900px',
                objectFit: 'contain',
                margin: 'auto',
              }}
            />
          </div>
          <Text size="md" align="justify" px={25} py={10}>
            {berita?.description && (
              <>
                {berita.description.paragraph_1.split('\n').map((paragraph, index) => (
                  <Text key={index} mt={15}>
                    {paragraph}
                  </Text>
                ))}
                {[2, 3].includes(berita?.id) && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '1.75em 0',
                    }}
                  >
                    <Image
                      src={berita?.image_2}
                      alt={berita?.title}
                      style={{
                        maxWidth: '500px',
                        maxHeight: '900px',
                        objectFit: 'contain',
                        margin: 'auto',
                      }}
                    />
                  </div>
                )}
                {berita.description.paragraph_2.split('\n').map((paragraph, index) => (
                  <Text key={index} mt={15}>
                    {paragraph}
                  </Text>
                ))}
                {[1, 5, 6, 7, 8, 9, 10, 12, 13, 14].includes(berita?.id) ? ( // Menambahkan kondisi berdasarkan id berita
                  <>
                    {berita.description.paragraph_3.split('\n').map((paragraph, index) => (
                      <Text key={index} mt={15} ml="xl">
                        {paragraph}
                      </Text>
                    ))}
                  </>
                ) : (
                  // Menambahkan kondisi berdasarkan id berita
                  <>
                    {berita.description.paragraph_3.split('\n').map((paragraph, index) => (
                      <Text key={index} mt={15}>
                        {paragraph}
                      </Text>
                    ))}
                  </>
                )}
                {[4, 5].includes(berita?.id) && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '1.75em 0',
                    }}
                  >
                    <Image
                      src={berita?.image_2}
                      alt={berita?.title}
                      style={{
                        maxWidth: '500px',
                        maxHeight: '900px',
                        objectFit: 'contain',
                        margin: 'auto',
                      }}
                    />
                  </div>
                )}
                {berita.description.paragraph_4.split('\n').map((paragraph, index) => (
                  <Text key={index} mt={15}>
                    {paragraph}
                  </Text>
                ))}
                {[9].includes(berita?.id) && (
                  <>
                    {berita.paragraph_add.split('\n').map((paragraph, index) => (
                      <Text key={index} mt={15} ml="xl">
                        {paragraph}
                      </Text>
                    ))}
                  </>
                )}
                {berita.description.paragraph_5.split('\n').map((paragraph, index) => (
                  <Text key={index} mt={15} mb={15}>
                    {paragraph}
                  </Text>
                ))}
              </>
            )}
          </Text>
          <Text size="md" align="justify" px={25} py={10} mt={25}>
            {[11, 12, 13, 14].includes(berita?.id ?? 1) && (
              <>
                {berita?.paragraph_footer.split('\n').map((paragraph, index) => (
                  <Text key={index} mt={10}>
                    {paragraph}
                  </Text>
                ))}
              </>
            )}
          </Text>
        </Card>
      </Container>
      <FooterLinks data={data} />
    </>
  );
}
