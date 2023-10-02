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
	// profile: "/profile.webp",
	description:
		"I enjoy designing and bringing ideas to *life* with *code*. Currently my favorite tools include *NextJS, TypeScript and Golang*. When I am not at my computer, I like to experiment with my synthesizer and learn Japanese.",
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
