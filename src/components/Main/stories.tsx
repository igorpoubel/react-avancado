import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const Test: Story = (args) => <Main {...args} />
Test.args = {
  title: 'title default 2',
  description: 'description default 2'
}
