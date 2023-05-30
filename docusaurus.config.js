// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */

/*
 * The following is a workaround when importing some pure ESM packages
 * (e.g. remark-directive) in the Docusaurus config, which is CommonJS.
 * More info can be found in:
 *
 * https://github.com/facebook/docusaurus/issues/6520
 * https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
 *
 */
const createConfig = async () => {
  const { xefDark: darkCodeTheme } = await import('./src/utils/xefDark.mjs');

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'xef.ai',
    tagline: 'AI',
    favicon: '/img/xef-brand-icon.svg',
    url: 'https://xef.ai',
    baseUrl: '/',
    trailingSlash: true,
    organizationName: 'xebia-functional', // Usually your GitHub org/user name.
    projectName: 'xef-website', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

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
            path: 'content/docs',
            routeBasePath: '/',
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl:
              'https://github.com/xebia-functional/xef-website/edit/main/',
            breadcrumbs: false,
          },
          pages: {
            path: 'src/pages',
          },
          blog: {
            path: 'content/blog',
            routeBasePath: 'community/blog',
            showReadingTime: true,
            blogSidebarCount: 0,
            blogListComponent: '@site/src/components/Blog/BlogListPage',
            blogTagsPostsComponent:
              '@site/src/components/Blog/BlogTagsPostsPage',
            postsPerPage: 8,
            editUrl:
              'https://github.com/xebia-functional/xef-website/edit/main/',
          },
          theme: {
            customCss: [
              require.resolve('./src/css/typography.css'),
              require.resolve('./src/css/vars.css'),
              require.resolve('./src/css/custom.css'),
            ],
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: '/img/social-card.jpg',
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        docs: {
          sidebar: {
            autoCollapseCategories: true,
          },
        },
        navbar: {
          logo: {
            alt: 'xef Logo',
            src: '/img/xef-brand.svg',
          },
          items: [
            {
              label: 'Home',
              to: '/',
              position: 'right',
              activeBaseRegex: '^/+$',
            },
            {
              type: 'dropdown',
              label: 'Learn',
              to: '/learn/overview',
              position: 'right',
              items: [
                {
                  label: 'Overview',
                  to: '/learn/overview',
                },
                {
                  label: 'Quickstart',
                  to: '/learn/quickstart',
                  activeBaseRegex: '^(/learn/quickstart)',
                },
                {
                  label: 'Typed errors',
                  to: '/learn/typed-errors',
                  activeBaseRegex: '^(/learn/typed-errors)',
                },
              ],
            },
            {
              label: 'Libraries',
              to: '/libraries',
              position: 'right',
            },
            {
              label: 'Training',
              to: '/training',
              position: 'right',
            },
            {
              type: 'dropdown',
              label: 'Community',
              position: 'right',
              items: [
                {
                  label: 'Blog',
                  to: '/community/blog',
                  activeBaseRegex: '^(/community/blog)',
                },
                {
                  label: 'Events',
                  to: '/community/events',
                  activeBaseRegex: '^(/community/events)',
                },
                {
                  label: 'Support',
                  to: '/community/support',
                  activeBaseRegex: '^(/community/support)',
                },
              ],
            },
          ],
        },
        footer: {
          links: [
            {
              title: 'Menu',
              items: [
                {
                  label: 'Libraries',
                  to: '/libraries',
                },
                {
                  label: 'Training',
                  to: '/training',
                },
              ],
            },
            {
              title: 'Learn',
              items: [
                {
                  label: 'Overview',
                  to: '/learn/overview',
                },
                {
                  label: 'Quickstart',
                  to: '/learn/quickstart',
                },
                {
                  label: 'Typed errors',
                  to: '/learn/typed-errors',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Blog',
                  to: '/community/blog',
                },
                {
                  label: 'Events',
                  to: '/community/events',
                },
                {
                  label: 'Support',
                  to: '/community/support',
                },
              ],
            },
            {
              title: 'Links',
              items: [
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/xebiafunctional',
                  icon: '/img/icon-social-twitter.svg',
                },
                {
                  label: 'Slack',
                  href: 'https://slack-chats.kotlinlang.org/c/arrow',
                  icon: '/img/icon-social-slack.svg',
                },
                {
                  label: 'YouTube',
                  href: 'https://www.youtube.com/@xebiafunctional',
                  icon: '/img/icon-social-youtube.svg',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/xebia-functional',
                  icon: '/img/icon-social-github.svg',
                },
                {
                  label: 'Stack Overflow',
                  href: 'https://stackoverflow.com/questions/tagged/xef',
                  icon: '/img/icon-social-stackoverflow.svg',
                },
              ],
            },
          ],
          logo: {
            alt: 'xef Logo',
            src: '/img/xef-brand.svg',
            href: 'https://xef.ai',
            width: 128,
            height: 42,
          },
          copyright: `xef is designed and developed by xef with support from <a href="https://47deg.com" target="_blank" rel="noopener noreferrer">Xebia Functional</a>`,
        },
        prism: {
          theme: darkCodeTheme,
          additionalLanguages: [
            'kotlin',
            'java',
            'groovy',
            'scala',
            'haskell',
            'rust',
          ],
          defaultLanguage: 'kotlin',
        },
        mermaid: {
          theme: {
            light: 'base',
            dark: 'base',
          },
          options: {
            themeVariables: {
              fontFamily:
                "'Inter', open sans, sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              fontSize: '14px',
              primaryColor: '#006ba8',
              primaryTextColor: '#fff',
              secondaryColor: '#01a3ff',
              lineColor: '#01c9bd',
            },
          },
        },
      }),

    plugins: [
      () => ({
        name: 'yaml-loader-plugin',
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.ya?ml$/,
                  use: 'yaml-loader',
                },
              ],
            },
          };
        },
      }),
      () => ({
        name: 'docusaurus-custom-media',
        configurePostCss(postcssOptions) {
          // Appends Global Data, Custom Media and AutoPrefixer.
          postcssOptions.plugins.push(
            // @ts-ignore
            require('@csstools/postcss-global-data')({
              files: ['./src/css/vars.css'],
            }),
          );
          postcssOptions.plugins.push(require('postcss-custom-media'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      }),
    ],
    markdown: {
      mermaid: true,
    },
    themes: [
      '@docusaurus/theme-mermaid',
      [
        // https://github.com/easyops-cn/docusaurus-search-local
        require.resolve('@easyops-cn/docusaurus-search-local'),
        {
          docsRouteBasePath: '/',
          docsDir: 'content/docs',
          hashed: true,
          indexBlog: false,
          highlightSearchTermsOnTargetPage: false,
          searchResultLimits: 8,
          searchBarShortcutHint: false,
          searchContextByPaths: ['learn', 'ecosystem'],
          useAllContextsWithNoSearchContext: true,
        },
      ],
    ],
  };

  return config;
};

module.exports = createConfig;