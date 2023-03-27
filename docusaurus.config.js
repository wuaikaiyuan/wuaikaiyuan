// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '吾爱开源',
  tagline: '吾爱开源：一个提高效率、提供生产工具的神奇网站',
  url: 'https://www.wuaikaiyuan.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thinkingjimmy',
  projectName: '效率助手',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
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

  plugins: [
    tailwindPlugin,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title:'吾爱开源',
        logo: {
          alt: '吾爱开源 logo',
          src: 'img/logo.svg',
        },
        items: [
          // todo: multiple version config
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownActiveClassDisabled: true,
          // },
          {
            type: 'doc',
            docId: '👋 Welcome',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/thinkingjimmy/Learning-Prompt',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust']
      },
    }),
};

module.exports = config;
