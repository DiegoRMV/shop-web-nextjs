import { Footer, Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="min-h-screen flex flex-col">
			<TopMenu />
			<Sidebar />
			<div className="px-0 sm:px-10 grow">{children}</div>
			<Footer />
		</main>
	);
}
