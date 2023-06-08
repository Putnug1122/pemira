import { HeaderMegaMenu } from '../components/Header/Header';
import { FooterLinks } from '../components/Footer/Footer Back';
import { TimelineSection } from '../components/TImeline/Timeline';
import { Center, Title, Box } from '@mantine/core';
import { HeroTitle } from '../components/Hero/HeroTitile';
import { AccordionPilih } from '../components/Pilih/AccordionPilih';
import { Container } from '@mantine/core';
import { Sambutan } from '../components/Sambutan/Sambutan';
import { Chrono } from 'react-chrono';
import { Jumbotron } from '../components/Jumbotron/Jumbotron';
import { Waves } from '../components/Waves/Waves';
import { Components } from '../components/Pilih/Components';
import { Footer } from '../components/Footer/Footer';

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

const items = [
  {
    title: 'January 2022',
    cardTitle: 'Event 1',
    cardSubtitle: 'Event 1 Subtitle',
    cardDetailedText: 'This is the first event on the timeline.',
  },
  {
    title: 'February 2022',
    cardTitle: 'Event 2',
    cardSubtitle: 'Event 2 Subtitle',
    cardDetailedText: 'This is the second event on the timeline.',
  },
  {
    title: 'March 2022',
    cardTitle: 'Event 3',
    cardSubtitle: 'Event 3 Subtitle',
    cardDetailedText: 'This is the third event on the timeline.',
  },
];

export default function HomePage() {
  return (
    <>
      <Box sx={(theme) => ({ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm })}>
        <HeaderMegaMenu />
        <Jumbotron />
        <Waves height={40} width={150} />
        <Components />
        <Waves height={42} width={220} flip alt />
        <Sambutan />
        <Container>
          <Center>
            <Title order={2} style={{ marginBottom: 15, marginTop: 50 }}>
              Bisa Pilih Siapa Aja ?
            </Title>
          </Center>
          <AccordionPilih />
        </Container>
        <Container>
          <Sambutan />
        </Container>
        <Center style={{ marginTop: '50px' }}>
          <Title order={2} style={{ marginBottom: 15 }}>
            Timeline
          </Title>
        </Center>
        <Center>
          <TimelineSection />
        </Center>
      </Box>
      <FooterLinks data={data} />
      {/* <Footer /> */}
    </>
  );
}
