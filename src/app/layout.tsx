import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/utils/theme-provider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "xoboid",
	description: "decoding signals from the void",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 px-10 py-5 text-base md:gap-20 md:py-12 ">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
				>
					<Header />
					<div className={inter.className}>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
