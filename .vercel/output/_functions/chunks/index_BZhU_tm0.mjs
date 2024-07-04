/* empty css                          */
import { s as createComponent, t as renderTemplate, u as renderComponent, v as maybeRenderHead } from './astro/server_CMv_d3ee.mjs';
import { g as getCollection } from './_astro_content_U02kxNEe.mjs';
import { $ as $$Container, b as $$Link, a as $$PageLayout } from './PageLayout_CyJO_9HJ.mjs';
import { $ as $$ArrowCard } from './ArrowCard_B7FR7XKn.mjs';
import { S as SITE, a as SOCIALS, H as HOME } from './consts_D65tU1yI.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blog = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, SITE.NUM_POSTS_ON_HOMEPAGE);
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, SITE.NUM_PROJECTS_ON_HOMEPAGE);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": HOME.TITLE, "description": HOME.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-start items-center gap-5"> <img src="/xoboid.jpg" alt="xoboid" class="h-20 w-20 rounded-full animate"> <div class="flex flex-col"> <h2 class="animate font-semibold text-black dark:text-white">
Tinodaishe Tembo
</h2> <h2 class="animate">design engineer</h2> </div> </div> <div class="space-y-16 mt-10"> <section> <article class="space-y-4 animate"> <h5 class="animate font-semibold text-black dark:text-white">
Profile
</h5> <p class="animate">
Hello! there, I'm Tino. I'm a <strong>programmer</strong> and <strong>designer</strong> who enjoys experimenting
						with <strong>code</strong> and <strong>pixels</strong> to
						weave <strong>magic</strong>. With a <strong>pixel-perfect</strong> obsession and deep love for <strong>good design</strong>, I utilize my proficiency in TypeScript and Rust to <strong>build</strong> whatever I want: web, computer graphics and <strong>misc</strong>.
</p> <p class="animate">
When I step away from my <strong>computer</strong>, I
						find solace in learning <strong>日本語</strong> and immersing
						myself in science fiction, with <strong>Neuromancer</strong> and Dune holding a special place in my heart.
</p> </article> </section> <section class="animate space-y-6"> <div class="flex flex-wrap gap-y-2 items-center justify-between"> <h5 class="font-semibold text-black dark:text-white">
Recent Projects
</h5> ${renderComponent($$result3, "Link", $$Link, { "href": "/projects" }, { "default": ($$result4) => renderTemplate` See all projects ` })} </div> <ul class="flex flex-col gap-4"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": project })} </li>`)} </ul> </section> <section class="animate space-y-6"> <div class="flex flex-wrap gap-y-2 items-center justify-between"> <h5 class="font-semibold text-black dark:text-white">
Latest posts
</h5> ${renderComponent($$result3, "Link", $$Link, { "href": "/blog" }, { "default": ($$result4) => renderTemplate` See all posts ` })} </div> <ul class="flex flex-col gap-4"> ${blog.map((post) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": post })} </li>`)} </ul> </section> <section class="animate space-y-4"> <h5 class="font-semibold animate text-black dark:text-white">
Let's Connect
</h5> <article> <p>
If you want to get in touch with me about something or
						just to say hi, reach out on social media or send me an
						email.
</p> </article> <ul class="flex flex-wrap gap-2"> ${SOCIALS.map((SOCIAL) => renderTemplate`<li class="flex gap-x-2 text-nowrap"> ${renderComponent($$result3, "Link", $$Link, { "href": SOCIAL.HREF, "external": true, "aria-label": `${SITE.NAME} on ${SOCIAL.NAME}` }, { "default": ($$result4) => renderTemplate`${SOCIAL.NAME}` })} ${"/"} </li>`)} <li class="line-clamp-1"> ${renderComponent($$result3, "Link", $$Link, { "href": `mailto:${SITE.EMAIL}`, "aria-label": `Email ${SITE.NAME}` }, { "default": ($$result4) => renderTemplate`${SITE.EMAIL}` })} </li> </ul> </section> </div> ` })} ` })}`;
}, "C:/Users/synth/Dojo/oss/xoboid/src/pages/index.astro", void 0);

const $$file = "C:/Users/synth/Dojo/oss/xoboid/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
