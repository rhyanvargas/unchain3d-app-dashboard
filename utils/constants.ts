export const navBarHeight = "65px";
export const routes = {
	home: "/",
	account: {
		home: "/account", // for profile settings
	},
	dashboard: {
		home: "/dashboard",
	},
	profile: {
		home: "/profile",
	},
	login: "/login",
	logout: "/logout",
};
export const settingsSidebarNavItems = [
	{
		title: "General",
		href: routes.account.home,
	},
	// {
	// 	title: "Account",
	// 	href: routes.dashboard.settings.account,
	// },
	// {
	// 	title: "Appearance",
	// 	href: "/examples/forms/appearance",
	// },
	// {
	// 	title: "Notifications",
	// 	href: "/examples/forms/notifications",
	// },
	// {
	// 	title: "Display",
	// 	href: "/examples/forms/display",
	// },
];
const routesWithLogoOnly = [routes.login, routes.logout];
