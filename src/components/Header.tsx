"use client";

import Link from "next/link";
import { ThemeSwitch } from "./Switch";

const Header = () => {
	return (
		<nav className="flex w-full items-center justify-between ">
			<div className="z-40 flex w-full flex-col xl:gap-8 md:gap-4 md:flex-row">
				<Link
					className="text-xl font-bold"
					href="/"
				>
					xoboid
				</Link>
				<div className="flex gap-2 items-center text-lg">
					<Link href="/projects">works</Link>
					<Link href="/posts">blog</Link>
					<Link href="/stack">stack</Link>
					<Link href="/chat">chat</Link>
				</div>
			</div>
			<ThemeSwitch />
		</nav>
	);
};
("");
export default Header;
