import {
  ActionIcon,
  Burger,
  Group,
  Header,
  MediaQuery,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import React, { useState } from 'react';
import { Logo } from '../Sidebar/_logo';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export default function HeaderPilih() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
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
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size="lg" radius="md">
          {colorScheme === 'dark' ? <IconSun size="1.375rem" /> : <IconMoonStars size="1.375rem" />}
        </ActionIcon>
      </Group>
    </Header>
  );
}
