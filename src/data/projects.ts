export type Project = {
	title: string;
	techs: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "tetrix",
		techs: ["Next.js", "TailwindCSS", "TypeScript"],
		link: "https://github.com/x0bd/2048",
	},
	{
		title: "task.sh",
		techs: ["Next.js", "shadcn/ui", "TypeScript", "Prisma", "Clerk", "zod"],
		link: "https://github.com/x0bd/hyper-tasks",
	},
	{
		title: "xoboid",
		techs: ["Astro", "TailwindCSS", "TypeScript"],
		link: "https://github.com/x0bd/xoboid",
	},
	{
		title: "void.stats",
		techs: ["Next.js", "Daisy/UI", "Express", "JavaScript"],
		link: "/https://github.com/x0bd",
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
