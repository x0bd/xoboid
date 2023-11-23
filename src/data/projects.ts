export type Project = {
	title: string;
	techs: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "hypertasks",
		techs: ["Next.js", "shadcn/ui", "Prisma", "TypeScript"],
		link: "https://github.com/x0bd/hypertasks",
	},
	{
		title: "xoboid",
		techs: ["Astro", "Tailwind", "TypeScript"],
		link: "https://github.com/x0bd/xoboid",
	},
	{
		title: "2048",
		techs: ["React", "Vite", "SCSS"],
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
