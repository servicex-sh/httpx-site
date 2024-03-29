// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'servicex',
    tagline: 'CLI and IDE plugin to test REST API, GraphQL, gRPC services with HTTP DSL',
    url: 'https://servicex.sh',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'httpx-sh', // Usually your GitHub org/user name.
    projectName: 'httpx', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                docs: {
                    sidebarCollapsed: true
                }
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'servicex',
                logo: {
                    alt: 'httpx Logo',
                    src: 'img/httpx-logo-small.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://plugins.jetbrains.com/plugin/18807-httpx-requests',
                        label: 'JetBrains Plugin',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/httpx-sh/httpx/releases',
                        label: 'CLI Download',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/httpx-sh/httpx',
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
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                            {
                                label: 'Cheat Sheet',
                                to: 'https://cheatography.com/linux-china/cheat-sheets/httpx/',
                            },
                            {
                                label: 'Httpx JetBrains plugin',
                                to: 'https://plugins.jetbrains.com/plugin/18807-httpx-requests',
                            },
                            {
                                label: 'Neovim plugin',
                                to: 'https://github.com/servicex-sh/httpx.vim',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/httpx',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/httpx',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/linux_china',
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
                            {
                                label: 'GitHub',
                                href: 'https://github.com/httpx-sh/httpx',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} httpx, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
