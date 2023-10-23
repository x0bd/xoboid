export type Project = {
	title: string;
	techs: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "hypertasks",
		techs: ["Next.js", "Shadcn-UI", "Zod", "TypeScript"],
		link: "https://github.com/x0bd/tiny-palette-generator",
	},
	{
		title: "xoboid",
		techs: ["Astro", "Tailwind", "TypeScript"],
		link: "https://github.com/x0bd/xoboid",
	},
	{
		title: "doodle.sh",
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
