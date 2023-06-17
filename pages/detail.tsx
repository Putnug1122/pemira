import { HeaderMegaMenu } from '../components/Header/Header';
import { FooterLinks } from '../components/Footer/Footer Back';
import { Card, Image, Text, Container, AspectRatio} from '@mantine/core';
import { useRouter } from 'next/router';
import { mockdata } from '../components/Berita/Mockdata';


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
          <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
            {berita?.date}
          </Text>
          <Text mt={5} size="xl" align="center">
            {berita?.title}
          </Text>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'2.5em 0' }}>
            <Image src={berita?.image} alt={berita?.title} style={{ maxWidth: '500px', maxHeight: '800px', objectFit: 'contain', margin: 'auto' }}/>
          </div>
          <Text size="md" align="justify" px={10}>
          {berita?.description && (
          <>
            {berita.description.paragraph_1.split('\n').map((paragraph, index) => (
              <Text key={index} mt={15}>{paragraph}</Text>
            ))}
            {berita.description.paragraph_2.split('\n').map((paragraph, index) => (
              <Text key={index} mt={15}>{paragraph}</Text>
            ))}
            {berita.id === 4 ? ( // Menambahkan kondisi berdasarkan id berita
              <>
                {berita.description.paragraph_3.split('\n').map((paragraph, index) => (
                  <Text key={index} mt={15} ml='xl'>{paragraph}</Text>
                ))}
              </>
            ) : ( // Menambahkan kondisi berdasarkan id berita
            <>
                {berita.description.paragraph_3.split('\n').map((paragraph, index) => (
                  <Text key={index} mt={15}>{paragraph}</Text>
              ))}
              </>
            )}
            {berita.description.paragraph_4.split('\n').map((paragraph, index) => (
              <Text key={index} mt={15}>{paragraph}</Text>
            ))}
            {berita.description.paragraph_5.split('\n').map((paragraph, index) => (
              <Text key={index} mt={15} mb={15}>{paragraph}</Text>
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
