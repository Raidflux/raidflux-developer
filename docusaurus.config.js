const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Raidflux',
  tagline: 'Raidflux documentation',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'raidflux', // Usually your GitHub org/user name.
  projectName: 'raidflux', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Raidflux',
      logo: {
        alt: 'Raidflux Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://console.raidflux.com',
          label: 'Login',
          position: 'right',
        },
        {
          href: 'https://raidflux.com',
          label: 'Landing page',
          position: 'right',
        },
        {
          href: 'https://github.com/Raidflux',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/raidflux/',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/JwJ3wpbHU2',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/raidflux',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Raidflux',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Raidflux`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages:['csharp'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '🌞',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Raidflux/raidflux-developer/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],
};
