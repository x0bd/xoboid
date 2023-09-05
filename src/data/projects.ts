export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Shower Thoughts app",
    techs: ["ReactJs", "Supabase"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "xoboid home",
    techs: ["Astro", "TailwindCSS", "TypeScript"],
    link: "https://www.linablidi.fr/",
  },
  {
    title: "doodle.sh",
    techs: ["React", "TailwindCSS", "React-Router", "Supabase"],
    link: "/",
    isComingSoon: true,
  },
];

// {
//   title: "Portfolio / Template",
//   techs: ["Astro"],
//   link: "/",
//   isComingSoon: true,
// },

export default projects;
