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
		title: "3D Game of Life",
		href: "/",
		description:
			"Been fascinated by Cellular Automata for a long time, decided to implement Conway's Game of Life in 3D.",
		date: "28 Aug 2024",
		image: "/projects/cube.png",
		stack: ["WebGL", "P5.js", "Vite", "JavaScript"],
		links: [
			{
				name: "Github",
				href: "https://github.com/x0bd/creative-dojo/generative-sketches/3d-game-of-life/",
			},
		],
	},
	{
		title: "Glyph Tic-Tac-Toe",
		href: "https://github.com/x0bd/glyph-ui",
		description:
			"I recently started implementing the reconciliation algorithm into the Glyph Frontend Framework. To showcase its capabilities I decided to built a Tic-Tac-Toe game.",
		date: "07 Jul 2024",
		stack: ["JavaScript", "Glyph"],
		video: "/projects/tic-tac-toe.mp4",
		links: [
			{
				name: "Github",
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
				name: "Github",
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
		stack: ["P5.js", "JavaScript"],
		links: [
			{
				name: "Github",
				href: "https://github.com/x0bd/generative-sketches",
			},
		],
		image: "./joy.png",
	},
];
