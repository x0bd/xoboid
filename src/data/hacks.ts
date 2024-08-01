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
		title: "Unknown Pleasures",
		href: "/",
		description: "P5.js Creation of the iconic Joy Division Album Cover",
		date: "27 Aug 2024",
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
	{
		title: "Rascii",
		href: "/",
		description: "A Resource Efficient Terminal Ascii Art Generator",
		date: "11 June 2022",
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
];
