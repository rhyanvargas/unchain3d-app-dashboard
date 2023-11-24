export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	const mainStyles = `container pt-5 lg:pt-12`;
	return <section className={mainStyles}>{children}</section>;
}
