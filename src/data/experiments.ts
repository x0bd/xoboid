export type Experiment = {
	title: string;
	techs: string[];
	description: string;
	link: string;
	isComingSoon?: boolean;
};

const experiments: Experiment[] = [
	{
		title: "unknown pleasures live",
		techs: ["JavaScript", "P5.js"],
		description: "Animated Joy Division Album Cover",
		link: "/",
	},
	{
		title: "colorful noise",
		techs: ["TypeScript", "Three.js"],
		description: "soothing perlin noise animations",
		link: "/",
		isComingSoon: true,
	},
];

export default experiments;
