import { I as createComponent, J as spreadAttributes, K as renderTemplate, L as maybeRenderHead, M as unescapeHTML } from './astro/server_CMv_d3ee.mjs';
import { g as getImage } from './_astro_assets_BpjAEfGI.mjs';
import 'clsx';

const Astro__Z1N4ziK = new Proxy({"src":"/_astro/snap.DK9lOoga.jpeg","width":1755,"height":1043,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/synth/Dojo/oss/xoboid/src/content/projects/snap/snap.jpeg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./snap\\.jpeg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./snap.jpeg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1N4ziK, ...props});
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
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./snap.jpeg&#x22;,&#x22;alt&#x22;:&#x22;snap.xo&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Snap.xo is a beautifully crafted app to create and share snaps of your code. It is inspired by <a href=\"https://raycast.com\">raycast’s</a> ray.so app.</p>\n<h5 id=\"tech-stack\">Tech Stack</h5>\n<ul>\n<li>Next.js 14 (App Router)</li>\n<li>TailwindCSS</li>\n<li>TypeScript</li>\n<li>Vercel (hosting)</li>\n</ul>");
	

				const frontmatter = {"title":"snap.xo","description":"create and share beautiful snaps of your code.","date":"Apr 30 2024","demoURL":"https://snap-xo.vercel.app/","repoURL":"https://github.com/x0bd/snap.xo"};
				const file = "C:/Users/synth/Dojo/oss/xoboid/src/content/projects/snap/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![snap.xo](./snap.jpeg)\r\n\r\nSnap.xo is a beautifully crafted app to create and share snaps of your code. It is inspired by [raycast's](https://raycast.com) ray.so app.\r\n\r\n##### Tech Stack\r\n\r\n-   Next.js 14 (App Router)\r\n-   TailwindCSS\r\n-   TypeScript\r\n-   Vercel (hosting)\r\n";
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
