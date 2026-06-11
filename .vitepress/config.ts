import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'BPM Manifesto',
  description:
    'Welcome to the BPM Manifesto, a collaborative effort by the BPM Crafters community.',
  lang: 'en-US',

  // Deployed at the apex domain https://bpm-crafters.dev (see public/CNAME)
  base: '/',

  // Output to ./build so the existing GitHub Pages release workflow keeps working.
  outDir: 'build',

  // Clean URLs: /docs/faq instead of /docs/faq.html
  cleanUrls: true,

  // Match the original site: light mode only, no theme toggle
  // (Docusaurus had colorMode.disableSwitch: true).
  appearance: false,

  // The repo root holds non-site markdown (README, CONTRIBUTING, ...). Keep
  // those out of the generated site.
  srcExclude: [
    'README.md',
    'CONTRIBUTING.md',
    'CODE_OF_CONDUCT.md',
    '.context/**',
    'node_modules/**'
  ],

  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0d47a1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'BPM Manifesto' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'A collaborative effort by the BPM Crafters community to build sustainable and future-proof BPM solutions.'
      }
    ],
    ['meta', { property: 'og:url', content: 'https://bpm-crafters.dev' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.png',
    siteTitle: 'BPM Crafters',

    nav: [
      { text: 'FAQ', link: '/docs/faq' },
      { text: 'Contribute', link: '/docs/contributing' },
      { text: 'Hall of Signatories', link: '/docs/hall-of-signatories' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'BPM Manifesto',
          items: [
            { text: 'FAQ', link: '/docs/faq' },
            { text: 'How To Contribute', link: '/docs/contributing' },
            {
              text: 'Hall of Signatories',
              link: '/docs/hall-of-signatories'
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bpm-crafters' }
    ],

    editLink: {
      pattern:
        'https://github.com/bpm-crafters/bpm-crafters/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    }
  }
})
