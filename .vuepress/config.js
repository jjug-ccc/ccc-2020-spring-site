module.exports = {
	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/assets/img/favicon.ico' }]
	],
	themeConfig: {
		logo: '/assets/img/jjug_logo.png',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'セッション一覧', link: '/sessions/' },
			{ text: 'タイムテーブル', link: '/timetable/' }
		],
		search: false,
		searchMaxSuggestions: 10
	}
};
