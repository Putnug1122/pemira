import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Image,
  useMantineTheme,
  ActionIcon,
  useMantineColorScheme,
  Modal,
  Button,
} from '@mantine/core';
import { useDisclosure, useScrollIntoView } from '@mantine/hooks';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { AuthenticationForm } from '../Login/Login';
const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'sticky',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

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
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [openedLogin, { open }] = useDisclosure(false);
  const { scrollIntoView, targetRef } = useScrollIntoView();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
        // scrollIntoView;
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        {/* <MantineLogo size={28} /> */}
        {theme.colorScheme === 'dark' ? (
          <Image src="/3.png" width="114.13px" height="30px" />
        ) : (
          <Image src="/2.png" width="114.13px" height="30px" />
        )}
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group spacing={5} className={classes.links}>
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
            opened={openedLogin}
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

          {/* <Group position="center"> */}
          <Button onClick={open} variant="default">
            Log in
          </Button>
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
