module.exports = {
	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/assets/img/favicon.ico' }]
	],
	themeConfig: {
		logo: '/assets/img/jjug_logo.png',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'スポンサー', link: '/sponsors/' },
			{ text: 'セッション一覧', link: 'https://jjug-cfp.cfapps.io/conferences/4abde357-9994-4578-b760-a1698ff6f338' },
		],
		search: false,
		searchMaxSuggestions: 10
	}
};
