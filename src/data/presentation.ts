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
	title: "こんにちわ👋, I’m Tinodaishe",

	description:
		"I am a *Software Engineer* with over *2 years* of experience in web development. Currently my favorite tools include *NextJS, Three.js and TypeScript*. When I am not at my computer, I enjoy experimenting with my synthesizer and learning Japanese.",
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
