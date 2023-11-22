import { Metadata } from "next";
import { SidebarNav } from "@/components/ui/sidebar-nav";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
	title: "Forms",
	description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
	{
		title: "Profile",
		href: "/profile",
	},
	{
		title: "Account",
		href: "/profile/account",
	},
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

interface SettingsLayoutProps {
	children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
	return (
		<>
			<div className="container">
				<div className="py-5 lg:py-10">
					<h1>Settings</h1>
				</div>
				<Separator />
				<div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-6">
					<aside className="lg:w-1/5">
						<SidebarNav items={sidebarNavItems} />
					</aside>
					<div className="flex-1 lg:max-w-2xl space-y-6">{children}</div>
				</div>
			</div>
		</>
	);
}
