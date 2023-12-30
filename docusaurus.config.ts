import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hadronous Labs',
  tagline: 'Building decentralized software for the future',
  favicon: 'img/favicon.ico',
  url: 'https://hadronous.github.io',
  baseUrl: '/',
  organizationName: 'hadronous',
  projectName: 'hadronous.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Hadronous Labs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'candidSidebar',
          position: 'left',
          label: 'Candid',
        },
        {
          type: 'docSidebar',
          sidebarId: 'rustSidebar',
          position: 'left',
          label: 'Rust',
        },
        {
          href: 'https://github.com/hadronous/hadronous.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Hadronous Labs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
