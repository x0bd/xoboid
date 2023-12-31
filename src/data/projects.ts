export type Project = {
	title: string;
	techs: string[];
	description: string;
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "palegen",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "generate color palettes from images",
		link: "https://github.com/palegen",
	},
	{
		title: "tetrix",
		techs: ["React", "Daisy UI", "TypeScript", "Vitest"],
		description: "a rose-pine themed Tetris clone",
		link: "https://github.com/x0bd/tetrix",
	},
	{
		title: "lembe",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Prisma", "Zod", "MySQL"],
		description: "a tiny hobby management app",
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
