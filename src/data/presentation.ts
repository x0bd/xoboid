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
  title: "こんにちわ, I’m Tinodaishe 👋",
  // profile: "/profile.webp",
  description:
    "I'm a *Software Engineer* with over *2 years* of experience in web development. I am currently using *React, Node.js and TypeScript*. Outside of work, I delve into *Computer Graphics*, experimenting with Three.js and Blender.",
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
