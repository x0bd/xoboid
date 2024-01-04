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
		title: "ambient",
		techs: ["Ambient", "Vite", "TypeScript"],
		description: "a minimal frontend web framework",
		link: "https://github.com/x0bd/redium",
		promoted: true,
	},

	{
		title: "lembe",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Prisma", "Zod", "MySQL"],
		description: "entertainment ecosystem manager",
		link: "https://github.com/x0bd/lembe",
		promoted: true,
	},
	{
		title: "doodle.px",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "a tiny pixel art editor",
		link: "/",
		promoted: true,
	},
	{
		title: "xoboid",
		techs: ["Astro", "TailwindCSS", "Zod", "TypeScript"],
		description: "my portfolio + blog site",
		link: "https://github.com/x0bd/xoboid",
		promoted: false,
	},
	{
		title: "void.fm",
		techs: ["Next.js", "Radix UI", "Supabase", "Stripe", "TypeScript"],
		description: "a lightweight music streaming app",
		link: "https://github.com/x0bd/void-fm",
		promoted: true,
		isComingSoon: true,
	},
];

export default projects;
