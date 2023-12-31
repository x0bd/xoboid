export type Project = {
	title: string;
	techs: string[];
	description: string;
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "rose.js",
		techs: ["Rose.js", "Vite", "TypeScript"],
		description: "a minimal frontend web framework",
		link: "https://github.com/x0bd/rose",
	},
	{
		title: "palegen",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "generate color palettes from images",
		link: "https://github.com/palegen",
	},
	{
		title: "lembe",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Prisma", "Zod", "MySQL"],
		description: "a tiny hobby management app",
		link: "https://github.com/x0bd/lembe",
	},
	{
		title: "void.fm",
		techs: ["Next.js", "Radix UI", "Supabase", "Stripe", "TypeScript"],
		description: "a lightweight music streaming app",
		link: "https://github.com/x0bd/void-fm",
		isComingSoon: true,
	},
];

export default projects;
