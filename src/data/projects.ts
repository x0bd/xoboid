export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "shower thoughts app",
    techs: ["ReactJs", "Supabase"],
    link: "https://github.com/x0bd/shower-thoughts-app",
  },
  {
    title: "xoboid",
    techs: ["Astro", "TailwindCSS", "TypeScript"],
    link: "https://github.com/x0bd/xoboid",
  },
  {
    title: "otanoid",
    techs: ["ReactJs", "Chakra-ui", "TypeScript"],
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
