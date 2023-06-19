import { createStyles, rem, em } from '@mantine/core';

export default createStyles((theme, { white }: { white: boolean }) => ({
  wrapper: {
    paddingTop: rem(70),
    paddingBottom: rem(20),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  description: {
    lineHeight: 1.6,
    opacity: 0.85,
    color: white || theme.colorScheme === 'dark' ? theme.white : theme.black,

    [`@media (max-width: ${em(960)})`]: {
      fontSize: theme.fontSizes.md,
    },
  },
}));
