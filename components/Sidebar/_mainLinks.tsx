import React, { useState } from 'react';
import {
  IconGitPullRequest,
  IconAlertCircle,
  IconMessages,
  IconChartInfographic,
} from '@tabler/icons-react';
import { ThemeIcon, UnstyledButton, Group, Text, createStyles } from '@mantine/core';
import Link from 'next/link';
import { type Url } from 'url';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  active?: boolean;
  onClick?(): void;
  href: Url | string;
}

const useStyles = createStyles((theme) => ({
  ubtn: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

function MainLink({ icon, color, label, onClick, active, href }: MainLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Link href={href} passHref style={{ textDecoration: 'none' }}>
      <UnstyledButton onClick={onClick} className={cx(classes.ubtn, { [classes.active]: active })}>
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

const data = [
  {
    icon: <IconGitPullRequest size="1rem" />,
    color: 'blue',
    label: 'Ketua Tingkat III',
    href: '/pilih/tingkat-tiga',
  },
  {
    icon: <IconAlertCircle size="1rem" />,
    color: 'teal',
    label: 'Senat Mahasiswa Putaran ke-2',
    href: '/pilih/putaran-dua',
  },
  {
    icon: <IconMessages size="1rem" />,
    color: 'violet',
    label: 'Senat Mahasiswa Putaran ke-1',
    href: '/pilih',
  },
  {
    icon: <IconChartInfographic size="1rem" />,
    color: 'yellow',
    label: 'Hasil',
    href: '/hasil',
  },
];

export function MainLinks() {
  const [active, setActive] = useState<number | null>(null);
  const links = data.map((link, index) => (
    <MainLink
      {...link}
      key={link.label}
      active={active === index}
      onClick={() => setActive(index)}
      href={link.href}
    />
  ));
  return <div>{links}</div>;
}
