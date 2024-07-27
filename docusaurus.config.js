const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const userWidgetInlinePlugin = require('./src/plugins/userWidgetInlinePlugin');
const inviteWidgetPlugin = require('./src/plugins/inviteWidgetPlugin');
const linebreakPlugins = require('./src/plugins/linebreakPlugin');
const blogAuthorWidgetPlugin = require('./src/plugins/blogAuthorWidgetPlugin');

const config = {
	title: 'Mine Count',
	tagline:
		'Офіційний сайт Minecraft сервера Mine Count.',
	url: 'https://mcount.fun',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',
	organizationName: 'White-Heart-Dev',
	projectName: 'Mine-Count-Site',

	i18n: {
		defaultLocale: "uk",
		locales: ["uk"]
	  },

	presets: [
		[
			'@docusaurus/preset-classic',
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/liubquanti-dev/Mine-Count-Site/edit/main/',
					path: 'wiki',
					routeBasePath: '/',
					remarkPlugins: [linebreakPlugins, inviteWidgetPlugin, userWidgetInlinePlugin],
				},
				blog: {
					path: 'blog',
					routeBasePath: '/blog/',
					showReadingTime: true,
					remarkPlugins: [
						linebreakPlugins,
						inviteWidgetPlugin,
						blogAuthorWidgetPlugin,
						userWidgetInlinePlugin,
					],
				},
				theme: {
					customCss: [
						require.resolve('inter-ui/inter.css'),
						require.resolve('./src/css/custom.css'),
					],
				},
			}),
		],
	],

	themeConfig:
		({
			metadata: [
				{
					name: 'og:image',
					content: 'https://mcount.fun/img/logo-background.png',
				},
				{
					name: 'theme-color',
					content: '#e24040',
				},
				{
					name: 'twitter:card',
					content: 'summary',
				},
			],
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
			navbar: {
				title: 'Mine Count',
				logo: {
					alt: 'Логотип Mine Count',
					src: 'img/logo-small.png',
					href: '/',
				},
				items: [
					{
						to: '/',
						label: 'Вікі',
						position: 'left',
					},
					{
						to: 'blog',
						label: 'Блог',
						position: 'left',
					},
					{
						href: 'https://github.com/liubquanti-dev/Mine-Count-Site',
						className: 'navbar-item-github',
						position: 'right',
					},
					{
						href: 'https://discord.gg/TYs8FjvzFf',
						className: 'navbar-item-discord',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					}
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			algolia: {
				appId: 'KO08RT1BUB',

				apiKey: '90b11a8ac9c24d6fc6aa7aa88c159215',

				indexName: 'discordresources',
			},
		}),
};

module.exports = config;