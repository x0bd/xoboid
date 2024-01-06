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
		title: "celeste.js",
		techs: ["Celeste.js", "Vite", "TypeScript"],
		description: "a minimal frontend web framework",
		link: "https://github.com/x0bd/redium",
		promoted: true,
	},

	{
		title: "lembe",
		techs: [
			"Next.js",
			"Shadcn/ui",
			"TypeScript",
			"Prisma",
			"Zustand",
			"Zod",
		],
		description: "an entertainment ecosystem manager",
		link: "https://github.com/x0bd/lembe",
		promoted: true,
	},
	{
		title: "doodle.px",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "a tiny pixel art editor",
		link: "/",
		promoted: false,
	},
	{
		title: "palegen",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "generate color palettes from images",
		link: "/",
		promoted: true,
	},
	{
		title: "wave.css",
		techs: ["Vite", "JavaScript", "SCSS"],
		description: "a lightweight and fast css framework",
		link: "/",
		promoted: false,
	},
	{
		title: "celeste ui",
		techs: ["React", "TypeScript", "Vite"],
		description: "an accessible react ui component library",
		link: "/",
		promoted: false,
		isComingSoon: false,
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
	{
		title: "guestbook",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Supabase"],
		description: "a guestbook project for your personal site",
		link: "/",
		promoted: false,
	},
	{
		title: "ambient-rose",
		description: "a brutal version of the rose-pine vs-code theme",
		techs: ["JavaScript"],
		link: "/",
		promoted: false,
	},
	{
		title: "void.fy",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Spotify"],
		description: "a spotify statis app",
		link: "/",
		promoted: false,
	},
];

export default projects;
