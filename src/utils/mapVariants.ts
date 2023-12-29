import type { TailwindColor } from "./types/tailwind";

const MAP_COLOR_VARIANT_TO_BG: Record<TailwindColor, string> = {
	orange: "bg-orange-500",
	violet: "bg-violet-500",
	red: "bg-red",
	amber: "bg-amber-500",
	yellow: "bg-yellow",
	lime: "bg-lime-500",
	green: "bg-green",
	emerald: "bg-green",
	teal: "bg-violet-500",
	cyan: "bg-cyan",
	blue: "bg-blue",
	indigo: "bg-indigo-500",
	purple: "bg-purple",
	fushia: "bg-fushia-500",
	pink: "bg-pink-500",
	rose: "bg-rose-500",
};

const MAP_COLOR_VARIANT_TO_TEXT: Record<TailwindColor, string> = {
	orange: "text-orange-500",
	violet: "text-violet-500",
	red: "text-red",
	amber: "text-amber-500",
	yellow: "text-yellow",
	lime: "text-lime-500",
	green: "text-green",
	emerald: "text-green",
	teal: "text-violet-500",
	cyan: "text-cyan",
	blue: "text-blue",
	indigo: "text-indigo-500",
	purple: "text-purple",
	fushia: "text-fushia-500",
	pink: "text-pink-500",
	rose: "text-rose-500",
};

export { MAP_COLOR_VARIANT_TO_BG, MAP_COLOR_VARIANT_TO_TEXT };
