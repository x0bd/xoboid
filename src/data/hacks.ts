export type Hack = {
	title: string;
	href: string;
	description: string;
	date: string;
	stack: string[];
	links?: { name: string; href: string }[];
	image?: string;
	video?: string;
};

export const Hacks: Hack[] = [
	{
		title: "Glyph",
		href: "https://github.com/x0bd/glyph-ui",
		description:
			"Glyph is a modern JavaScript frontend framework that is heavily inspired by React, Svelte and Vue. I am building the framework to better understand how these engineering marvels work under the hood.",
		date: "07 Jul 2024",
		stack: ["JavaScript", "Rollup", "NPM Workspaces", "Vitest"],
		image: "/projects/tic-tac-toe.gif",
		links: [
			{
				name: "Source",
				href: "https://github.com/x0bd/glyph-ui",
			},
			{
				name: "Devlog",
				href: "/blog",
			},
		],
	},
	{
		title: "Snap.xo",
		href: "https://snap-xo.vercel.app/",
		description:
			"A simple web app to quickly create and share beautiful code snippets. It is a minimal version of the ray.so service.",
		date: "30 Apr 2024",
		stack: ["Next.js", "TailwindCSS", "TypeScript", "Vercel"],
		image: "/projects/snap2.jpeg",
		links: [
			{
				name: "Website",
				href: "https://snap-xo.vercel.app",
			},
			{ name: "Source", href: "https://github.com/x0bd/snap.xo" },
		],
	},
	{
		title: "Rascii",
		href: "/",
		description: "A Resource Efficient Terminal Ascii Art Generator",
		date: "10 Feb 2024",
		stack: ["Rust"],
		image: "./projects/rascii.png",
		links: [
			{
				name: "Blog",
				href: "/blog/terminal-art",
			},
			{
				name: "Source",
				href: "/",
			},
		],
	},
	{
		title: "Unknown Pleasures",
		href: "/",
		description:
			"A generative sketch of the iconic Joy Division album cover",
		date: "21 Jan 2024",
		stack: ["P5.js", "JavaScript"],
		links: [
			{
				name: "Github",
				href: "/",
			},
			{
				name: "OpenProcessing",
				href: "/",
			},
		],
		image: "./joy.png",
	},
];
