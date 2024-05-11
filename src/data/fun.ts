export type experiment = {
	title: string;
	previewFile: string;
	sourceLink: string;
	description: string;
	stack: string;
	fileType: "img" | "vid";
};

export const experiments: experiment[] = [
	{
		title: "Unknown Pleasures",
		sourceLink: "",
		previewFile: "/fun/pleasure.gif",
		description: "A recreation of the iconic Joy Division Album Art Cover",
		stack: "p5.js",
		fileType: "img",
	},
	{
		title: "Rascii",
		sourceLink: "",
		previewFile: "fun/morty.png",
		description: "A Terminal Ascii Art Generator Written In Rust",
		stack: "rust",
		fileType: "img",
	},
	{
		title: "3 Body Problem Simulator",
		sourceLink: "",
		previewFile: "/fun/3body.gif",
		description:
			"Recently finished reading the books and watching the show and wanted to visualize this fascinating physics problem",
		stack: "p5.js",
		fileType: "img",
	},
];
