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
    "I'm a *Design Engineer* with over *2 years* of experience in web development. I am currently using *React, Three.js and TypeScript*. When I am not at my computer, I like to read sci-fi classics and learn Japanese.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/tinodsh",
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
