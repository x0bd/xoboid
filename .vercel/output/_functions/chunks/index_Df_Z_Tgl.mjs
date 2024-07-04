import { I as createComponent, J as spreadAttributes, K as renderTemplate, L as maybeRenderHead, M as unescapeHTML } from './astro/server_CMv_d3ee.mjs';
import { g as getImage } from './_astro_assets_BpjAEfGI.mjs';
import 'clsx';

const Astro__EFics = new Proxy({"src":"/_astro/morty.DE-AJcFI.png","width":1040,"height":1005,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/synth/Dojo/oss/xoboid/src/content/projects/rascii/morty.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./morty\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./morty.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__EFics, ...props});
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
			const html = await updateImageReferences("<p>Rascii is a super fast and lightweight image to ascii art generator that runs on the terminal. I built the app as an interesting way of learning rust and creative coding.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./morty.png&#x22;,&#x22;alt&#x22;:&#x22;Morty Smith&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><em>Morty Smith ascii art</em></p>\n<p>Built with Rust🦀.</p>");
	

				const frontmatter = {"title":"rascii","description":"a lightweight terminal ascii art generator","date":"Feb 10 2024","demoURL":"https://github.com/x0bd/rascii","repoURL":"https://github.com/x0bd/rascii"};
				const file = "C:/Users/synth/Dojo/oss/xoboid/src/content/projects/rascii/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nRascii is a super fast and lightweight image to ascii art generator that runs on the terminal. I built the app as an interesting way of learning rust and creative coding.\r\n\r\n![Morty Smith](./morty.png)\r\n\r\n_Morty Smith ascii art_\r\n\r\nBuilt with Rust🦀.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
