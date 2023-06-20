import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Paper, Text, Title, useMantineTheme, rem } from '@mantine/core';
import { PageSection } from '../PageSection/PageSection';
// import useStyles from './Geleri.styles';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import GaleriEmbla from './GaleriEmbla';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel-react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Galeri: React.FC = () => {
  const emblaApiRef = useRef<EmblaCarouselType | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApiRef.current) {
        const { scrollNext } = emblaApiRef.current;
        scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApiRef]);

  return (
    <section id="galeri">
      <PageSection
        title="Galeri"
        // description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements."
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        })}
      >
        <main className="sandbox">
          <section className="sandbox__carousel">
            <GaleriEmbla slides={SLIDES} options={OPTIONS} emblaApiRef={emblaApiRef} />
          </section>
        </main>

        <div style={{ position: 'relative' }}>
          <Link href="/galeri" style={{ textDecoration: 'none' }}>
            <Button
              variant="light"
              radius="xl"
              size="md"
              style={{
                marginTop: rem(25),
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                justifyContent: 'center',
              }}
            >
              Lebih Semua
            </Button>
          </Link>
        </div>
      </PageSection>
    </section>
  );
};
