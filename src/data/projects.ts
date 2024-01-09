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
		title: "lembe",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Supabase", "Zustand"],
		description:
			"an app to seemlessly manage and clear your entertainment backlog",
		link: "lembe.sh",
		promoted: true,
		image: "lembe.png",
	},
	{
		title: "palegen",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "quickly generate color palettes from images",
		link: "pale.gen",
		promoted: true,
		image: "lembe.png",
	},
	{
		title: "guestbook",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Supbase"],
		description:
			"an open source guestbook that easily integrates with your personal site.",
		link: "guestbook.vercel.app",
		promoted: true,
		image: "lembe.png",
	},
	{
		title: "void.fm",
		techs: ["Next.js", "Shadcn/ui", "Supbase", "Stripe", "TypeScript"],
		description: "A shadcn/ui inspired music streaming app",
		link: "void.fm",
		promoted: true,
		image: "lembe.png",
	},
	{
		title: "celeste",
		techs: ["Celeste", "Vite", "TypeScript"],
		description:
			"a minimal frontend framework created to have a deeper understanding of browser concepts and TypeScript",
		link: "https://celeste-js.vercel.app",
		promoted: true,
		isComingSoon: true,
		image: "lembe.png",
	},
];

export default projects;
