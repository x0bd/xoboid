export type tool = {
	name: string;
	description: string;
	link: string;
	category: "Productivity" | "Programming" | "Fun" | "Utility" | "Design";
};

const tools: tool[] = [
	{
		name: "Obsidian",
		description: "My Second Brain",
		link: "https://obsidian.md/",
		category: "Productivity",
	},
	{
		name: "Visual Studio Code",
		description: "primary text editor",
		link: "https://code.visualstudio.com/",
		category: "Programming",
	},
	{
		name: "Terminal",
		description: "my favorite windows terminal",
		link: "https://github.com/microsoft",
		category: "Programming",
	},
	{
		name: "Todoist",
		description: "task management",
		link: "https://todoist.com",
		category: "Productivity",
	},
	{
		name: "Eagle",
		description: "collect and manage visual inspiration",
		link: "https://eagle.cool",
		category: "Productivity",
	},
	{
		name: "Starship.rs",
		description: "terminal prompt engine",
		link: "https://starship.rs",
		category: "Productivity",
	},
	{
		name: "Numi",
		description: "a beautiful swiss army calculator",
		link: "https://numi.app",
		category: "Utility",
	},
	{
		name: "Hoppscotch",
		description: "API testing platform",
		link: "https://hoppscotch.io",
		category: "Programming",
	},
	{
		name: "Blender",
		description: "the best 3d design suite",
		link: "https://blender.org",
		category: "Design",
	},
	{
		name: "Ableton",
		description: "sound exploration & music creation",
		link: "",
		category: "Fun",
	},
	{
		name: "Figma",
		description: "design tool",
		link: "https://figma.com",
		category: "Design",
	},
	{
		name: "Playnite",
		description: "unified game library manager & launcher",
		link: "playnite.org",
		category: "Fun",
	},
	{
		name: "Rose-Pine",
		description: "classy color palette with minimal soho vibes",
		link: "https://rosepine.org",
		category: "Productivity",
	},
];

export default tools;
