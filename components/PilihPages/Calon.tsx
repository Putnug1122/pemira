import {
  Card,
  Text,
  Group,
  createStyles,
  getStylesRef,
  rem,
  Modal,
  Title,
  List,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    height: rem(400),
    width: rem(300),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)',
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    transition: 'transform 500ms ease',
  },

  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[2],
  },
}));

interface ImageCardProps {
  image: string;
  title: string;
  author: string;
}

export function Calon({
  image = 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  title = 'Anugerah Surya Permana',
  author = 'Wakil Ketua',
}: ImageCardProps) {
  const { classes, theme } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Card p="lg" shadow="lg" className={classes.card} radius="md" onClick={open}>
        <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
        <div className={classes.overlay} />

        <div className={classes.content}>
          <div>
            <Text size="lg" className={classes.title} weight={500}>
              {title}
            </Text>

            <Group position="apart" spacing="xs">
              <Text size="sm" className={classes.author}>
                {author}
              </Text>
            </Group>
          </div>
        </div>
      </Card>
      <Modal
        opened={opened}
        onClose={close}
        title={title}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        size="auto"
      >
        <Title order={5}>Pengalaman Organisasi</Title>
        <List type="ordered">
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Install dependencies with yarn</List.Item>
          <List.Item>To start development server run npm start command</List.Item>
          <List.Item>Run tests to make sure your changes do not break the build</List.Item>
          <List.Item>Submit a pull request once you are done</List.Item>
        </List>

        <Title order={5} mt={20}>
          Prestasi
        </Title>
        <List type="ordered">
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Install dependencies with yarn</List.Item>
          <List.Item>To start development server run npm start command</List.Item>
          <List.Item>Run tests to make sure your changes do not break the build</List.Item>
          <List.Item>Submit a pull request once you are done</List.Item>
        </List>
      </Modal>
    </>
  );
}
