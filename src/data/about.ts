type tool = {
	name: string;
	description: string;
	link: string;
};

export const tools: tool[] = [
	{
		name: "obsidian",
		description: "my second brain",
		link: "https://obsidian.md/",
	},
	{
		name: "neovim",
		description: "quickly turning into my favorite text editor",
		link: "https://neovim.org/",
	},
	{
		name: "terminal",
		description: "a modern terminal emulator for windows",
		link: "https://github.com/microsoft/terminal",
	},
	{
		name: "eagle",
		description: "pinterest on localhost ;)",
		link: "https://eagle.cool",
	},
	{
		name: "starship",
		description: "terminal prompt engine",
		link: "https://starship.rs",
	},
	{
		name: "numi",
		description: "a beautiful swiss army calculator",
		link: "https://numi.app",
	},
	{
		name: "gemini",
		description: "google replacement + personal assistant",
		link: "https://gemini.google.com",
	},
	{
		name: "todoist",
		description: "task management",
		link: "https://todoist.com",
	},
	{
		name: "blender",
		description: "3d creation suite",
		link: "https://tableplus.org",
	},
	{
		name: "figma",
		description: "design and prototyping tool",
		link: "https://figma.com",
	},
	{
		name: "hoppscotch",
		description: "api testing platform",
		link: "https://hoppscotch.org",
	},
];

const signals = [
	"Dreams are messages from the deep",
	"Signals from the void",
	"Stay hungry, Stay foolish",
];

export const randomSignal = () => {
	const seed = Math.floor(Math.random() * signals.length);
	return signals[seed];
};
