import GlobalStyle from '../src/styles/global'
import { StoryFn } from '@storybook/addons'

const WithGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
)

export default WithGlobalStyles
