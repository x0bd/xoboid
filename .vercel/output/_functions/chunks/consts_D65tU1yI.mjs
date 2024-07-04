const SITE = {
  NAME: "xoboid",
  EMAIL: "xoboidd@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3
};
const HOME = {
  TITLE: "home",
  DESCRIPTION: "i own a computer"
};
const BLOG = {
  TITLE: "notes",
  DESCRIPTION: "thoughts, notes and doodles on stuff you can do on a computer"
};
const PROJECTS = {
  TITLE: "crafts",
  DESCRIPTION: "A collection of stuff i have built with a computer"
};
const MUSIC = {
  TITLE: "music",
  DESCRIPTION: "A collection of my favorite tracks and artists from spotify"
};
const SOCIALS = [
  {
    NAME: "x",
    HREF: "https://twitter.com/xoboid"
  },
  {
    NAME: "github",
    HREF: "https://github.com/x0bd"
  },
  {
    NAME: "resume",
    HREF: "/resume.pdf"
  }
];

export { BLOG as B, HOME as H, MUSIC as M, PROJECTS as P, SITE as S, SOCIALS as a };
