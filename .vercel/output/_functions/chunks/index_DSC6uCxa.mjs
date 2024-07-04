import { I as createComponent, K as renderTemplate, L as maybeRenderHead, M as unescapeHTML } from './astro/server_CMv_d3ee.mjs';
import 'clsx';

const html = "<h1 id=\"wip\">WIP</h1>";

				const frontmatter = {"title":"dojo","description":"a work journal app template","date":"May 25 2024","demoURL":"https://astro-sphere-demo.vercel.app","repoURL":"https://github.com/markhorn-dev/astro-sphere","draft":true};
				const file = "C:/Users/synth/Dojo/oss/xoboid/src/content/projects/dojo/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# WIP\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"wip","text":"WIP"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
