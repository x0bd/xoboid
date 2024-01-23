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
		link: "github.com/x0bd/celeste",
		promoted: true,
		wip: true,
		image: "lembe.png",
	},

	{
		title: "palegen",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "an app to quickly generate color palettes from images",
		link: "github.com/x0bd/palegen",
		promoted: true,
		image: "lembe.png",
	},
	{
		title: "void.fm",
		techs: ["Next.js", "Shadcn/ui", "NextAuth", "TypeScript", "Spotify"],
		description: "A spotify stats app",
		link: "github.com/xobd",
		promoted: true,
		image: "lembe.png",
		isComingSoon: true,
	},
	// {
	// 	title: "otanoid",
	// 	techs: [
	// 		"Next.js",
	// 		"Shadcn/ui",
	// 		"TypeScript",
	// 		"Supabase",
	// 		"Zustand",
	// 		"DrizzleORM",
	// 	],
	// 	description:
	// 		"an app to help you efficiently manage your manga and anime backlog",
	// 	link: "ota.sh",
	// 	promoted: true,
	// 	image: "lembe.png",
	// 	isComingSoon: true,
	// },
	{
		title: "xoboid",
		techs: ["Next.js", "Shadcn/ui", "TypeScript"],
		description: "My personal site + blog",
		link: "xoboid.vercel.app",
		promoted: false,
		image: "xoboid.jpg",
	},
	{
		title: "orb",
		techs: ["WebGL", "TypeScript"],
		description: "a web based graphics library",
		link: "github.com/xobd",
		promoted: false,
		image: "lembe.png",
		wip: true,
	},
	{
		title: "wordle-lite",
		techs: ["React", "SCSS", "JavaScript", "Vite"],
		link: "github.com/x0bd/wordle-lite",
		description: "a beautiful tiny clone of the wordle game",
		promoted: false,
		image: "lembe.png",
	},
];

export default projects;
