import React, { useState } from 'react';
import { AppShell, useMantineTheme, ActionIcon, Tabs } from '@mantine/core';
import { IconPhoto, IconSettings } from '@tabler/icons-react';
import NavbarPilih from '../components/LayoutPilih/Navbar';
import HeaderPilih from '../components/LayoutPilih/Header';

export default function AppShellDemo() {
  const theme = useMantineTheme();
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
        navbar={<NavbarPilih />}
        header={<HeaderPilih />}
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
