import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "GxShop",
	description: "Tienda de compras online",
	icons: {
		icon: ["/favicon.ico"],
		apple: ["/app/logo-192.png?v=4"],
		shortcut: ["/logo-192.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} 2xl:container mx-auto dark:bg-gradient-to-b from-[#1b1b1b] to-[#0b0b0b] dark:text-[#e0e0e0]`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
