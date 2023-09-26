export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "minimal card game",
    techs: ["ReactJs"],
    link: "https://github.com/x0bd/lil-card-game",
  },
  {
    title: "tino.sh",
    techs: ["Astro", "TailwindCSS", "TypeScript"],
    link: "https://github.com/x0bd/xoboid",
  },
  {
    title: "otanoid",
    techs: ["ReactJs", "Zod", "TypeScript"],
    link: "",
    isComingSoon: true,
  },
  // {
  //   title: "doodle.sh",
  //   techs: ["React", "Shadcn-UI", "React-Router", "Firebase"],
  //   link: "/",
  //   isComingSoon: true,
  // },
];

// {
//   title: "Portfolio / Template",
//   techs: ["Astro"],
//   link: "/",
//   isComingSoon: true,
// },

export default projects;
