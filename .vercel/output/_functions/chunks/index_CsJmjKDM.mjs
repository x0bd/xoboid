/* empty css                          */
import { s as createComponent, t as renderTemplate, u as renderComponent, v as maybeRenderHead } from './astro/server_CMv_d3ee.mjs';
import { g as getCollection } from './_astro_content_U02kxNEe.mjs';
import { $ as $$Container, a as $$PageLayout } from './PageLayout_CyJO_9HJ.mjs';
import { $ as $$ArrowCard } from './ArrowCard_B7FR7XKn.mjs';
import { B as BLOG } from './consts_D65tU1yI.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const posts = data.reduce((acc, post) => {
    const year = post.data.date.getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
  const years = Object.keys(posts).sort((a, b) => parseInt(b) - parseInt(a));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": BLOG.TITLE, "description": BLOG.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="space-y-10"> <div class="animate font-semibold text-black dark:text-white">
Blog
</div> <div class="space-y-4"> ${years.map((year) => renderTemplate`<section class="animate space-y-4"> <div class="font-semibold text-black dark:text-white"> ${year} </div> <div> <ul class="flex flex-col gap-4"> ${posts[year].map((post) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": post })} </li>`)} </ul> </div> </section>`)} </div> </div> ` })} ` })}`;
}, "C:/Users/synth/Dojo/oss/xoboid/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/synth/Dojo/oss/xoboid/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
