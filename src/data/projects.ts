export type Project = {
	title: string;
	techs: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "palegen",
		techs: ["ReactJs", "Tailwind", "OpenAI"],
		link: "https://github.com/x0bd/tiny-palette-generator",
	},
	{
		title: "xoboid",
		techs: ["Astro", "Tailwind", "TypeScript"],
		link: "https://github.com/x0bd/xoboid",
	},
	{
		title: "otanoid",
		techs: ["ReactJs", "Chakra-UI", "Zod", "TypeScript"],
		link: "",
		isComingSoon: true,
	},
	// {
	//   title: "doodle.sh",
	//   techs: ["React", "Shadcn-UI", "React-Router", "Firebase"],
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
