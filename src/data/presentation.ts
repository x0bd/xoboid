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
	title: "Hi 👋, I’m Tinodaishe",

	description:
		"I am a *Software Engineer* with over *3 years* of experience in web development. I am currently working with *Next.js* and *TypeScript*. During my free time, I enjoy experimenting with *Three.js* and learning *Rust**.",
	socials: [
		{
			label: "X",
			link: "",
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
