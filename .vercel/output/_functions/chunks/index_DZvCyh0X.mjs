import { I as createComponent, K as renderTemplate, L as maybeRenderHead, M as unescapeHTML } from './astro/server_CMv_d3ee.mjs';
import 'clsx';

const html = "<h1 id=\"always-wanted-to-build-this\">Always wanted to build this</h1>";

				const frontmatter = {"title":"void","description":"a minimal mobile audio player","date":"Jan 28 2024","demoURL":"https://astro-sphere-demo.vercel.app","repoURL":"https://github.com/markhorn-dev/astro-sphere","draft":true};
				const file = "C:/Users/synth/Dojo/oss/xoboid/src/content/projects/void/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# Always wanted to build this\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"always-wanted-to-build-this","text":"Always wanted to build this"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
