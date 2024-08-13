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
			"I recently started implementing the reconciliation algorithm into the Glyph Frontend Framework. To showcase its capabilities I decided to built a Tic-Tac-Toe game.",
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
				href: "/blog/glyph-001",
			},
		],
	},
	{
		title: "Rascii",
		href: "https://github.com/x0bd/rascii",
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
				href: "https://github.com/x0bd/rascii",
			},
		],
	},
	{
		title: "Unknown Pleasures",
		href: "https://github.com/x0bd/generative-sketches",
		description:
			"A generative sketch of the iconic Joy Division album cover",
		date: "21 Jan 2024",
		stack: ["P5.js", "JavaScript", "Vite"],
		links: [
			{
				name: "Github",
				href: "https://github.com/x0bd/generative-sketches",
			},
		],
		image: "./joy.png",
	},
];
