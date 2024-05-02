export type experiment = {
	title: string;
	previewFile: string;
	sourceLink: string;
	description: string;
	date: string;
	category: "render" | "generative" | "design" | "ai";
	stack: string[];
	fileType: "img" | "vid";
};

export const experiments: experiment[] = [
	{
		title: "Unknown Pleasures",
		sourceLink: "",
		previewFile: "/fun/pleasure.gif",
		description: "A recreation of the iconic Joy Division Album Art Cover",
		date: "Jan 10 2024",
		category: "generative",
		stack: ["p5"],
		fileType: "img",
	},
	{
		title: "Neuromancer",
		sourceLink: "",
		previewFile: "/fun/Neuromancer.jpeg",
		description: "My favorite from the sprawl trilogy",
		date: "31 Oct 2021",
		category: "render",
		stack: ["blender"],
		fileType: "img",
	},
	// {
	// 	title: "Three Body Simulator",
	// 	sourceLink: "",
	// 	previewFile: "/3body.gif",
	// 	description:
	// 		"Recently finished reading the books and watching the show and wanted to visualize this fascinating physics problem",
	// 	date: "26 Mar 2024",
	// 	category: "generative",
	// 	stack: ["p5"],
	// 	fileType: "img",
	// },
	{
		title: "Psylock",
		sourceLink: "",
		previewFile: "fun/psylock.jpg",
		description: "My Childhood MILF crush",
		date: "31 Oct 2023",
		category: "render",
		stack: ["blender", "marmoset toolbag"],
		fileType: "img",
	},
	{
		title: "Rascii",
		sourceLink: "",
		previewFile: "fun/morty.png",
		description: "A Terminal Ascii Art Generator Written In Rust",
		date: "01 May 2024",
		category: "generative",
		stack: ["rust"],
		fileType: "img",
	},
	{
		title: "The Adjudicator",
		sourceLink: "",
		previewFile: "fun/wick.jpg",
		description: "my other badass crush",
		date: "27 Sep 2023",
		category: "render",
		stack: ["imax"],
		fileType: "img",
	},
];
