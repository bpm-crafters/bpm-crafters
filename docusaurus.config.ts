import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'BPM Manifesto',
    tagline: "Welcome to the BPM Manifesto, a collaborative effort crafted by the BPM Crafters community. We are a group " +
        "of professionals and enthusiasts united by a common passion for excellence in business process management and automation. " +
        "Our manifesto embodies the principles, insights, and best practices that define the highest standards in process " +
        "automation projects.",
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/website/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'bpm-crafters', // Usually your GitHub org/user name.
    projectName: 'bpm-crafters', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
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
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'BPM Crafters',
            logo: {
                alt: 'BPM Crafters Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: "doc",
                    position: "left",
                    docId: 'faq',
                    label: "FAQ"
                },
                {
                    type: "doc",
                    position: "left",
                    docId: 'contributing',
                    label: "Contribute"
                },
                {
                    href: 'https://github.com/bpm-crafters',
                    position: 'right',
                    className: "header-github-link",
                    "aria-label": "GitHub repository",
                },
            ],
        },
        announcementBar: {
            id: 'draft-alert',
            content:
                '<b> The Manifesto is still in a Draft Version.</b>',
            backgroundColor: '#d11414',
            textColor: '#fff',

            isCloseable: false,
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/bpm-crafters',
                        },
                    ],
                },
                {
                    title: 'Legal',
                    items: [
                        {
                            label: 'Imprint',
                            href: 'https://miragon.io/impressum'
                        }, {
                            label: 'Privacy',
                            href: 'https://miragon.io/datenschutz'
                        },
                    ],
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Miragon`,
        },
        prism: {
            theme: prismThemes.github,
        },
        colorMode: {
            disableSwitch: true,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
