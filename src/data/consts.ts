import type { Site, Metadata, Socials } from "@types";

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
];
