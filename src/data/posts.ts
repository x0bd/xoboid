type Post = {
	title: string;
	publishDate: string;
	description: string;
	isPublished: boolean;
	slug: string;
};

const posts: Post[] = [
	{
		title: "The Three Body Problem",
		publishDate: "2024-03-21",
		description: "An Experience",
		isPublished: true,
		slug: "trisolar",
	},
	{
		title: "How I Customized my Windows Terminal",
		publishDate: "2023-10-10",
		description: "really love rose-pine ✨",
		isPublished: true,
		slug: "soho",
	},
	{
		title: "I built a frontend web framework.",
		publishDate: "2024-02-14",
		description: "Is it going to be the next React?",
		isPublished: true,
		slug: "celeste",
	},
	{
		title: "Why I switched from Notion To Obsidian",
		publishDate: "2023-12-12",
		description: "Its Like switching from vscode to vim.",
		isPublished: true,
		slug: "obsidian",
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
