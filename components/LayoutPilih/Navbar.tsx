import { useState } from 'react';
import { Navbar } from '@mantine/core';
import { MainLinks } from '../Sidebar/_mainLinks';
import { User } from '../Sidebar/_user';

export default function NavbarPilih() {
  const [opened, setOpened] = useState(false);
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      <Navbar.Section grow mt="xs">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}
