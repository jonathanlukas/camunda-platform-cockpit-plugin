export default [
	{
		id: "cockpit-navigation-plugin",
		pluginPoint: "cockpit.navigation",
		priority: 5,
		properties: {
			path: "https://www.google.de"
		},
		render: container => {
			container.innerHTML = '<a href="https://www.google.de">Go to google</a>'
		}
	}
]