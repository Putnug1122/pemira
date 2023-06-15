import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  useMantineColorScheme,
  ActionIcon,
  Tabs,
} from '@mantine/core';
import { MainLinks } from '../components/Sidebar/_mainLinks';
import { User } from '../components/Sidebar/_user';
import { Logo } from '../components/Sidebar/_logo';
import { IconMoonStars, IconPhoto, IconSettings, IconSun } from '@tabler/icons-react';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const tabs = [
    { label: 'Gallery', icon: <IconPhoto size="0.8rem" />, content: 'Gallery tab content' },
    { label: 'Settings', icon: <IconSettings size="0.8rem" />, content: 'Settings tab content' },
  ];

  return (
    <>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <Navbar.Section grow mt="xs">
              <MainLinks />
            </Navbar.Section>
            <Navbar.Section>
              <User />
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={60}>
            <Group sx={{ height: '100%' }} px={20} position="apart">
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Logo colorScheme={colorScheme} />
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
              </ActionIcon>
            </Group>
          </Header>
        }
      >
        <Tabs color="red" variant="outline" defaultValue="gallery">
          <Tabs.List grow>
            <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>
              Gallery
            </Tabs.Tab>
            <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            Gallery tab content
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </AppShell>
    </>
  );
}
