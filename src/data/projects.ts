export type Project = {
	title: string;
	techs: string[];
	description: string;
	promoted: boolean;
	link: string;
	isComingSoon?: boolean;
	image: string;
};

const projects: Project[] = [
	{
		title: "celeste",
		techs: ["Celeste", "Vite", "TypeScript"],
		description:
			"a minimal frontend framework created to have a deeper understanding of browser concepts and TypeScript",
		link: "celeste-js.vercel.app",
		promoted: true,
		image: "lembe.png",
	},
	{
		title: "lembe.sh",
		techs: [
			"Next.js",
			"Shadcn/ui",
			"TypeScript",
			"Supabase",
			"Zustand",
			"Prisma",
			"ClerkAuth",
		],
		description:
			"an app to seemlessly manage and clear your entertainment backlog",
		link: "lembe.sh",
		promoted: true,
		image: "lembe.png",
	},
	{
		title: "palegen",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "an app to quickly generate color palettes from images",
		link: "pale.gen",
		promoted: true,
		image: "lembe.png",
	},
	{
		title: "void.fm",
		techs: ["Next.js", "Shadcn/ui", "Supabase", "Stripe", "TypeScript"],
		description: "A shadcn/ui inspired music streaming app",
		link: "void.fm",
		promoted: true,
		isComingSoon: true,
		image: "lembe.png",
	},
	{
		title: "xoboid",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "My personal site + blog",
		link: "xoboid.vercel.app",
		promoted: false,
		image: "xoboid.jpg",
	},
];

export default projects;
