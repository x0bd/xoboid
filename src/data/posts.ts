type Post = {
	title: string;
	publishDate: string;
	description: string;
	isPublished: boolean;
	slug: string;
};

const posts: Post[] = [
	{
		title: "Migrating Blog from raw markdown to mdx.",
		publishDate: "2024-02-14",
		description: "Need to supercharge my blog.",
		isPublished: true,
		slug: "mdx",
	},
	{
		title: "Why I switched from Notion To Obsidian",
		publishDate: "2023-12-12",
		description: "Its Like switching from vscode to vim.",
		isPublished: true,
		slug: "obsidian",
	},
	{
		title: "How I Customized my Windows Terminal",
		publishDate: "2023-10-10",
		description: "really love rose-pine ✨",
		isPublished: true,
		slug: "soho",
	},
	{
		title: "Building xhow",
		publishDate: "2026-10-31",
		description: "My Dream Company, thanks Love+Death+Robots",
		isPublished: false,
		slug: "xhow",
	},
];

export default posts;
