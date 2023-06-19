import React from 'react';
import { Container, Text, DefaultProps, Box, Center } from '@mantine/core';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import useStyles from './Pages.styles';

interface PagesProps extends DefaultProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  white?: boolean;
  centerTitle?: boolean;
}

export function Pages({
  title,
  description,
  children,
  white,
  centerTitle,
  ...others
}: PagesProps) {
  const { classes } = useStyles({ white: true });

  return (
    <Box className={classes.wrapper} {...others}>
      <Container size={'xl'}>
        {centerTitle ? (
          <Center>
            <SectionTitle type={white ? 'white' : 'default'}>{title}</SectionTitle>
          </Center>
        ) : (
          <SectionTitle type={white ? 'white' : 'default'}>{title}</SectionTitle>
        )}
        {description && (
          <Text className={classes.description} size="xl">
            {description}
          </Text>
        )}
        
        {children}
      </Container>
    </Box>
  );
}
