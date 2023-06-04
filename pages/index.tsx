import { HeaderMegaMenu } from '../components/Header/Header';
import { FooterLinks } from '../components/Footer/Footer';
import { HeroBullets } from '../components/Hero/Hero';
import { FaqSimple } from '../components/Pilih/Pilih';
import { TimelineSection } from '../components/TImeline/Timeline';
import { Center, Title } from '@mantine/core';
import { HeroTitle } from '../components/Hero/HeroTitile';

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

export default function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      {/* <Welcome /> */}
      <HeroTitle />
      {/* <ColorSchemeToggle /> */}
      <FaqSimple />
      <Center style={{ marginTop: '50px' }}>
        <Title order={2} style={{ marginBottom: 15 }}>
          Timeline
        </Title>
      </Center>
      <Center>
        <TimelineSection />
      </Center>
      <FooterLinks data={data} />
    </>
  );
}
