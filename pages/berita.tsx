import { HeaderMegaMenu } from '../components/Header/Header';
import { FooterLinks } from '../components/Footer/Footer Back';
import { Box } from '@mantine/core';
import { BeritaLengkap } from '../components/Berita/BeritaLengkap';


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


export default function BeritaPemira() {;

  
    
  return (
    <>
      <Box sx={(theme) => ({ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm })}>
        <HeaderMegaMenu />
        <BeritaLengkap />
      </Box>
      <FooterLinks data={data} />
    </>
  );
  }


