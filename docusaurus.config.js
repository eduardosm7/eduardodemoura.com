// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eduardo de Moura',
  tagline: 'Simply abstract',
  url: 'https://github.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eduardosm7', // Usually your GitHub org/user name.
  projectName: 'eduardodemoura.com', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'announcementBar-1', // Increment on change
        content: `This website is being built...`,
      },
      navbar: {
        title: 'Eduardo de Moura',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'About',
          },
          {
            type: 'doc',
            docId: 'curriculum-vitae',
            position: 'left',
            label: 'Curriculum Vitae',
          },
          {
            type: 'doc',
            docId: 'world-view',
            position: 'left',
            label: 'World View',
          },
          {
            type: 'doc',
            docId: 'interests',
            position: 'left',
            label: 'Interests',
          },
          {
            type: 'doc',
            docId: 'goals',
            position: 'left',
            label: 'Goals',
          },
          {
            type: 'doc',
            docId: 'videos',
            position: 'left',
            label: 'Videos',
          },
          {
            type: 'doc',
            docId: 'readings',
            position: 'left',
            label: 'Readings',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About',
                to: '/docs/about',
              },
              {
                label: 'Curriculum Vitae',
                to: '/docs/curriculum-vitae',
              },
              {
                label: 'World View',
                to: '/docs/world-view',
              },
              {
                label: 'Interests',
                to: '/docs/interests',
              },
              {
                label: 'Goals',
                to: '/docs/goals',
              },
              {
                label: 'Videos',
                to: '/docs/videos',
              },
              {
                label: 'Readings',
                to: '/docs/readings',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/eduardodemoura/',
              },
              {
                label: 'Github',
                href: 'https://github.com/eduardosm7',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/eduardo.nothing/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DuNetuno',
              },
              {
                label: 'Spotify',
                href: 'https://open.spotify.com/user/udedu?si=17c7848874b64b78',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eduardo de Moura`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
