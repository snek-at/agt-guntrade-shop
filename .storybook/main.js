const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@snek-at/storybook-addon-chakra-ui',
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  webpackFinal: config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    config.module.rules[0].exclude = [/core-js/]

    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook

    config.resolve.mainFields = ['browser', 'module', 'main']

    console.log(path.resolve(__dirname, '../node_modules/@jaenjs/jaen/src'))

    config.resolve.alias = {
      ...config.resolve.alias,
      '@jaen': path.resolve(__dirname, '../node_modules/@jaenjs/jaen/src'),
      '@jaen-admin': path.resolve(
        __dirname,
        '../node_modules/@jaenjs/jaen/src/internal-plugins/admin'
      ),
      '@jaen-pages': path.resolve(
        __dirname,
        '../node_modules/@jaenjs/jaen/src/internal-plugins/pages'
      ),
      '@jaen-notify': path.resolve(
        __dirname,
        '../node_modules/@jaenjs/jaen/src/internal-plugins/notify'
      )
    }

    return config
  },
  framework: '@storybook/react',
  core: {builder: 'webpack5'}
}
