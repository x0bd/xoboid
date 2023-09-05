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
    "I'm a *fullstack developer* with over *2 years* of experience in web development. I am currently utilizing *React, Node.js and Golang*. Outside of work, I delve into *ai*, experimenting with LLMs and stuff.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/xoboid",
    },
    {
      label: "LinkedIn",
      link: "",
    },
    {
      label: "Github",
      link: "https://github.com/x0bd",
    },
  ],
};

export default presentation;
