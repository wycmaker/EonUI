const config = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)', '../src/components/**/*.mdx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-onboarding'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
