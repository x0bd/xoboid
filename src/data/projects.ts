export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "2048",
    techs: ["React", "Vite", "JavaScript"],
    link: "https://github.com/x0bd/2048",
  },
  {
    title: "xoboid",
    techs: ["Astro", "Tailwind", "zod", "TypeScript"],
    link: "https://github.com/x0bd/xoboid",
  },
  {
    title: "void.fm",
    techs: ["Next.js", "Daisy/UI", "Express", "JavaScript"],
    link: "/https://github.com/x0bd",
    isComingSoon: true,
  },
  // {
  //   title: "palegen",
  //   techs: ["Next.js", "radix/ui", "zod", "Prisma", "TypeScript"],
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
