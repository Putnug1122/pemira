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
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import TabContent from '../../components/PilihPages/TabContent';
import { Logo } from '../../components/Sidebar/_logo';
import { MainLinks } from '../../components/Sidebar/_mainLinks';
import { User } from '../../components/Sidebar/_user';
import Link from 'next/link';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
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
        <TabContent />
      </AppShell>
    </>
  );
}
