import { Metadata } from "next";
import { SidebarNav } from "@/components/ui/sidebar-nav";
import { Separator } from "@/components/ui/separator";
import { settingsSidebarNavItems } from "@/utils/constants";

export const metadata: Metadata = {
	title: "Forms",
	description: "Advanced form example using react-hook-form and Zod.",
};

interface SettingsLayoutProps {
	children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
	return (
		<>
			<div className="pb-5 lg:pb-12">
				<h1>Account</h1>
			</div>
			<Separator />
			<div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-6">
				<aside className="lg:w-1/5">
					<SidebarNav items={settingsSidebarNavItems} />
				</aside>
				<div className="flex-1 lg:max-w-2xl space-y-6">{children}</div>
			</div>
		</>
	);
}
