import { HeaderMegaMenu } from '../components/Header/Header';
import { FooterLinks } from '../components/Footer/Footer Back';
import { Box } from '@mantine/core';
import { Sambutan } from '../components/Sambutan/Sambutan';
import { Jumbotron } from '../components/Jumbotron/Jumbotron';
import { Waves } from '../components/Waves/Waves';
import { Components } from '../components/Pilih/Components';
import { TimelineTab } from '../components/CustomizeWithProps/Components';
import { Galeri } from '../components/Galeri/Galeri';
import { Berita } from '../components/Berita/Berita';
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

export default function HomePage() {
  return (
    <>
      <Box sx={(theme) => ({ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm })}>
        {/* <HeaderMegaMenu /> */}
        <Jumbotron />
        <Waves height={40} width={150} />
        <Components />
        <Waves height={42} width={220} flip alt />
        <Sambutan />
        <Waves height={28} width={200} flip />
        <TimelineTab />
        <Waves height={36} width={110} alt />
        <Galeri />
        <Waves height={30} width={134} flip />
        <Berita />
      </Box>
      {/* <FooterLinks data={data} /> */}
      <Footer />
    </>
  );
}
