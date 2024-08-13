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
		name: "Arc",
		description: "a modern web browser with innovative ideas",
		link: "https://arc.net",
		category: "Productivity",
	},
	{
		name: "Visual Studio Code",
		description: "primary text editor, enhanced with vim motions",
		link: "https://code.visualstudio.com/",
		category: "Programming",
	},
	{
		name: "Terminal",
		description: "on windows, this terminal is the best!",
		link: "https://github.com/microsoft",
		category: "Programming",
	},
	{
		name: "Todoist",
		description: "allows me to easily plan and manage tasks",
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
		category: "Programming",
	},
	{
		name: "Numi",
		description: "a beautiful swiss army calculator",
		link: "https://numi.app",
		category: "Utility",
	},
	{
		name: "Hoppscotch",
		description: "a less bloated api testing platform",
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
		link: "https://www.ableton.com/en/",
		category: "Fun",
	},
	{
		name: "Figma",
		description: "design and prototyping tool",
		link: "https://figma.com",
		category: "Design",
	},
	{
		name: "Playnite",
		description: "unified game library manager & launcher",
		link: "https://playnite.link/",
		category: "Fun",
	},
	{
		name: "Rosé Pine",
		description:
			"color palette with a bit of soho vibes for the classy minimalist",
		link: "https://rosepinetheme.com/",
		category: "Productivity",
	},
];

export default tools;
