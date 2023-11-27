import NavBar from "@/components/shared/NavBar";
import "./globals.css";
import { Space_Grotesk, Archivo } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

// If loading a variable font, you don't need to specify the font weight
const heading = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-heading",
});
const body = Archivo({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-body",
	style: ["normal"],
});
const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Dashboard | UNCHAIN3D",
	description:
		"The most frictionless and fun way to bet on other online games.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const mainStyles = `min-h-screen w-full pt-[var(--nav-height)]`;
	return (
		<html lang="en" className={`${body.variable} ${heading.variable}`}>
			<body className="bg-background text-foreground">
				<NavBar />
				<main className={mainStyles}>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
