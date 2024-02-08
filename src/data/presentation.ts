type Social = {
	icon: any;
	link: string;
};

type Greg = {
	name: string;
	age: number;
	web: string;
};

export type Presentation = {
	name: string;
	mail: string;
	description: string;
	socials: Social[];
	profile: string;
	currentProject: string;
};

// Just An Example, remove later
const greg: Greg = {
	name: "greg",
	age: 32,
	web: "x",
};

const presentation: Presentation = {
	name: "Tinodaishe Tembo",
	mail: "tinodatembo@gmail.com",
	description:
		"I am a creative frontend engineer who enjoys crafting unforgettable experiences for the web through code and pixel experiments. In my free time, I use my computer to decode signals from the void, and infrequently write notes on the stuff I find interesting.",
	socials: [
		{
			icon: "twitter",
			link: "twitter.com/xoboid",
		},
		{
			icon: "LinkedIn",
			link: "www.linkedin.com/in/tinodaishe-tembo-70aa3a266/",
		},
		{
			icon: "Github",
			link: "github.com/x0bd",
		},
	],
	profile: "/img/xoboid.jpg",
	currentProject:
		"Currently I am building Celeste, a minimal client-side web framework.",
};

export default presentation;
