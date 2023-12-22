export type Project = {
	title: string;
	techs: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "xoboid",
		techs: ["Astro", "TailwindCSS", "TypeScript"],
		link: "https://github.com/x0bd/xoboid",
	},
	{
		title: "tetrix",
		techs: ["Next.js", "Daisy-ui", "TypeScript", "Vitest"],
		link: "https://github.com/x0bd/2048",
	},
	{
		title: "palegen",
		techs: ["Next.js", "Daisy-ui", "TypeScript"],
		link: "/https://github.com/x0bd",
	},
	{
		title: "lembe.sh",
		techs: ["Next.js", "Shadcn/ui", "TypeScript", "Prisma", "Zod"],
		link: "https://github.com/x0bd/lembe",
		isComingSoon: true,
	},
	// {
	//   title: "palegen",
	//   techs: ["Next.js", "radix/ui", "zod", "Prisma", "TypeScript"],
	//   link: "/",
	//   isComingSoon: true,
	// },
];

// {
//   title: "Portfolio / Template",
//   techs: ["Astro"],
//   link: "/",
//   isComingSoon: true,
// },

export default projects;
