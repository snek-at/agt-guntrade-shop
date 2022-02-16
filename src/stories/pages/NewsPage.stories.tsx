import {Story, Meta} from '@storybook/react'

import NewsPage from '../../templates/NewsPage'

export default {
  title: 'Pages/NewsPage',
  component: NewsPage
} as Meta

type Props = React.ComponentType<typeof NewsPage>

const Template: Story<Props> = args => <NewsPage {...args} />

export const Page = Template.bind({})
Page.args = {}
