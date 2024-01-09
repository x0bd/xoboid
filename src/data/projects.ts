export type Project = {
	title: string;
	techs: string[];
	description: string;
	promoted: boolean;
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "celeste",
		techs: ["Celeste", "Vite", "TypeScript"],
		description:
			"a minimal frontend framework created to have a deeper understanding of browser concepts and TypeScript",
		link: "https://github.com/x0bd/celeste",
		promoted: true,
		isComingSoon: true,
	},
	{
		title: "lembe",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Supabase", "Zustand"],
		description:
			"an app to seemlessly manage and clear your entertainment backlog",
		link: "/",
		promoted: true,
	},
	{
		title: "palegen",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "quickly generate color palettes from images",
		link: "/",
		promoted: false,
	},
	{
		title: "guestbook",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Supbase"],
		description:
			"an open source guestbook that easily integrates with your personal site.",
		link: "/",
		promoted: true,
		isComingSoon: true,
	},
];

export default projects;
