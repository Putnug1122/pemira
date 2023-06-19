import { HeaderMegaMenu } from '../components/Header/Header2';
import { Box } from '@mantine/core';
import { FullGaleri } from '../components/Galeri/FullGaleri';
import { Footer } from '../components/Footer/Footer';
import AffixComponent from '../components/Utils/Afix';

export default function GaleriPage() {
  return (
    <>
      <Box sx={(theme: { shadows: { sm: any; }; }) => ({ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm })}>
      <AffixComponent />
      <HeaderMegaMenu />
        <FullGaleri />
      </Box>
      <Footer />
    </>
  );
  }
  