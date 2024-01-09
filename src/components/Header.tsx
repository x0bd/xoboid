"use client";

import Link from "next/link";
import { ThemeSwitch } from "./Switch";

const Header = () => {
	return (
		<nav className="flex w-full items-center justify-between ">
			<div className="flex gap-12 items-center">
				<Link
					className="text-xl font-bold"
					href="/"
				>
					xoboid
				</Link>
				<div className="flex gap-3 items-center text-lg">
					<Link href="/projects">works</Link>
					<Link href="/posts">blog</Link>
					<Link href="/">resume</Link>
				</div>
			</div>
			<ThemeSwitch />
		</nav>
	);
};

export default Header;
