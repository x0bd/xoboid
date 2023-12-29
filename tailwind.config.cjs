const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				white: "#e0def4",
				gray: "#26233a",
				black: "#191724",
				blue: "#9ccfd8",
				cyan: "#ebbcba",
				green: "#31748f",
				purple: "#c4a7e7",
				red: "#eb6f92",
				yellow: "#f6c177",
			},
			fontFamily: {
				sans: ["M PLUS Rounded 1c", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
