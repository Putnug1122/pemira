import { createStyles, Card, Image, Group, Text, Badge, Stack } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface ArticleCardFooterProps {
  image: string;
  tags: string[];
  title: string;
  date: string;
}

export function ArticleCardFooter({ image, tags, title, date }: ArticleCardFooterProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      {tags.map((tag) => (
        <Badge>{tag}</Badge>
      ))}

      <Stack justify="space-between">
        <Text fw={700} className={classes.title} mt="xs">
          {title.length > 50 ? title.substring(0, 50) + '...' : title}
        </Text>

        <Group mt="lg">
          <IconEdit size="1.2rem" color={theme.colors.blue[6]} stroke={1.5} />
          <div>
            <Text fw={500}>HPD</Text>
            <Text fz="xs" c="dimmed">
              {date}
            </Text>
          </div>
        </Group>
      </Stack>
    </Card>
  );
}
