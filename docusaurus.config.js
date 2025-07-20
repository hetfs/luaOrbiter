// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lua Orbiter',
  tagline: 'Let’s code Lua!',
  favicon: 'img/favicon.ico',

  url: 'https://hetfs.github.io/',
  baseUrl: '/luaOrbiter/',

  organizationName: 'hetfs',
  projectName: 'luaOrbiter',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/hetfs/luaOrbiter',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/hetfs/luaOrbiter',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      navbar: {
        title: 'luaOrbiter',
        logo: {
          alt: 'HETFS LTD Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/hetfs/luaOrbiter',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
              label: 'Facebook',
                href: 'https://m.facebook.com/profile.php?id=100090714730738',
              },
              {
                label: 'X',
                href: 'https://x.com/hetf01',
              },
              {
                label: 'Buy Me A Coffee',
                href: 'https://www.buymeacoffee.com/hetfs01f',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hetfs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HEFTS LTD.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'powershell',
          'python',
          'bash',
          'cmake',
          'c',
          'cpp',
          'yaml',
          'toml',
          'ini',
          'lua',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {
              start: 'highlight-start',
              end: 'highlight-end',
            },
          },
        ],
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      mermaid: {
        theme: {
          light: 'neutral',
          dark: 'forest',
        },
      },
    }),
};

export default config;
