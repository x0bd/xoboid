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
		title: "rose.js",
		techs: ["Rose.js", "Vite", "TypeScript"],
		description: "a minimal frontend web framework",
		link: "https://github.com/x0bd/rose",
		promoted: true,
	},
	{
		title: "palegen",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "generate color palettes from images",
		link: "https://github.com/palegen",
		promoted: true,
	},
	{
		title: "lembe",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Prisma", "Zod", "MySQL"],
		description: "a tiny hobby management app",
		link: "https://github.com/x0bd/lembe",
		promoted: true,
	},
	{
		title: "doodles",
		techs: ["Next.js", "Daisy Ui", "TypeScript"],
		description: "a tiny pixel art editor",
		link: "/",
		promoted: false,
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
