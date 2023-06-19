import React from 'react';
import { Text } from '@mantine/core';
import { IconMail, IconBrandInstagram, IconBrandTwitter, IconBrandFacebook } from '@tabler/icons';
import useStyles from './LinksGroup.styles';

export interface LinksGroupProps {
  title: string;
  data: {
    type: 'link' | 'gatsby';
    link: string;
    label: string;
    icon?: React.ReactNode;
  }[];
}

export function LinksGroup({ data, title }: LinksGroupProps) {
  const { classes } = useStyles();
  const links = data.map((link, index) => {
    const props = link.type === 'gatsby' ? { to: link.link } : { href: link.link };
    return (
      <Text<any> 
        className={classes.link}
        component={link.type === 'gatsby' ? 'a' : 'a'}
        {...props}
        key={index}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {link.icon && (
          <span className={classes.icon} style={{marginTop:'0.5em'}}>
            {link.icon}
          </span>
        )}
        <span className={classes.label}>{link.label}</span>
      </Text>
    );
  });

  return (
    <div className={classes.wrapper}>
      <Text className={classes.title}>{title}</Text>
      {links}
    </div>
  );
}

export const FOOTER_LINKS_DATA: LinksGroupProps[] = [
  {
    title: 'Hubungi Kami',
    data: [
      { type: 'link', label: 'pemira@stis.ac.id', link: 'pemira@stis.ac.id', icon: <IconMail/> },
      { type: 'link', label: 'pemirastis', link: 'https://www.instagram.com/pemirastis/', icon: <IconBrandInstagram /> },
      { type: 'link', label: 'pemirastis', link: 'https://twitter.com/pemirastis/', icon: <IconBrandTwitter /> },
      { type: 'link', label: 'Pemilihan DPM dan SEMA STIS', link: 'https://web.facebook.com/Pemilihan-DPM-DAN-SEMA-STIS-300299396750251/?_rdc=1&_rdr', icon: <IconBrandFacebook /> },
    ],
  },
];

// Usage:
console.log(FOOTER_LINKS_DATA);
