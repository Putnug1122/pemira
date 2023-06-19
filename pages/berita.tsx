import { HeaderMegaMenu } from '../components/Header/Header';
import { Box } from '@mantine/core';
import { BeritaLengkap } from '../components/Berita/BeritaLengkap';
import { Footer } from '../components/Footer/Footer';

export default function BeritaPemira() {
  return (
    <>
      <Box sx={(theme) => ({ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm })}>
        <HeaderMegaMenu />
        <BeritaLengkap />
      </Box>
      <Footer />
    </>
  );
}
