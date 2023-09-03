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
  title: "Kon'nichiwa, I’m Tinodaishe 👋",
  // profile: "/profile.webp",
  description:
    "I'm a *fullstack developer* with over *2 years* of experience in web development. I am currently utilizing *React, Node.js and JavaScript*. Outside of work, I delve into *computer graphics*, experimenting with Three.js and Blender.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/xoboid",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Github",
      link: "https://github.com/x0bd",
    },
  ],
};

export default presentation;
