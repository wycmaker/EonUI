import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const basePath = process.env.NODE_ENV === 'production' ? '/EonUI/' : '/';
const logoPath = `${basePath}Logo.svg`;

const myTheme = create({
  base: 'light',
  brandTitle: 'EonUI - React UI Component Library',
  brandUrl: 'https://wycmaker.github.io/EonUI',
  brandImage: logoPath,
  brandTarget: '_self',
});

addons.setConfig({
  theme: myTheme,
});
