export type Project = {
	title: string;
	techs: string[];
	description: string;
	promoted: boolean;
	link: string;
	isComingSoon?: boolean;
	image: string;
	wip?: boolean;
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
		wip: true,
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
		techs: ["Next.js", "Shadcn/ui", "Spotify", "NextAuth", "TypeScript"],
		description: "A spotify stats app",
		link: "void.fm",
		promoted: true,
		image: "lembe.png",
	},
	{
		title: "otanoid",
		techs: [
			"Next.js",
			"Shadcn/ui",
			"TypeScript",
			"Supabase",
			"Zustand",
			"DrizzleORM",
		],
		description:
			"an app to help you efficiently manage your manga and anime backlog",
		link: "ota.sh",
		promoted: true,
		image: "lembe.png",
		wip: true,
	},
	{
		title: "xoboid",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "My personal site + blog",
		link: "xoboid.vercel.app",
		promoted: false,
		image: "xoboid.jpg",
	},
	{
		title: "doodle.rs",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Tauri", "Rust"],
		description: "a lightweight and blazingly fast pixel editor",
		link: "doodle.rs",
		promoted: true,
		image: "lembe.png",
		isComingSoon: true,
	},
];

export default projects;
