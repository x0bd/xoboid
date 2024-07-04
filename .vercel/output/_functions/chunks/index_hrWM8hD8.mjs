import { I as createComponent, J as spreadAttributes, K as renderTemplate, L as maybeRenderHead, M as unescapeHTML } from './astro/server_CMv_d3ee.mjs';
import { g as getImage } from './_astro_assets_BpjAEfGI.mjs';
import 'clsx';

const Astro__44t37 = new Proxy({"src":"/_astro/takuya.BaIvP4E1.png","width":1280,"height":720,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/synth/Dojo/oss/xoboid/src/content/blog/obsidian/takuya.png";
							}
							
							return target[name];
						}
					});

const Astro__1S7ajQ = new Proxy({"src":"/_astro/minimal.CnKMIb4E.png","width":2332,"height":1212,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/synth/Dojo/oss/xoboid/src/content/blog/obsidian/minimal.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./takuya\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./takuya.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__44t37, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./minimal\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./minimal.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1S7ajQ, ...props});
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
			const html = await updateImageReferences("<h2 id=\"using-notion\">Using Notion</h2>\n<p>When I first delved into the world of programming, I quickly realized the importance of having a reliable knowledge management tool. After experimenting with Sticky Notes and Evernote, I stumbled upon Notion and instantly fell in love with its capabilities.</p>\n<p>The clean and intuitive user interface of Notion captivated me from the start. It was a refreshing departure from Evernote, which had been my go-to note-taking app until then. Notion’s folder approach allowed me the freedom to organize and structure my notes exactly as I wanted. It was a level of flexibility that I had been craving.</p>\n<p>One feature in particular, the forward slash command, revolutionized my productivity. Initially, I struggled to adapt to the absence of a right-click feature, but once I grasped its power, my user experience became seamless. The speed at which I could type and navigate within Notion without relying on the mouse was remarkable. It felt like I was effortlessly gliding through my thoughts and ideas.</p>\n<p>Moreover, being an active member of the tech Twitter/X community, it seemed like everyone around me was using Notion. It became the ultimate knowledge management tool, and I was proud to be a part of its user base. Notion even secured a spot in the top 10 apps on <a href=\"https://www.dockhunt.com/apps\">DockHunter</a>, a testament to its popularity and widespread adoption.</p>\n<h2 id=\"why-i-switched-to-obsidian\">Why I Switched to Obsidian</h2>\n<p>So, why did I eventually make the switch to Obsidian?</p>\n<p>Let me share my journey of discovery.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./takuya.png&#x22;,&#x22;alt&#x22;:&#x22;Takuya Matsumaya&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>It all started when I stumbled upon a YouTube channel called <a href=\"https://www.youtube.com/@devaslife\">devaslife</a> by <a href=\"https://twitter.com/inkdrop_app?lang=en\">Takuya Matsumaya</a>, an indie hacker and the creator of the note-taking app <a href=\"https://www.inkdrop.app/\">Inkdrop</a>. As I watched his videos, I couldn’t help but notice the stunning aesthetics of Inkdrop’s glassmorphic user interface. I longed for that look and feel within Notion but couldn’t find a way to achieve it through plugins or customization options. Unfortunately, Inkdrop fell outside my budget as a premium app.</p>\n<p>Then, one day, the X algorithm worked its magic and recommended a tweet about new themes from the CEO of Obsidian, <a href=\"https://twitter.com/kepano\">Steph Ango</a>. The folder-based approach of Obsidian reminded me of Notion, but there was something undeniably modern about Obsidian’s design. The fonts, the app icon—everything felt more refined. In contrast, Notion’s icon, which I had grown accustomed to, suddenly appeared lackluster and out of place.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./minimal.png&#x22;,&#x22;alt&#x22;:&#x22;Minimal Theme by Steph Ango&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Let’s talk about the typing experience.</p>\n<h2 id=\"the-typing-experience\">The Typing Experience</h2>\n<p>The moment I started typing in Obsidian, it was akin to the first time I used a mechanical keyboard. The responsiveness and speed were unparalleled. Markdown visualizations appeared instantly, without any lag or delay that I occasionally encountered in Notion. This newfound snappiness allowed me to embark on my longest writing sessions ever. Those subtle differences in responsiveness may seem trivial, but they make a world of difference. They enable a state of flow, where ideas effortlessly flow from mind to screen.</p>\n<p>Obsidian’s forward slash feature, similar to Notion’s, became one of my favorite aspects of the app. However, Obsidian took it a step further by offering a raw markdown experience. Writing in markdown became intuitive, and the live preview made it even more enticing. The speed and fluidity with which I could write in markdown, almost addictively, were unmatched. I found myself writing in markdown even outside of Obsidian, in plain notepad, honing my skills in this versatile syntax.</p>\n<h2 id=\"the-offline-experience\">The Offline Experience</h2>\n<p>One critical aspect that drew me to Obsidian was its offline experience and focus on privacy. Unlike Notion, which operates primarily in the cloud, Obsidian stores notes as local files on your machine. This means you have complete control over your data and can easily sync it using popular cloud storage services like Google Drive or OneDrive. Moreover, Obsidian seamlessly integrates with version control systems like Git, allowing for easy backups and collaboration through plugins like <a href=\"https://github.com/denolehov/obsidian-git\">obsidian-git</a>.</p>\n<h2 id=\"app-optimization\">App Optimization</h2>\n<p>Obsidian’s optimization as an app also caught my attention. As an avid note-taker, I couldn’t help but notice the superior performance and efficiency compared to Notion. Both applications are built on <a href=\"https://electronjs.org/\">Electron</a>, a framework notorious for its resource-intensive nature. However, Obsidian managed to provide a more snappy and responsive experience, with faster startup times and lower memory usage. It excelled in both user experience and engineering prowess.</p>\n<h2 id=\"customizability\">Customizability</h2>\n<p>Customizability was another factor that won me over. Notion lacked the level of customization I desired. I wanted my note-taking app to harmonize with the overall aesthetic of my system—the same theme, the same vibe. Obsidian, with its vast collection of theme plugins, fulfilled that craving. From popular themes like Material Theme and Dracula to the <a href=\"https://rosepinetheme.com/\">rosé pine</a> theme that matched my Visual Studio theme, wallpaper, and terminal colors, Obsidian allowed me to create a personalized and visually appealing environment conducive to my productivity.</p>\n<p>Furthermore, Obsidian boasts a rich ecosystem of open-source plugins. Some of my favorites include Iconize, which adds icons to folders, files, and text, and Style Settings, offering extensive control over the appearance of various elements. These plugins, coupled with the ability to create custom CSS snippets, allowed me to fine-tune Obsidian to my exact preferences.</p>\n<h2 id=\"its-open-source-kind-of\">Its Open Source, Kind Of</h2>\n<p>Obsidian is not completely open-source, but folks in the community claim it ticks most of the checkboxes. Here’s is an excerpt from the bot-run command <code>open sourcing of obsidian</code> regarding open-sourcing obsidian on the app’s official Discord server:</p>\n<blockquote>\n<p>You can actually examine the entire code that Obsidian runs right from the app itself. Open the developer console, hit the “Sources” tab and open “app.js”. There’s a button at the bottom that says “{}” which will neatly format the source code for you to examine.</p>\n</blockquote>\n<p>Given that it’s offline and we have access to the code, choosing Obsidian was an obvious choice for me. This decision aligns with my belief in the potential of open-source software and the principle that knowledge management tools should be accessible to everyone, irrespective of their budget.</p>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>In conclusion, my switch from Notion to Obsidian was driven by a combination of factors: the superior typing experience, the stunning aesthetics, the offline capabilities, the performance optimization, the extensive customizability, the rich plugin ecosystem, the vibrant community, and the free and open-source nature of Obsidian. It was a journey towards finding a note-taking app that truly aligned with my needs and preferences.</p>");
	

				const frontmatter = {"title":"Why I Switched to Obsdian.","description":"I recently switched from Notion to Obsidian and wanted to share my journey","date":"Dec 12 2023"};
				const file = "C:/Users/synth/Dojo/oss/xoboid/src/content/blog/obsidian/index.md";
				const url = undefined;
				function rawContent() {
					return "\n## Using Notion\n\nWhen I first delved into the world of programming, I quickly realized the importance of having a reliable knowledge management tool. After experimenting with Sticky Notes and Evernote, I stumbled upon Notion and instantly fell in love with its capabilities.\n\nThe clean and intuitive user interface of Notion captivated me from the start. It was a refreshing departure from Evernote, which had been my go-to note-taking app until then. Notion's folder approach allowed me the freedom to organize and structure my notes exactly as I wanted. It was a level of flexibility that I had been craving.\n\nOne feature in particular, the forward slash command, revolutionized my productivity. Initially, I struggled to adapt to the absence of a right-click feature, but once I grasped its power, my user experience became seamless. The speed at which I could type and navigate within Notion without relying on the mouse was remarkable. It felt like I was effortlessly gliding through my thoughts and ideas.\n\nMoreover, being an active member of the tech Twitter/X community, it seemed like everyone around me was using Notion. It became the ultimate knowledge management tool, and I was proud to be a part of its user base. Notion even secured a spot in the top 10 apps on [DockHunter](https://www.dockhunt.com/apps), a testament to its popularity and widespread adoption.\n\n## Why I Switched to Obsidian\n\nSo, why did I eventually make the switch to Obsidian?\n\nLet me share my journey of discovery.\n\n![Takuya Matsumaya](./takuya.png)\n\nIt all started when I stumbled upon a YouTube channel called [devaslife](https://www.youtube.com/@devaslife) by [Takuya Matsumaya](https://twitter.com/inkdrop_app?lang=en), an indie hacker and the creator of the note-taking app [Inkdrop](https://www.inkdrop.app/). As I watched his videos, I couldn't help but notice the stunning aesthetics of Inkdrop's glassmorphic user interface. I longed for that look and feel within Notion but couldn't find a way to achieve it through plugins or customization options. Unfortunately, Inkdrop fell outside my budget as a premium app.\n\nThen, one day, the X algorithm worked its magic and recommended a tweet about new themes from the CEO of Obsidian, [Steph Ango](https://twitter.com/kepano). The folder-based approach of Obsidian reminded me of Notion, but there was something undeniably modern about Obsidian's design. The fonts, the app icon—everything felt more refined. In contrast, Notion's icon, which I had grown accustomed to, suddenly appeared lackluster and out of place.\n\n![Minimal Theme by Steph Ango](./minimal.png)\n\nLet's talk about the typing experience.\n\n## The Typing Experience\n\nThe moment I started typing in Obsidian, it was akin to the first time I used a mechanical keyboard. The responsiveness and speed were unparalleled. Markdown visualizations appeared instantly, without any lag or delay that I occasionally encountered in Notion. This newfound snappiness allowed me to embark on my longest writing sessions ever. Those subtle differences in responsiveness may seem trivial, but they make a world of difference. They enable a state of flow, where ideas effortlessly flow from mind to screen.\n\nObsidian's forward slash feature, similar to Notion's, became one of my favorite aspects of the app. However, Obsidian took it a step further by offering a raw markdown experience. Writing in markdown became intuitive, and the live preview made it even more enticing. The speed and fluidity with which I could write in markdown, almost addictively, were unmatched. I found myself writing in markdown even outside of Obsidian, in plain notepad, honing my skills in this versatile syntax.\n\n## The Offline Experience\n\nOne critical aspect that drew me to Obsidian was its offline experience and focus on privacy. Unlike Notion, which operates primarily in the cloud, Obsidian stores notes as local files on your machine. This means you have complete control over your data and can easily sync it using popular cloud storage services like Google Drive or OneDrive. Moreover, Obsidian seamlessly integrates with version control systems like Git, allowing for easy backups and collaboration through plugins like [obsidian-git](https://github.com/denolehov/obsidian-git).\n\n## App Optimization\n\nObsidian's optimization as an app also caught my attention. As an avid note-taker, I couldn't help but notice the superior performance and efficiency compared to Notion. Both applications are built on [Electron](https://electronjs.org/), a framework notorious for its resource-intensive nature. However, Obsidian managed to provide a more snappy and responsive experience, with faster startup times and lower memory usage. It excelled in both user experience and engineering prowess.\n\n## Customizability\n\nCustomizability was another factor that won me over. Notion lacked the level of customization I desired. I wanted my note-taking app to harmonize with the overall aesthetic of my system—the same theme, the same vibe. Obsidian, with its vast collection of theme plugins, fulfilled that craving. From popular themes like Material Theme and Dracula to the [rosé pine](https://rosepinetheme.com/) theme that matched my Visual Studio theme, wallpaper, and terminal colors, Obsidian allowed me to create a personalized and visually appealing environment conducive to my productivity.\n\nFurthermore, Obsidian boasts a rich ecosystem of open-source plugins. Some of my favorites include Iconize, which adds icons to folders, files, and text, and Style Settings, offering extensive control over the appearance of various elements. These plugins, coupled with the ability to create custom CSS snippets, allowed me to fine-tune Obsidian to my exact preferences.\n\n## Its Open Source, Kind Of\n\nObsidian is not completely open-source, but folks in the community claim it ticks most of the checkboxes. Here's is an excerpt from the bot-run command `open sourcing of obsidian` regarding open-sourcing obsidian on the app's official Discord server:\n\n> You can actually examine the entire code that Obsidian runs right from the app itself. Open the developer console, hit the “Sources” tab and open “app.js”. There’s a button at the bottom that says “{}” which will neatly format the source code for you to examine.\n\nGiven that it's offline and we have access to the code, choosing Obsidian was an obvious choice for me. This decision aligns with my belief in the potential of open-source software and the principle that knowledge management tools should be accessible to everyone, irrespective of their budget.\n\n## Conclusion\n\nIn conclusion, my switch from Notion to Obsidian was driven by a combination of factors: the superior typing experience, the stunning aesthetics, the offline capabilities, the performance optimization, the extensive customizability, the rich plugin ecosystem, the vibrant community, and the free and open-source nature of Obsidian. It was a journey towards finding a note-taking app that truly aligned with my needs and preferences.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"using-notion","text":"Using Notion"},{"depth":2,"slug":"why-i-switched-to-obsidian","text":"Why I Switched to Obsidian"},{"depth":2,"slug":"the-typing-experience","text":"The Typing Experience"},{"depth":2,"slug":"the-offline-experience","text":"The Offline Experience"},{"depth":2,"slug":"app-optimization","text":"App Optimization"},{"depth":2,"slug":"customizability","text":"Customizability"},{"depth":2,"slug":"its-open-source-kind-of","text":"Its Open Source, Kind Of"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
