import { I as createComponent, J as spreadAttributes, K as renderTemplate, L as maybeRenderHead, M as unescapeHTML } from './astro/server_CMv_d3ee.mjs';
import { g as getImage } from './_astro_assets_BpjAEfGI.mjs';
import 'clsx';

const Astro__ZVAOya = new Proxy({"src":"/_astro/todo.BJRpk0fZ.gif","width":600,"height":960,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/synth/Dojo/oss/xoboid/src/content/projects/glyph/todo.gif";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./todo\\.gif" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./todo.gif" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZVAOya, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./todo.gif&#x22;,&#x22;alt&#x22;:&#x22;a todo app built with glyph&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><em>A todo app built with glyph</em></p>\n<p>Glyph is a modern JavaScript frontend framework that is heavily inspired by React, Svelte and Vue. I am building the framework to better understand how these engineering marvels work under the hood.</p>\n<h5 id=\"tech-stack\">Tech Stack</h5>\n<ul>\n<li>JavaScript</li>\n<li>Rollup</li>\n<li>NPM</li>\n<li>Vitest</li>\n</ul>\n<p>If you want to learn more about the project, please check this <a href=\"/blog/fe-magic\">blog post</a>.</p>");
	

				const frontmatter = {"title":"glyph","description":"a modern frontend framework","date":"May 26 2024","demoURL":"https://github.com/x0bd/glyph-ui","repoURL":"https://github.com/x0bd/glyph-ui"};
				const file = "C:/Users/synth/Dojo/oss/xoboid/src/content/projects/glyph/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![a todo app built with glyph](./todo.gif)\r\n\r\n_A todo app built with glyph_\r\n\r\nGlyph is a modern JavaScript frontend framework that is heavily inspired by React, Svelte and Vue. I am building the framework to better understand how these engineering marvels work under the hood.\r\n\r\n##### Tech Stack\r\n\r\n-   JavaScript\r\n-   Rollup\r\n-   NPM\r\n-   Vitest\r\n\r\nIf you want to learn more about the project, please check this [blog post](/blog/fe-magic).\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":5,"slug":"tech-stack","text":"Tech Stack"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
