import { Box } from '@mantine/core';
import { FullGaleri } from '../components/Galeri/FullGaleri';

export default function GaleriPage() {
  return (
    <>
      <Box sx={(theme: { shadows: { sm: any; }; }) => ({ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm })}>
        <FullGaleri />
      </Box>
    </>
  );
  }
  