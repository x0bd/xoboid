export type Project = {
	title: string;
	techs: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "xoboid",
		techs: ["Astro", "Tailwind CSS", "TypeScript"],
		link: "https://github.com/x0bd/xoboid",
	},
	{
		title: "palegen",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		link: "/https://github.com/palegen",
	},
	{
		title: "tetrix",
		techs: ["React", "Tailwind CSS", "TypeScript", "Vitest"],
		link: "https://github.com/x0bd/tetrix",
	},

	{
		title: "lembe",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Prisma", "Zod", "MySQL"],
		link: "https://github.com/x0bd/lembe",
		isComingSoon: true,
	},
	// {
	// 	title: "void.fm",
	// 	techs: ["Next.js", "Radix UI", "Supabase", "Stripe", "TypeScript"],
	// 	link: "/",
	// 	isComingSoon: true,
	// },
];

export default projects;
