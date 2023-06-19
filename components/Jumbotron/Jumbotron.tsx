import React from 'react';
// import { Link } from 'gatsby';
import {
  Container,
  Group,
  Button,
  Text,
  useMantineTheme,
  SimpleGrid,
  rem,
  Title,
} from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import { FEATURES_DATA } from './features';
import useStyles from './Jumbotron.styles';
import { IconBook } from '@tabler/icons-react';

export function Jumbotron() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const features = FEATURES_DATA.map((feature) => (
    <div className={classes.feature} key={feature.title}>
      <div className={classes.featureIcon}>
        <feature.icon size={rem(28)} stroke={1.5} />
      </div>

      <div className={classes.featureBody}>
        <Text weight={500} className={classes.featureTitle}>
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt={4}>
          {feature.description}
        </Text>
      </div>
    </div>
  ));

  return (
    <div className={classes.jumbotron}>
      <Container size={1100} className={classes.inner}>
        {/* <Hero /> */}
        <Title className={classes.title}>
          Website{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Pemilihan Raya
          </Text>{' '}
          untuk Polstat STIS
        </Title>
        <Text className={classes.description}>
          Pemira di Politeknik Statistika STIS adalah wujud demokrasi kampus yang memfasilitasi
          pemilihan Ketua, Anggota DPM, Ketua dan Wakil Ketua Sema, serta Ketua Tingkat I-IV.
        </Text>

        <SimpleGrid
          cols={3}
          sx={{ maxWidth: rem(800) }}
          spacing={30}
          mt={40}
          breakpoints={[{ maxWidth: 800, cols: 1 }]}
        >
          {features}
        </SimpleGrid>

        <Group className={classes.controls}>
          <Button
            component={'a'}
            href="/pilih"
            size="xl"
            radius="md"
            className={cx(classes.control, classes.controlPrimary)}
            variant="gradient"
          >
            Pilih Sekarang
          </Button>

          <Button
            component="a"
            href="https://drive.google.com/file/d/1aVnuNCGJDjOHfZfQiO4SMPGV39ELY8Wl/view"
            size="xl"
            variant="outline"
            radius="md"
            className={cx(classes.control, classes.githubControl)}
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
            leftIcon={<IconBook size={22} />}
            styles={{ leftIcon: { marginRight: rem(10) } }}
          >
            Pedoman
          </Button>
        </Group>
      </Container>
    </div>
  );
}
