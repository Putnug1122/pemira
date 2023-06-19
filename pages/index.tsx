import { HeaderMegaMenu } from '../components/Header/Header';
import { Box } from '@mantine/core';
import { Sambutan } from '../components/Sambutan/Sambutan';
import { Jumbotron } from '../components/Jumbotron/Jumbotron';
import { Waves } from '../components/Waves/Waves';
import { Components } from '../components/Pilih/Components';
import { TimelineTab } from '../components/CustomizeWithProps/Components';
import { Galeri } from '../components/Galeri/Galeri';
import { Berita } from '../components/Berita/Berita';
import { Footer } from '../components/Footer/Footer';
import AffixComponent from '../components/Utils/Afix';
import { HeaderResponsive } from '../components/Header/HeaderTwo';

const links = [
  { link: '/pemilihan', label: 'Pemilihan' },
  { link: '/sambutan', label: 'Sambutan' },
  { link: '/timeline', label: 'Timeline' },
  { link: '/galeri', label: 'Galeri' },
  { link: '/berita', label: 'Berita' },
  { link: '/hasil', label: 'Hasil' },
];

export default function HomePage() {
  return (
    <>
      <Box sx={(theme) => ({ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm })}>
        <AffixComponent />
        {/* <HeaderMegaMenu /> */}
        <HeaderResponsive links={links} />
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
      <Footer />
    </>
  );
}
