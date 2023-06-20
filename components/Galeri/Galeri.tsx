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
  );
};

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <Galeri />
//   </React.StrictMode>,
// )

// interface CardProps {
//   image: string;
//   title: string;
//   category: string;
// }

// function Card({ image, title, category }: CardProps) {
//   const { classes } = useStyles();

//   return (
//     <Paper
//       shadow="md"
//       p="xl"
//       radius="md"
//       sx={{ backgroundImage: `url(${image})` }}
//       className={classes.card}
//     >
//       <div>
//         <Text className={classes.category} size="xs">
//           {category}
//         </Text>
//         <Title order={3} className={classes.title}>
//           {title}
//         </Title>
//       </div>
//       <Button variant="white" color="dark">
//         Read article
//       </Button>
//     </Paper>
//   );
// }

// const data = [
//   {
//     image:
//       'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//     title: 'Best forests to visit in North America',
//     category: 'nature',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//     title: 'Hawaii beaches review: better than you think',
//     category: 'beach',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//     title: 'Mountains at night: 12 best locations to enjoy the view',
//     category: 'nature',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//     title: 'Aurora in Norway: when to visit for best experience',
//     category: 'nature',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//     title: 'Best places to visit this winter',
//     category: 'tourism',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//     title: 'Active volcanos reviews: travel at your own risk',
//     category: 'nature',
//   },
// ];

// export function Galeri() {
//   const { classes } = useStyles();
//   const theme = useMantineTheme();
//   const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
//   const slides = data.map((item) => (
//     <Carousel.Slide key={item.title}>
//       <Card {...item} />
//     </Carousel.Slide>
//   ));

// return (
//   <PageSection
//     title="Galeri"
//     // description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements."
//     sx={(theme) => ({
//       backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
//     })}
//   >
//     <Carousel
//       slideSize="50%"
//       breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
//       slideGap="xl"
//       align="start"
//       slidesToScroll={mobile ? 1 : 2}
//     >
//       {slides}
//     </Carousel>
//   </PageSection>
// );
// }
