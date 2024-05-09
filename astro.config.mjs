import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "vesper",
		},
	},

	site: "https://xoboid.vercel.app",
	integrations: [mdx(), sitemap(), tailwind(), icon()],
});
