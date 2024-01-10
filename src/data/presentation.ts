type Social = {
	icon: any;
	link: string;
};

export type Presentation = {
	name: string;
	mail: string;
	title: string;
	description: string;
	socials: Social[];
	profile: string;
	currentProject: string;
};

const presentation: Presentation = {
	name: "Tinodaishe Tembo",
	title: "👋, こんにちは",
	mail: "tinodatembo@gmail.com",
	description:
		"I am a frontend engineer who enjoys crafting unforgettable experiences for the web. Right now, I am working with Next.js, Three.js and TypeScript. In my free I use my computer to decode signals from the void through code, pixel and sound experiments. Sometimes I write notes on things you can do on your computer and slowly learn Japanese.",
	socials: [
		{
			icon: "twitter",
			link: "https://twitter.com/xoboid",
		},
		{
			icon: "LinkedIn",
			link: "https://www.linkedin.com/in/tinodaishe-tembo-70aa3a266/",
		},
		{
			icon: "Github",
			link: "https://github.com/x0bd",
		},
	],
	profile: "/img/xoboid.jpg",
	currentProject:
		"Currently I am building Celeste, a minimal frontend web framework, in public.",
};

export default presentation;
