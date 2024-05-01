type tool = {
	name: string;
	description: string;
	link: string;
};

// Work on this to include icons
type tech = {
	name: string;
	link: string;
};

// Programming Languages
export const languages: tech[] = [
	{
		name: "HTML/CSS",
		link: "",
	},
	{
		name: "JavaScript",
		link: "",
	},
	{
		name: "TypeScript",
		link: "",
	},
	{
		name: "GLSL",
		link: "",
	},
];

// Libraries & Frameworks
export const frameworks: tech[] = [
	{
		name: "React",
		link: "",
	},
	{
		name: "Next.js",
		link: "",
	},
	{
		name: "Astro",
		link: "https://astro.dev",
	},
	{
		name: "Expo",
		link: "",
	},
	{
		name: "Three.js",
		link: "",
	},
	{
		name: "React Three Fiber",
		link: "",
	},
	{
		name: "Zustand",
		link: "",
	},
	{
		name: "TailwindCSS",
		link: "",
	},
	{
		name: "Framer Motion",
		link: "",
	},
	{
		name: "GSAP",
		link: "",
	},
	{
		name: "P5.js",
		link: "",
	},
];

// Tools & Platforms
export const platforms: tech[] = [
	{
		name: "Vercel",
		link: "vercel.com",
	},
	{
		name: "Git/Github",
		link: "",
	},
	{
		name: "Supabase",
		link: "",
	},
	{
		name: "Vite/Vitest",
		link: "",
	},
	{
		name: "Bun",
		link: "",
	},
	{
		name: "Node.js",
		link: "",
	},
	{
		name: "Prisma",
		link: "",
	},
	{
		name: "Webpack",
		link: "",
	},
];

export const tools: tool[] = [
	{
		name: "obsidian",
		description: "my second brain",
		link: "https://obsidian.md/",
	},
	{
		name: "neovim",
		description: "quickly becoming my favorite text editor",
		link: "https://neovim.org/",
	},
	{
		name: "terminal",
		description: "a modern terminal emulator for windows",
		link: "https://github.com/microsoft/terminal",
	},
	{
		name: "eagle",
		description: "pinterest on localhost ;)",
		link: "https://eagle.cool",
	},
	{
		name: "starship",
		description: "terminal prompt engine",
		link: "https://starship.rs",
	},
	{
		name: "numi",
		description: "a beautiful swiss army calculator",
		link: "https://numi.app",
	},
	{
		name: "gemini",
		description: "google replacement + personal assistant",
		link: "https://gemini.google.com",
	},
	{
		name: "todoist",
		description: "task management",
		link: "https://todoist.com",
	},
	{
		name: "blender",
		description: "3d creation suite",
		link: "https://tableplus.org",
	},
	{
		name: "figma",
		description: "design and prototyping tool",
		link: "https://figma.com",
	},
	{
		name: "rosé pine",
		description:
			"gorgeous color palette with a bit of soho vibes for the classy minimalist",
		link: "https://rose-pine.org",
	},
];

//

const signals = [
	"Dreams are messages from the deep",
	"Signals from the void",
	"Stay hungry, Stay foolish",
];

const devTitle = ["design engineer", "frontend developer", "digital craftsman"];

export const randomDevTitle = () => {
	const seed = Math.floor(Math.random() * devTitle.length);
	return devTitle[seed];
};

export const randomSignal = () => {
	const seed = Math.floor(Math.random() * signals.length);
	return signals[seed];
};
