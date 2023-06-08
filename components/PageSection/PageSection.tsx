import React from 'react';
import { Container, Text, DefaultProps, Box, Center } from '@mantine/core';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import useStyles from './PageSection.styles';

interface PageSectionProps extends DefaultProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  white?: boolean;
  centerTitle?: boolean;
}

export function PageSection({
  title,
  description,
  children,
  white,
  centerTitle,
  ...others
}: PageSectionProps) {
  const { classes } = useStyles({ white: true });

  return (
    <Box className={classes.wrapper} {...others}>
      <Container size={1100}>
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
