export type Project = {
	title: string;
	techs: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "hypertasks",
		techs: ["NextJs", "Prisma", "Shadcn-UI", "TypeScript"],
		link: "https://github.com/x0bd/tiny-palette-generator",
	},
	{
		title: "xoboid",
		techs: ["Astro", "Tailwind", "TypeScript"],
		link: "https://github.com/x0bd/xoboid",
	},
	{
		title: "doodle.sh",
		techs: ["NextJs", "Shadcn-UI", "Prisma", "TypeScript"],
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
