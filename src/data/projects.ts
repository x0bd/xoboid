export type Project = {
	title: string;
	techs: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "poex.ai",
		techs: ["Next.js", "Tailwind", "MongoDB", "JavaScript"],
		link: "https://github.com/x0bd/",
	},
	{
		title: "xoboid",
		techs: ["Astro", "Tailwind", "TypeScript"],
		link: "https://github.com/x0bd/xoboid",
	},
	{
		title: "hypertasks",
		techs: ["Next.js", "Shadcn-UI", "Prisma", "TypeScript"],
		link: "/",
		isComingSoon: true,
	},
];

// {
//   title: "Portfolio / Template",
//   techs: ["Astro"],
//   link: "/",
//   isComingSoon: true,
// },

export default projects;
