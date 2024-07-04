import { I as createComponent, J as spreadAttributes, K as renderTemplate, L as maybeRenderHead, M as unescapeHTML } from './astro/server_CMv_d3ee.mjs';
import { g as getImage } from './_astro_assets_BpjAEfGI.mjs';
import 'clsx';

const Astro__ZVAOya = new Proxy({"src":"/_astro/todo.BJRpk0fZ.gif","width":600,"height":960,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/synth/Dojo/oss/xoboid/src/content/blog/fe-magic/todo.gif";
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
			const html = await updateImageReferences("<p>“Ever heard someone say ‘Frontend Frameworks Are Magic!’ hanging out on Discord or reading threads on X? Well, I used to think so too!”</p>\n<p>When I first started building user interfaces (UIs), mostly in game engines like Unity and Godot, it was a fairly straightforward process. It involved dragging and dropping components within the engine and writing code specific to those elements.</p>\n<p>However, when I transitioned to web development using frameworks like React, the declarative approach and the somewhat mysterious inner workings piqued my curiosity.</p>\n<p>Fast forward to enrolling in Jonas Schmedtmann’s <a href=\"https://www.udemy.com/course/the-ultimate-react-course/\">Ultimate React Course</a>. He had a whole section explaining the magic behind the scenes, but let’s be honest, 10+ hours of deep engineering theory can be overwhelming.</p>\n<p>But the urge to understand this “magic” lingered. So, here I am, building my own framework to unveil the secrets!</p>\n<p>This post will cover the tech stack I’ll be using, the planned features, and the knowledge I hope to gain along the way.</p>\n<h3 id=\"the-tech-stack\">The Tech Stack</h3>\n<p>The JavaScript ecosystem thrives on passionate debates about tools. This project will avoid those distractions and focus on core functionalities. Here’s the chosen tech stack:</p>\n<ul>\n<li><strong>Build Tool:</strong> npm - While pnpm offers workspace functionality, I’m still getting comfortable with it. For this project, I’ll stick with the familiar npm.</li>\n<li><strong>Bundler:</strong> Rollup - My daily driver is Vite, but this project provides the perfect opportunity to explore Rollup and its benefits based on recommendations.</li>\n<li><strong>Linting and Formatting:</strong> ESLint and Prettier - This well-established combination ensures clean and consistent code.</li>\n<li><strong>Testing:</strong> Vitest - This is my current favorite testing framework.</li>\n<li><strong>Language:</strong> JavaScript - Since this is a learning project, I want to prioritize the core concepts without getting bogged down in type systems. However, JavaScript allows for exploring JSDoc for code documentation.</li>\n</ul>\n<h2 id=\"roadmap\">Roadmap</h2>\n<p>This framework will explore various functionalities that make frontend frameworks powerful. Here’s what I plan to build:</p>\n<p><strong>Implemented Features:</strong></p>\n<ul>\n<li>Virtual DOM, Mounting, and Destroying</li>\n<li>State Management</li>\n</ul>\n<p><strong>Future Features:</strong></p>\n<ul>\n<li>Advanced Components\n<ul>\n<li>Stateful Components</li>\n<li>Component Methods</li>\n<li>Sub-components</li>\n</ul>\n</li>\n<li>Keyed Lists</li>\n<li>Hooks</li>\n<li>Asynchronous Components</li>\n<li>TypeScript Support</li>\n<li>Server-Side Rendering</li>\n<li>Slots</li>\n<li>Browser extension for component inspection</li>\n</ul>\n<!-- Implement Here -->\n<p>Now that we have the virtual DOM, mounting, and state management working together, Glyph is a functional bare-bones framework! This allows us to build basic web applications. As a demonstration, check out the classic todo app built with Glyph in the video,</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./todo.gif&#x22;,&#x22;alt&#x22;:&#x22;todo app&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Here’s the <a href=\"https://github.com/x0bd/glyph-ui\">source code</a>.</p>\n<p>Thanks for reading and happy coding!</p>");
	

				const frontmatter = {"title":"Introducing Glyph","description":"Demystifying Frontend Frameworks by Building My Own","date":"May 27 2024"};
				const file = "C:/Users/synth/Dojo/oss/xoboid/src/content/blog/fe-magic/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\"Ever heard someone say 'Frontend Frameworks Are Magic!' hanging out on Discord or reading threads on X? Well, I used to think so too!\"\r\n\r\nWhen I first started building user interfaces (UIs), mostly in game engines like Unity and Godot, it was a fairly straightforward process. It involved dragging and dropping components within the engine and writing code specific to those elements.\r\n\r\nHowever, when I transitioned to web development using frameworks like React, the declarative approach and the somewhat mysterious inner workings piqued my curiosity.\r\n\r\nFast forward to enrolling in Jonas Schmedtmann's [Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/). He had a whole section explaining the magic behind the scenes, but let's be honest, 10+ hours of deep engineering theory can be overwhelming.\r\n\r\nBut the urge to understand this \"magic\" lingered. So, here I am, building my own framework to unveil the secrets!\r\n\r\nThis post will cover the tech stack I'll be using, the planned features, and the knowledge I hope to gain along the way.\r\n\r\n### The Tech Stack\r\n\r\nThe JavaScript ecosystem thrives on passionate debates about tools. This project will avoid those distractions and focus on core functionalities. Here's the chosen tech stack:\r\n\r\n-   **Build Tool:** npm - While pnpm offers workspace functionality, I'm still getting comfortable with it. For this project, I'll stick with the familiar npm.\r\n-   **Bundler:** Rollup - My daily driver is Vite, but this project provides the perfect opportunity to explore Rollup and its benefits based on recommendations.\r\n-   **Linting and Formatting:** ESLint and Prettier - This well-established combination ensures clean and consistent code.\r\n-   **Testing:** Vitest - This is my current favorite testing framework.\r\n-   **Language:** JavaScript - Since this is a learning project, I want to prioritize the core concepts without getting bogged down in type systems. However, JavaScript allows for exploring JSDoc for code documentation.\r\n\r\n## Roadmap\r\n\r\nThis framework will explore various functionalities that make frontend frameworks powerful. Here's what I plan to build:\r\n\r\n**Implemented Features:**\r\n\r\n-   Virtual DOM, Mounting, and Destroying\r\n-   State Management\r\n\r\n**Future Features:**\r\n\r\n-   Advanced Components\r\n    -   Stateful Components\r\n    -   Component Methods\r\n    -   Sub-components\r\n-   Keyed Lists\r\n-   Hooks\r\n-   Asynchronous Components\r\n-   TypeScript Support\r\n-   Server-Side Rendering\r\n-   Slots\r\n-   Browser extension for component inspection\r\n\r\n<!-- Implement Here -->\r\n\r\nNow that we have the virtual DOM, mounting, and state management working together, Glyph is a functional bare-bones framework! This allows us to build basic web applications. As a demonstration, check out the classic todo app built with Glyph in the video,\r\n\r\n![todo app](./todo.gif)\r\n\r\nHere's the [source code](https://github.com/x0bd/glyph-ui).\r\n\r\nThanks for reading and happy coding!\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"the-tech-stack","text":"The Tech Stack"},{"depth":2,"slug":"roadmap","text":"Roadmap"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
