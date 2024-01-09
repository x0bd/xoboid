import Link from "next/link";
import { ModeToggle } from "./Toggle";

const Header = () => {
	return (
		<header className="z-40 flex w-full items-center justify-center flex-col gap-2 md:flex-row md:justify-between">
			<nav
				className="flex gap-10 items-center"
				role="navigation"
			>
				<Link
					className="text-xl font-bold"
					href="/"
				>
					xoboid
				</Link>
				<div className="flex gap-1">
					<Link href="/projects">works</Link>
					<Link href="/posts">blog</Link>
					<Link href="/">resume</Link>
				</div>
			</nav>
			<ModeToggle />
		</header>
	);
};

export default Header;
