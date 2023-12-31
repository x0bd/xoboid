type Social = {
	label: string;
	link: string;
};

type Presentation = {
	mail: string;
	title: string;
	description: string;
	socials: Social[];
	profile?: string;
};

const presentation: Presentation = {
	mail: "tinodatembo@gmail.com",
	title: "👋 Hi, I’m Tinodaishe!",

	description:
		"I am a *design engineer* who enjoys crafting unforgettable experiences for the *web*. Currently, I am working with *Next.js*, *Three.js* and *TypeScript*. In my free time, I infrequently *write* notes on things you can do on your *computer*, and create playful experiments with my *synthesizer*.",
	socials: [
		{
			label: "X",
			link: "https://twitter.com/xoboid",
		},
		{
			label: "LinkedIn",
			link: "https://www.linkedin.com/in/tinodaishe-tembo-70aa3a266/",
		},
		{
			label: "Github",
			link: "https://github.com/x0bd",
		},
	],
};

export default presentation;
