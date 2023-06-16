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
} from '@mantine/core';
import { IconMoon, IconPhoto, IconSettings, IconSun } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import TabContent from '../../components/PilihPages/TabContent';
import { Logo } from '../../components/Sidebar/_logo';
import { MainLinks } from '../../components/Sidebar/_mainLinks';
import { User } from '../../components/Sidebar/_user';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
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
                />
              </MediaQuery>
              <Logo colorScheme={colorScheme} />
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
