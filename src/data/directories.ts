import type { Directory } from "@types";

export const HomeDirectories: Directory[] = [
	{
		title: "Projects",
		description: "Useful software I sometimes build",
		link: "/projects",
	},
	{
		title: "Notes",
		description: "Notes on stuff you can do with a computer",
		link: "/blog",
	},
	{
		title: "Crafts",
		description: "Code + Pixel Experiments",
		link: "/crafts",
	},
	{
		title: "Resources",
		description: "Lists of things I like, that you may find useful",
		link: "/res",
	},
];

export const StashDirectories: Directory[] = [
	{
		title: "Bookshelf",
		description: "Personal collection of literature",
		link: "/res/books",
	},
	{
		title: "Apps & Tools",
		description: "Digital instruments for life and work",
		link: "/res/tools",
	},
	{
		title: "Music",
		description: "My current favorite artists and tracks",
		link: "/res/music",
	},
	{
		title: "Websites",
		description: "Places I enjoy hanging out on",
		link: "/res/links",
	},
];
