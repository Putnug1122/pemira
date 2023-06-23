import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineColorScheme,
  ActionIcon,
  Modal,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { AuthenticationForm } from '../Login/Login';
import { useState } from 'react';
import { Link as ReactLink } from 'react-scroll';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  subReactLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);

  // close drawer and show modal
  const openModal = () => {
    closeDrawer();
    open();
  };

  return (
    <Box pb={0}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          {/* <MantineLogo size={30} /> */}
          <Link href="/">
            {theme.colorScheme === 'dark' ? (
              <Image src="/3.png" width="114.13px" height="30px" />
            ) : (
              <Image src="/2.png" width="114.13px" height="30px" />
            )}
          </Link>

          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            {/* 
              @ts-ignore */}
            <Link href="/" className={classes.link} smooth>
              &larr; Kembali ke Beranda
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
              })}
            >
              {colorScheme === 'dark' ? (
                <IconSun size={20} stroke={1.5} />
              ) : (
                <IconMoonStars size={20} stroke={1.5} />
              )}
            </ActionIcon>
            <Modal
              opened={opened}
              onClose={close}
              // title="Authentication"
              centered
              overlayProps={{
                color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                opacity: 0.55,
                blur: 3,
              }}
              withCloseButton={false}
            >
              {/* Modal content */}
              <AuthenticationForm />
            </Modal>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        transitionProps={{ transition: 'pop-top-left', duration: 150, timingFunction: 'linear' }}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
              })}
            >
              {colorScheme === 'dark' ? (
                <IconSun size={20} stroke={1.5} />
              ) : (
                <IconMoonStars size={20} stroke={1.5} />
              )}
            </ActionIcon>

            <Button onClick={openModal} variant="default">
              Log in
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
