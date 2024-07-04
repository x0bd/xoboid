import { I as createComponent, J as spreadAttributes, K as renderTemplate, L as maybeRenderHead, M as unescapeHTML } from './astro/server_CMv_d3ee.mjs';
import { g as getImage } from './_astro_assets_BpjAEfGI.mjs';
import 'clsx';

const Astro__Z1eRy6x = new Proxy({"src":"/_astro/rick.CZdMTCcT.png","width":665,"height":906,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/synth/Dojo/oss/xoboid/src/content/blog/terminal-art/rick.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./rick\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./rick.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1eRy6x, ...props});
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
			const html = await updateImageReferences("<p>I’ve been playing around with <a href=\"https://p5js.org/\">p5.js</a> for creating generative sketches, and the urge to experiment with ASCII art struck. I built a browser based ascii art generator with p5.js, but the performance was abysmal. This led me down the path of building one with Rust, and let me tell you, it was a revelation. The Rust version was <strong>blazingly</strong> fast, super lightweight, and surprisingly straightforward to create.</p>\n<p>Now, let’s dive in and see how you can build your own terminal ASCII art generator in Rust!</p>\n<h2 id=\"setting-up-the-project\">Setting Up the Project</h2>\n<ol>\n<li>\n<p><strong>Create a new Rust project:</strong></p>\n<p>Open your terminal and run <code>cargo init &#x3C;project_name></code>. Replace <code>&#x3C;project_name></code> with your desired name (e.g., <code>rascii</code>). This command creates the basic structure for your Rust project.</p>\n</li>\n<li>\n<p><strong>Add Dependencies:</strong></p>\n<p>We’ll be using the <code>image</code> crate to handle image manipulation. Add the following line to your <code>Cargo.toml</code> file located in the project root directory:</p>\n<pre class=\"astro-code vesper\" style=\"background-color:#101010;color:#FFF; overflow-x: auto;\" tabindex=\"0\" data-language=\"toml\"><code><span class=\"line\"><span style=\"color:#FFF\">[</span><span style=\"color:#FFC799\">dependencies</span><span style=\"color:#FFF\">]</span></span>\n<span class=\"line\"><span style=\"color:#FFF\">image = </span><span style=\"color:#99FFE4\">\"0.25.0\"</span></span>\n<span class=\"line\"></span></code></pre>\n</li>\n<li>\n<p><strong>Install Dependencies:</strong></p>\n<p>Run <code>cargo build</code> in your terminal to download and install the <code>image</code> crate for your project.</p>\n</li>\n</ol>\n<h2 id=\"understanding-the-code\">Understanding the Code</h2>\n<p>Now, let’s break down the core functionality of the code step-by-step:</p>\n<p><strong>1. Importing the <code>image</code> crate:</strong></p>\n<pre class=\"astro-code vesper\" style=\"background-color:#101010;color:#FFF; overflow-x: auto;\" tabindex=\"0\" data-language=\"rust\"><code><span class=\"line\"><span style=\"color:#FFC799\">use</span><span style=\"color:#FFC799\"> image</span><span style=\"color:#A0A0A0\">::</span><span style=\"color:#FFF\">{ </span><span style=\"color:#FFC799\">GenericImageView</span><span style=\"color:#FFF\"> };</span></span>\n<span class=\"line\"></span></code></pre>\n<p>This line brings the functionality of the <code>image</code> crate into scope for our program. We use the <code>GenericImageView</code> trait, which allows us to work with different image formats.</p>\n<p><strong>2. <code>get_ascii</code> Function:</strong></p>\n<pre class=\"astro-code vesper\" style=\"background-color:#101010;color:#FFF; overflow-x: auto;\" tabindex=\"0\" data-language=\"rust\"><code><span class=\"line\"><span style=\"color:#FFC799\">fn</span><span style=\"color:#FFC799\"> get_ascii</span><span style=\"color:#FFF\">(intent</span><span style=\"color:#A0A0A0\">:</span><span style=\"color:#FFC799\"> u8</span><span style=\"color:#FFF\">) </span><span style=\"color:#A0A0A0\">-></span><span style=\"color:#A0A0A0\"> &#x26;</span><span style=\"color:#FFF\">'</span><span style=\"color:#FFC799\">static</span><span style=\"color:#FFC799\"> str</span><span style=\"color:#FFF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">    let</span><span style=\"color:#FFF\"> index </span><span style=\"color:#A0A0A0\">=</span><span style=\"color:#FFF\"> intent </span><span style=\"color:#A0A0A0\">/</span><span style=\"color:#FFC799\"> 32</span><span style=\"color:#FFF\">;</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">    let</span><span style=\"color:#FFF\"> ascii </span><span style=\"color:#A0A0A0\">=</span><span style=\"color:#FFF\"> [</span><span style=\"color:#99FFE4\">\" \"</span><span style=\"color:#FFF\">, </span><span style=\"color:#99FFE4\">\".\"</span><span style=\"color:#FFF\">, </span><span style=\"color:#99FFE4\">\",\"</span><span style=\"color:#FFF\">, </span><span style=\"color:#99FFE4\">\"-\"</span><span style=\"color:#FFF\">, </span><span style=\"color:#99FFE4\">\"~\"</span><span style=\"color:#FFF\">, </span><span style=\"color:#99FFE4\">\"+\"</span><span style=\"color:#FFF\">, </span><span style=\"color:#99FFE4\">\"=\"</span><span style=\"color:#FFF\">, </span><span style=\"color:#99FFE4\">\"@\"</span><span style=\"color:#FFF\">];</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">    return</span><span style=\"color:#FFF\"> ascii[index </span><span style=\"color:#FFC799\">as</span><span style=\"color:#FFC799\"> usize</span><span style=\"color:#FFF\">];</span></span>\n<span class=\"line\"><span style=\"color:#FFF\">}</span></span>\n<span class=\"line\"></span></code></pre>\n<p>This function takes an <code>intent</code> value (represented as an unsigned 8-bit integer) and converts it into an ASCII character representing the brightness level.</p>\n<ul>\n<li><code>intent</code> is calculated by averaging the red, green, and blue (RGB) values of a pixel.</li>\n<li>The function uses a pre-defined array <code>ascii</code> containing various characters representing different brightness levels. (” ” for darkest, ”@” for brightest).</li>\n<li>It divides <code>intent</code> by 32 to get an index into the <code>ascii</code> array.</li>\n<li>Finally, it returns the corresponding ASCII character at that index.</li>\n</ul>\n<p><strong>3. <code>get_image</code> Function:</strong></p>\n<pre class=\"astro-code vesper\" style=\"background-color:#101010;color:#FFF; overflow-x: auto;\" tabindex=\"0\" data-language=\"rust\"><code><span class=\"line\"><span style=\"color:#FFC799\">fn</span><span style=\"color:#FFC799\"> get_image</span><span style=\"color:#FFF\">(dir</span><span style=\"color:#A0A0A0\">:</span><span style=\"color:#A0A0A0\"> &#x26;</span><span style=\"color:#FFC799\">str</span><span style=\"color:#FFF\">, scale</span><span style=\"color:#A0A0A0\">:</span><span style=\"color:#FFC799\"> u32</span><span style=\"color:#FFF\">) {</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">    let</span><span style=\"color:#FFF\"> img </span><span style=\"color:#A0A0A0\">=</span><span style=\"color:#FFC799\"> image</span><span style=\"color:#A0A0A0\">::</span><span style=\"color:#FFC799\">open</span><span style=\"color:#FFF\">(dir)</span><span style=\"color:#A0A0A0\">.</span><span style=\"color:#FFC799\">unwrap</span><span style=\"color:#FFF\">();</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">    let</span><span style=\"color:#FFF\"> (width, height) </span><span style=\"color:#A0A0A0\">=</span><span style=\"color:#FFF\"> img</span><span style=\"color:#A0A0A0\">.</span><span style=\"color:#FFC799\">dimensions</span><span style=\"color:#FFF\">();</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">    for</span><span style=\"color:#FFF\"> y </span><span style=\"color:#FFC799\">in</span><span style=\"color:#FFC799\"> 0</span><span style=\"color:#A0A0A0\">..</span><span style=\"color:#FFF\">height {</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">        for</span><span style=\"color:#FFF\"> x </span><span style=\"color:#FFC799\">in</span><span style=\"color:#FFC799\"> 0</span><span style=\"color:#A0A0A0\">..</span><span style=\"color:#FFF\">width {</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">            if</span><span style=\"color:#FFF\"> y </span><span style=\"color:#A0A0A0\">%</span><span style=\"color:#FFF\"> (scale </span><span style=\"color:#A0A0A0\">*</span><span style=\"color:#FFC799\"> 2</span><span style=\"color:#FFF\">) </span><span style=\"color:#A0A0A0\">==</span><span style=\"color:#FFC799\"> 0</span><span style=\"color:#A0A0A0\"> &#x26;&#x26;</span><span style=\"color:#FFF\"> x </span><span style=\"color:#A0A0A0\">%</span><span style=\"color:#FFF\"> scale </span><span style=\"color:#A0A0A0\">==</span><span style=\"color:#FFC799\"> 0</span><span style=\"color:#FFF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">                let</span><span style=\"color:#FFF\"> pix </span><span style=\"color:#A0A0A0\">=</span><span style=\"color:#FFF\"> img</span><span style=\"color:#A0A0A0\">.</span><span style=\"color:#FFC799\">get_pixel</span><span style=\"color:#FFF\">(x, y);</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">                let</span><span style=\"color:#A0A0A0\"> mut</span><span style=\"color:#FFF\"> intent </span><span style=\"color:#A0A0A0\">=</span><span style=\"color:#FFF\"> pix[</span><span style=\"color:#FFC799\">0</span><span style=\"color:#FFF\">] </span><span style=\"color:#A0A0A0\">/</span><span style=\"color:#FFC799\"> 3</span><span style=\"color:#A0A0A0\"> +</span><span style=\"color:#FFF\"> pix[</span><span style=\"color:#FFC799\">1</span><span style=\"color:#FFF\">] </span><span style=\"color:#A0A0A0\">/</span><span style=\"color:#FFC799\"> 3</span><span style=\"color:#A0A0A0\"> +</span><span style=\"color:#FFF\"> pix[</span><span style=\"color:#FFC799\">2</span><span style=\"color:#FFF\">] </span><span style=\"color:#A0A0A0\">/</span><span style=\"color:#FFC799\"> 3</span><span style=\"color:#FFF\">;</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">                if</span><span style=\"color:#FFF\"> pix[</span><span style=\"color:#FFC799\">3</span><span style=\"color:#FFF\">] </span><span style=\"color:#A0A0A0\">==</span><span style=\"color:#FFC799\"> 0</span><span style=\"color:#FFF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#FFF\">                    intent </span><span style=\"color:#A0A0A0\">=</span><span style=\"color:#FFC799\"> 0</span><span style=\"color:#FFF\">;</span></span>\n<span class=\"line\"><span style=\"color:#FFF\">                }</span></span>\n<span class=\"line\"><span style=\"color:#FFC799\">                print!</span><span style=\"color:#FFF\">(</span><span style=\"color:#99FFE4\">\"{}\"</span><span style=\"color:#FFF\">, </span><span style=\"color:#FFC799\">get_ascii</span><span style=\"color:#FFF\">(intent));</span></span>\n<span class=\"line\"><span style=\"color:#FFF\">            }</span></span>\n<span class=\"line\"><span style=\"color:#FFF\">        }</span></span>\n<span class=\"line\"><span style=\"color:#A0A0A0\">        if</span><span style=\"color:#FFF\"> y </span><span style=\"color:#A0A0A0\">%</span><span style=\"color:#FFF\"> (scale </span><span style=\"color:#A0A0A0\">*</span><span style=\"color:#FFC799\"> 2</span><span style=\"color:#FFF\">) </span><span style=\"color:#A0A0A0\">==</span><span style=\"color:#FFC799\"> 0</span><span style=\"color:#FFF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#FFC799\">            println!</span><span style=\"color:#FFF\">(</span><span style=\"color:#99FFE4\">\"\"</span><span style=\"color:#FFF\">);</span></span>\n<span class=\"line\"><span style=\"color:#FFF\">        }</span></span>\n<span class=\"line\"><span style=\"color:#FFF\">    }</span></span>\n<span class=\"line\"><span style=\"color:#FFF\">}</span></span>\n<span class=\"line\"></span></code></pre>\n<p>This function handles loading and processing the image:</p>\n<ul>\n<li>It takes the image path (<code>dir</code>) and a scaling factor (<code>scale</code>) as arguments.</li>\n<li>It opens the image using <code>image::open</code> and gets its dimensions (<code>width</code> and <code>height</code>).</li>\n<li>It iterates through each pixel (represented by <code>x</code> and <code>y</code> coordinates). However, it only processes pixels at specific intervals determined by the <code>scale</code> value. This helps reduce the number of pixels analyzed and creates a blockier but faster ASCII representation.</li>\n<li>For each selected pixel, it retrieves its RGB values using <code>img.get_pixel(x, y)</code>.</li>\n<li>It calculates the average brightness (<code>intent</code>) by dividing the sum of RGB values by 3.</li>\n<li>If the alpha channel value (<code>pix[3]</code>) is 0 (indicating a transparent pixel), it sets the <code>intent</code> to 0 (completely black).</li>\n<li>The function calls <code>get_ascii</code> with the calculated <code>intent</code> to get the corresponding ASCII character.</li>\n</ul>\n<p><strong>4. <code>main</code> Function:</strong></p>\n<pre class=\"astro-code vesper\" style=\"background-color:#101010;color:#FFF; overflow-x: auto;\" tabindex=\"0\" data-language=\"rust\"><code><span class=\"line\"><span style=\"color:#FFC799\">fn</span><span style=\"color:#FFC799\"> main</span><span style=\"color:#FFF\">() {</span></span>\n<span class=\"line\"><span style=\"color:#FFC799\">    get_image</span><span style=\"color:#FFF\">(</span><span style=\"color:#99FFE4\">\"rick.png\"</span><span style=\"color:#FFF\">, </span><span style=\"color:#FFC799\">2</span><span style=\"color:#FFF\">);</span></span>\n<span class=\"line\"><span style=\"color:#FFF\">}</span></span>\n<span class=\"line\"></span></code></pre>\n<p>The <code>main</code> function is the entry point of our program. Here, it calls the <code>get_image</code> function with the path to your image (“rick.png”) and a scaling factor of 2. You can adjust the scaling factor to control the detail level of the resulting ASCII art.</p>\n<p><strong>Running the Program:</strong></p>\n<ol>\n<li>Save the code in a Rust file (e.g., <code>ascii_art.rs</code>).</li>\n<li>Open your terminal, navigate to the directory containing your Rust file, and run <code>cargo run</code>.</li>\n</ol>\n<p>This will execute the program, analyze the image, and print the corresponding ASCII art representation in your terminal.</p>\n<p>Here’s mine:</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./rick.png&#x22;,&#x22;alt&#x22;:&#x22;Rick Sanchez&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>and the <a href=\"https://github.com/x0bd/rascii\">Source Code</a>.</p>\n<p><strong>And There You Have It!</strong></p>\n<p>With this code, you’ve built a simple yet effective ASCII art generator in Rust. Experiment with different images and scaling factors to see how they affect the output.</p>\n<p><strong>Thank You and Keep Creating!</strong></p>");
	

				const frontmatter = {"title":"Build a Terminal Ascii Art Generator with Rust","description":"I built a blazingly fast terminal ascii art generator.","date":"Feb 10 2024"};
				const file = "C:/Users/synth/Dojo/oss/xoboid/src/content/blog/terminal-art/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nI've been playing around with [p5.js](https://p5js.org/) for creating generative sketches, and the urge to experiment with ASCII art struck. I built a browser based ascii art generator with p5.js, but the performance was abysmal. This led me down the path of building one with Rust, and let me tell you, it was a revelation. The Rust version was **blazingly** fast, super lightweight, and surprisingly straightforward to create.\r\n\r\nNow, let's dive in and see how you can build your own terminal ASCII art generator in Rust!\r\n\r\n## Setting Up the Project\r\n\r\n1. **Create a new Rust project:**\r\n\r\n    Open your terminal and run `cargo init <project_name>`. Replace `<project_name>` with your desired name (e.g., `rascii`). This command creates the basic structure for your Rust project.\r\n\r\n2. **Add Dependencies:**\r\n\r\n    We'll be using the `image` crate to handle image manipulation. Add the following line to your `Cargo.toml` file located in the project root directory:\r\n\r\n    ```toml\r\n    [dependencies]\r\n    image = \"0.25.0\"\r\n    ```\r\n\r\n3. **Install Dependencies:**\r\n\r\n    Run `cargo build` in your terminal to download and install the `image` crate for your project.\r\n\r\n## Understanding the Code\r\n\r\nNow, let's break down the core functionality of the code step-by-step:\r\n\r\n**1. Importing the `image` crate:**\r\n\r\n```rust\r\nuse image::{ GenericImageView };\r\n```\r\n\r\nThis line brings the functionality of the `image` crate into scope for our program. We use the `GenericImageView` trait, which allows us to work with different image formats.\r\n\r\n**2. `get_ascii` Function:**\r\n\r\n```rust\r\nfn get_ascii(intent: u8) -> &'static str {\r\n    let index = intent / 32;\r\n    let ascii = [\" \", \".\", \",\", \"-\", \"~\", \"+\", \"=\", \"@\"];\r\n    return ascii[index as usize];\r\n}\r\n```\r\n\r\nThis function takes an `intent` value (represented as an unsigned 8-bit integer) and converts it into an ASCII character representing the brightness level.\r\n\r\n-   `intent` is calculated by averaging the red, green, and blue (RGB) values of a pixel.\r\n-   The function uses a pre-defined array `ascii` containing various characters representing different brightness levels. (\" \" for darkest, \"@\" for brightest).\r\n-   It divides `intent` by 32 to get an index into the `ascii` array.\r\n-   Finally, it returns the corresponding ASCII character at that index.\r\n\r\n**3. `get_image` Function:**\r\n\r\n```rust\r\nfn get_image(dir: &str, scale: u32) {\r\n    let img = image::open(dir).unwrap();\r\n    let (width, height) = img.dimensions();\r\n    for y in 0..height {\r\n        for x in 0..width {\r\n            if y % (scale * 2) == 0 && x % scale == 0 {\r\n                let pix = img.get_pixel(x, y);\r\n                let mut intent = pix[0] / 3 + pix[1] / 3 + pix[2] / 3;\r\n                if pix[3] == 0 {\r\n                    intent = 0;\r\n                }\r\n                print!(\"{}\", get_ascii(intent));\r\n            }\r\n        }\r\n        if y % (scale * 2) == 0 {\r\n            println!(\"\");\r\n        }\r\n    }\r\n}\r\n```\r\n\r\nThis function handles loading and processing the image:\r\n\r\n-   It takes the image path (`dir`) and a scaling factor (`scale`) as arguments.\r\n-   It opens the image using `image::open` and gets its dimensions (`width` and `height`).\r\n-   It iterates through each pixel (represented by `x` and `y` coordinates). However, it only processes pixels at specific intervals determined by the `scale` value. This helps reduce the number of pixels analyzed and creates a blockier but faster ASCII representation.\r\n-   For each selected pixel, it retrieves its RGB values using `img.get_pixel(x, y)`.\r\n-   It calculates the average brightness (`intent`) by dividing the sum of RGB values by 3.\r\n-   If the alpha channel value (`pix[3]`) is 0 (indicating a transparent pixel), it sets the `intent` to 0 (completely black).\r\n-   The function calls `get_ascii` with the calculated `intent` to get the corresponding ASCII character.\r\n\r\n**4. `main` Function:**\r\n\r\n```rust\r\nfn main() {\r\n    get_image(\"rick.png\", 2);\r\n}\r\n```\r\n\r\nThe `main` function is the entry point of our program. Here, it calls the `get_image` function with the path to your image (\"rick.png\") and a scaling factor of 2. You can adjust the scaling factor to control the detail level of the resulting ASCII art.\r\n\r\n**Running the Program:**\r\n\r\n1. Save the code in a Rust file (e.g., `ascii_art.rs`).\r\n2. Open your terminal, navigate to the directory containing your Rust file, and run `cargo run`.\r\n\r\nThis will execute the program, analyze the image, and print the corresponding ASCII art representation in your terminal.\r\n\r\nHere's mine:\r\n\r\n![Rick Sanchez](./rick.png)\r\n\r\nand the [Source Code](https://github.com/x0bd/rascii).\r\n\r\n**And There You Have It!**\r\n\r\nWith this code, you've built a simple yet effective ASCII art generator in Rust. Experiment with different images and scaling factors to see how they affect the output.\r\n\r\n**Thank You and Keep Creating!**\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"setting-up-the-project","text":"Setting Up the Project"},{"depth":2,"slug":"understanding-the-code","text":"Understanding the Code"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
