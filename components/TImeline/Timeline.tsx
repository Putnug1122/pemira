import { Tabs, TabsProps, rem, Timeline, Text } from '@mantine/core';
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from '@tabler/icons-react';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
          }`,
          padding: `${theme.spacing.xs} ${theme.spacing.md}`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          display: 'flex',
          alignItems: 'center',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },

          '&[data-active]': {
            backgroundColor: theme.colors.blue[7],
            borderColor: theme.colors.blue[7],
            color: theme.white,
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
          display: 'flex',
        },
      })}
      {...props}
    />
  );
}

export function TimelineSection() {
  return (
    <StyledTabs>
      <Tabs.List>
        <Tabs.Tab value="settings" icon={<IconSettings size="1rem" />}>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size="1rem" />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="gallery" icon={<IconPhoto size="1rem" />}>
          Gallery
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="settings" pt="xs">
        <Timeline active={1} bulletSize={24} lineWidth={2}>
          <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
            <Text color="dimmed" size="sm">
              You&apos;ve created new branch{' '}
              <Text variant="link" component="span" inherit>
                fix-notifications
              </Text>{' '}
              from master
            </Text>
            <Text size="xs" mt={4}>
              2 hours ago
            </Text>
          </Timeline.Item>

          <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
            <Text color="dimmed" size="sm">
              You&apos;ve pushed 23 commits to
              <Text variant="link" component="span" inherit>
                fix-notifications branch
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              52 minutes ago
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Pull request"
            bullet={<IconGitPullRequest size={12} />}
            lineVariant="dashed"
          >
            <Text color="dimmed" size="sm">
              You&apos;ve submitted a pull request
              <Text variant="link" component="span" inherit>
                Fix incorrect notification message (#187)
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              34 minutes ago
            </Text>
          </Timeline.Item>

          <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
            <Text color="dimmed" size="sm">
              <Text variant="link" component="span" inherit>
                Robert Gluesticker
              </Text>{' '}
              left a code review on your pull request
            </Text>
            <Text size="xs" mt={4}>
              12 minutes ago
            </Text>
          </Timeline.Item>
        </Timeline>
      </Tabs.Panel>
    </StyledTabs>
  );
}
