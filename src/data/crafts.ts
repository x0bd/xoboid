export type Craft = {
	title: string;
	href: string;
	description: string;
	date: string;
	stack: string[];
	links?: { name: string; href: string }[];
	image?: string;
	video?: string;
};

export const Crafts: Craft[] = [
	{
		title: "Glyph Tic-Tac-Toe",
		href: "https://github.com/x0bd/glyph-ui",
		description:
			"A Tic-Tac-Toe game built with Glyph. Glyph is a modern JavaScript frontend framework that I am building from scratch. The Tic-Tac-Toe game showcases the reconciliation algorithm I had implemented at the time of the post.",
		date: "07 Jul 2024",
		stack: ["JavaScript", "Glyph"],
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
		],
		image: "./joy.png",
	},
];
