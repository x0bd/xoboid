import type { Site, Metadata, Socials, techs } from "@types";

export const SITE: Site = {
	NAME: "xoboid",
	EMAIL: "xoboidd@gmail.com",
	NUM_POSTS_ON_HOMEPAGE: 2,
	NUM_WORKS_ON_HOMEPAGE: 2,
	NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
	TITLE: "home",
	DESCRIPTION: "i own a computer",
};

export const BLOG: Metadata = {
	TITLE: "notes",
	DESCRIPTION:
		"thoughts, notes and doodles on stuff you can do on a computer",
};

export const ABOUT: Metadata = {
	TITLE: "about",
	DESCRIPTION: "me, my favorite tools and tech satck",
};

export const PROJECTS: Metadata = {
	TITLE: "crafts",
	DESCRIPTION: "A collection of stuff i have built with a computer",
};

export const FUN: Metadata = {
	TITLE: "fun",
	DESCRIPTION: "A collection of creative work, experiments and art projects",
};

export const MUSIC: Metadata = {
	TITLE: "music",
	DESCRIPTION: "A collection of my favorite tracks and artists from spotify",
};

export const SOCIALS: Socials = [
	{
		NAME: "x",
		HREF: "https://twitter.com/xoboid",
	},
	{
		NAME: "github",
		HREF: "https://github.com/x0bd",
	},
	{
		NAME: "resume",
		HREF: "/resume.pdf",
	},
];

// Modify or add relevant techs
export const technologies: techs = {
	astro: "devicon-plain:astro",
	nextjs: "akar-icons:nextjs-fill",
	tailwind: "mdi:tailwind",
	remix: "simple-icons:remix",
	stripe: "fa-brands:stripe",
	figma: "ph:figma-logo",
	svelte: "simple-icons:svelte",
	prisma: "simple-icons:prisma",
	supabase: "ri:supabase-fill",
	webgl: "simple-icons:webgl",
	threejs: "logos:threejs",
	p5js: "simple-icons:p5dotjs",
	jotai: "logos:jotai",
	electron: "simple-icons:electron",
	sass: "simple-icons:sass",
	vite: "simple-icons:vite",
	bun: "devicon-plain:bun",
	planetscale: "skill-icons:planetscale-light",
	vercel: "akar-icons:vercel-fill",
	typeScript: "simple-icons:typescript",
	javaScript: "simple-icons:javascript",
	blender: "simple-icons:blender",
	shadcn: "simple-icons:shadcnui",
	react: "simple-icons:react",
	socketio: "cib:socket-io",
	drizzle: "simple-icons:drizzle",
	zod: "simple-icons:zod",
	radix: "simple-icons:radixui",
	node: "akar-icons:node-fill",
	express: "simple-icons:express",
	mdx: "simple-icons:mdx",
	spotify: "bi:spotify",
	rust: "simple-icons:rust",
	framer_motion: "tabler:brand-framer-motion",
};
