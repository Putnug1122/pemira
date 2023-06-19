import React from 'react';
import { Container, Text, Group, Image, useMantineTheme } from '@mantine/core';
import { LinksGroup, FOOTER_LINKS_DATA } from './LinksGroup/LinksGroup';
import useStyles from './Footer.styles';

interface FooterProps {
  withNavbar?: boolean;
}

export function Footer({ withNavbar }: FooterProps) {
  const { classes, cx } = useStyles();
  const groups = FOOTER_LINKS_DATA.map((group) => (
    <LinksGroup data={group.data} title={group.title} key={group.title} />
  ));
  const theme = useMantineTheme();

  return (
    <>
      <div className={classes.spacer} />
      <div className={cx(classes.wrapper, { [classes.withNavbar]: withNavbar })}>
        <Container size={1100}>
          <div className={classes.inner}>

            <div style={{ display:'flex', alignItems:'center'}}>
              <div className={classes.logoSection}>
                {/* <Logo /> */}
                {theme.colorScheme === 'dark' ? (
              <div style={{ display: 'inline-block', backgroundColor: 'white', borderRadius: '50%', padding: '12px' }}>
                <Image src="https://pemira.stis.ac.id/assets/img/home/Logo_Papera.png" width="75px" height="75px" />
              </div>
                ) : (
                  <Image src="https://pemira.stis.ac.id/assets/img/home/Logo_Papera.png" width="75px" height="75px" />
                )}
              </div>
              <div style={{ flexGrow:1, maxWidth: '500px', marginLeft:'1em', marginBottom:'0.75em' }}>
                <Text className={classes.description} size="sm">
                  Panitia Pemilihan Raya (Papera) merupakan badan independen yang dibentuk oleh Dewan Perwakilan Mahasiswa (DPM) untuk menyelenggarakan Pemilihan Raya (Pemira) sesuai dengan AD/ART Imapolstat.
                </Text>
              </div>
            </div>

            <div className={classes.groups}>{groups}</div>
          </div>

          <div className={classes.afterFooter}>
            <Group position="center">
              <Text size="xs" className={classes.afterFooterNote}>
              Copyright © Kelompok 7 IMK 3SI3 
              </Text>
            </Group>
          </div>
        </Container>
      </div>
    </>
  );
}
