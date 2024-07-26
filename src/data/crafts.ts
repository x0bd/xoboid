export type Experiment = {
	date: string;
	title: string;
	tech: string;
	type: "video" | "image";
	banner: string;
	link: string;
};

export const experiments: Experiment[] = [
	{
		date: "31 Oct 2023",
		title: "Oni Girl",
		tech: "Three.js",
		type: "image",
		banner: "./oni.jpeg",
		link: "/",
	},
	{
		date: "27 Aug 2023",
		title: "Unknown Pleasures",
		tech: "P5.JS",
		type: "image",
		banner: "./joy.png",
		link: "./",
	},
	{
		date: "19 Feb 2023",
		title: "Kanagawa Rose-Pine",
		tech: "Framer Motion",
		type: "image",
		banner: "./kanagawa-rose-pine.png",
		link: "./",
	},
];
