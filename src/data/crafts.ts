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

export type Work = {
	title: string;
	description: string;
	src: string;
	stack: string[];
};

export const Works: Work[] = [
	{
		title: "Glyph",
		description: "A Modern Frontend Framework",
		src: "/blog/fe-magic",
		stack: ["Rollup", "Vitest", "JavaScript"],
	},
	{
		title: "Snap.sh",
		description: "Create and Share Beautiful Code Snippets",
		src: "https://snap-xo.vercel.app/",
		stack: ["Next.js", "TailwindCSS", "TypeScript"],
	},
];

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
