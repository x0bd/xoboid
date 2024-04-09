import { type Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";

import { Providers } from "@/app/providers";

import "@/styles/tailwind.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const monaSans = localFont({
	src: "../fonts/Mona-Sans.var.woff2",
	display: "swap",
	variable: "--font-mona-sans",
	weight: "200 900",
});

export const metadata: Metadata = {
	title: "xoboid",
	description: "i own a computer",
	alternates: {
		types: {
			"application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={clsx(
				"h-full antialiased",
				inter.variable,
				monaSans.variable
			)}
			suppressHydrationWarning
		>
			<body className="flex min-h-full flex-col bg-zinc-200 dark:bg-zinc-950">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
