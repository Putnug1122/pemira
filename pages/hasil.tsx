import React, { useState } from 'react';
import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Header,
  MediaQuery,
  Navbar,
  useMantineColorScheme,
  useMantineTheme,
  Image,
  Card,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

import { MainLinks } from '../components/Sidebar/_mainLinks';
import { User } from '../components/Sidebar/_user';
import Link from 'next/link';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [' Arfi & Anugerah', ' Gestyan & Kamal', ' Farhan & Kautsar'],
  datasets: [
    {
      label: ' Votes',
      data: [871, 784, 588],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1,
    },
  ],
};

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 0.9,
    letterSpacing: rem(1),
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  return (
    <>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white,
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
            style={{
              background:
                theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
            }}
          >
            <Navbar.Section grow mt="xs">
              <MainLinks />
            </Navbar.Section>
            <Navbar.Section>
              <User />
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header
            height={60}
            style={{
              background:
                theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
            }}
          >
            <Group sx={{ height: '100%' }} px={20} position="apart">
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                />
              </MediaQuery>
              {/* <Logo colorScheme={colorScheme} /> */}
              <Link href="/">
                {theme.colorScheme === 'dark' ? (
                  <Image src="/3.png" width="100px" height="26.16px" />
                ) : (
                  <Image src="/2.png" width="100px" height="26.16px" />
                )}
              </Link>

              <ActionIcon
                variant="default"
                onClick={() => toggleColorScheme()}
                size="lg"
                radius="md"
              >
                {colorScheme === 'dark' ? <IconSun size="1.375rem" /> : <IconMoon size="1.3rem" />}
              </ActionIcon>
            </Group>
          </Header>
        }
      >
        <Card
          withBorder
          radius="md"
          padding="xl"
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          })}
        >
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Title
              align="center"
              my={15}
              gradient={{ from: 'yellow', to: 'blue', deg: 45 }}
              variant="gradient"
              className={classes.title}
            >
              Pemilihan Ketua dan Wakil Ketua Senat Mahasiswa Putaran ke-1
            </Title>
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Title
              align="center"
              my={15}
              gradient={{ from: 'yellow', to: 'blue', deg: 45 }}
              variant="gradient"
              order={3}
              className={classes.title}
            >
              Pemilihan Ketua dan Wakil Ketua Senat Mahasiswa Putaran ke-1
            </Title>
          </MediaQuery>
          <div style={{ maxWidth: '500px', maxHeight: '500px', margin: 'auto'}}>
            <Doughnut style={{alignItems:'center', marginTop:'2.5em'}}
              data={data}
              options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    padding: 20,
                    usePointStyle: true,
                    pointStyle: 'circle',
                  },
                },
              },
              }}
            />
          </div>
        </Card>
      </AppShell>
    </>
  );
}
