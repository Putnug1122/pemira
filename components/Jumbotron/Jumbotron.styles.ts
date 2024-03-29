import { createStyles, rem, em } from '@mantine/core';
import { getGradient } from './get-gradient';

const BREAKPOINT = `@media (max-width: ${em(960)})`;

export default createStyles((theme) => ({
  jumbotron: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: rem(170),
    paddingBottom: rem(180),

    [BREAKPOINT]: {
      paddingBottom: rem(100),
      paddingTop: rem(90),
    },
  },

  description: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    fontSize: rem(24),
    maxWidth: rem(800),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],

    [BREAKPOINT]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(64),
    paddingLeft: rem(46),
    paddingRight: rem(46),
    fontSize: rem(18),

    [BREAKPOINT]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },

  controlPrimary: {
    border: 0,
    fontWeight: 700,
    backgroundImage: getGradient(theme, 'bg'),
  },

  githubControl: {
    borderColor: 'transparent',
    backgroundColor: theme.colors.dark[6],
    color: theme.white,
    fontWeight: 700,
    ...theme.fn.hover({
      backgroundColor: `${theme.colors.dark[5]} !important`,
      color: theme.white,
    }),
  },

  feature: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    [`@media (max-width: ${em(800)})`]: {
      flexDirection: 'row',
    },
  },

  featureBody: {
    marginTop: theme.spacing.xs,

    [`@media (max-width: ${em(800)})`]: {
      marginTop: 0,
      marginLeft: theme.spacing.lg,
    },
  },

  featureTitle: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  featureIcon: {
    color: theme.white,
    borderRadius: theme.radius.md,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: rem(50),
    height: rem(50),
    backgroundImage: getGradient(theme, 'bg'),

    '& svg': {
      display: 'block',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(90),
    fontWeight: 900,
    lineHeight: 0.9,
    letterSpacing: rem(1),
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(29),
      lineHeight: 1.2,
    },
  },
}));
