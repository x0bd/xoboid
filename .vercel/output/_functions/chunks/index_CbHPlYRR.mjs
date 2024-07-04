import { I as createComponent, K as renderTemplate, L as maybeRenderHead, M as unescapeHTML } from './astro/server_CMv_d3ee.mjs';
import 'clsx';

const html = "<h2 id=\"cutting-edge-tech-stack\">Cutting edge tech stack</h2>\n<ul>\n<li>Vite</li>\n<li>Bun</li>\n<li>SocketIO</li>\n<li>TypeScript</li>\n</ul>";

				const frontmatter = {"title":"doodle?","description":"a multiplayer drawing/guessing game","date":"Jan 28 2024","demoURL":"https://astro-sphere-demo.vercel.app","repoURL":"https://github.com/markhorn-dev/astro-sphere","draft":true};
				const file = "C:/Users/synth/Dojo/oss/xoboid/src/content/projects/doodle/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Cutting edge tech stack\r\n\r\n-   Vite\r\n-   Bun\r\n-   SocketIO\r\n-   TypeScript\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"cutting-edge-tech-stack","text":"Cutting edge tech stack"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
