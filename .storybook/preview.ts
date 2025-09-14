import type { Preview } from '@storybook/react-vite';
import '../src/index.css'; // 導入 Tailwind CSS

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: false,
    },
    options: {
      storySort: {
        order: [
          'Get Started',
          'Foundation',
          'Layout',
          'Form',
          'Data Display',
          'Navigation',
          'Feedback',
        ],
        method: 'alphabetical',
      },
    },
    viewMode: 'docs',
    navigation: {
      disable: false,
    },
  },
};

export default preview;
