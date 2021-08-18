import { addDecorator } from '@storybook/react'
import WithGlobalStyles from './withGlobalStyles'

addDecorator(WithGlobalStyles)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
