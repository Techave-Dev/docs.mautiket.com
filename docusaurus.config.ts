import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MauTiket Docs',
  tagline: 'Dokumentasi lengkap platform MauTiket',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.mautiket.com',
  baseUrl: '/',

  organizationName: 'techave-dev',
  projectName: 'docs.mautiket.com',

  onBrokenLinks: 'throw',

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
          editUrl:
            'https://github.com/techave-dev/docs.mautiket.com/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MauTiket',
      logo: {
        alt: 'MauTiket Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Panduan',
        },
        {
          href: 'https://github.com/techave-dev/docs.mautiket.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tentang MAUTIKET',
          items: [
            {
              label: 'Tentang Kami',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Dukungan',
          items: [
            {
              label: 'Kebijakan Privasi',
              to: '/docs/intro',
            },
            {
              label: 'Syarat & Ketentuan',
              to: '/docs/intro',
            },
            {
              label: 'FAQ',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Penyelenggara',
          items: [
            {
              label: 'Karir',
              href: '#',
            },
            {
              label: 'Kerjasama',
              href: '#',
            },
            {
              label: 'Development Website',
              href: '#',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/mautiket',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/mautiket',
            },
            {
              label: 'TikTok',
              href: 'https://tiktok.com/@mautiket',
            },
            {
              label: 'X',
              href: 'https://x.com/mautiket',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MAUTIKET. All rights reserved. Powered by Techave.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
