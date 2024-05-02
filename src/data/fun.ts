export type experiment = {
	title: string;
	previewFile: string;
	liveLink?: string;
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
];
