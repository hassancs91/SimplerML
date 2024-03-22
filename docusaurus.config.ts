import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import tailwindPlugin from './plugins/tailwind-plugin.cjs'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const config: Config = {
  title: 'SimplerML',
  tagline: 'Learn Machine Learning in a simpler way',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://simplerml.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hassancs91', // Usually your GitHub org/user name.
  projectName: 'SimplerML', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [tailwindPlugin],

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-D2984JWBMH',
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/hassancs91/SimplerML/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/hassancs91/SimplerML/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
    },
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: '/',
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
         language: ["en"],
         docsDir: "docs",
         highlightSearchTermsOnTargetPage: false,
        // ```
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SimplerML',
      logo: {
        alt: 'SimplerML Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: 'https://patreon.com/heducate', label: ' 🤝 Donate', position: 'right' },

        { to: 'https://discord.gg/JExyDxZ5wf', label: ' 💬 Discord', position: 'right' },
        
        { to: 'https://github.com/hassancs91/SimplerML', label: ' 💻 Github', position: 'right' },
        
        {
          type: 'dropdown',
          label: 'More',
          position: 'right',
          items: [
            {
              label: 'SimplerLLM',
              href: 'https://github.com/hassancs91/SimplerLLM',
            },
            {
              label: 'Author\'s Website',
              href: 'https://learnwithhasan.com/',
            },
            
            
            // ... more items
          ],
        },
      
      ],
    },

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SimplerML `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}




export default config
