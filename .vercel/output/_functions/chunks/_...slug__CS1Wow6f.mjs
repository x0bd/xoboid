/* empty css                          */
import { w as createAstro, s as createComponent, t as renderTemplate, u as renderComponent, v as maybeRenderHead } from './astro/server_CMv_d3ee.mjs';
import { g as getCollection } from './_astro_content_U02kxNEe.mjs';
import { a as $$PageLayout, $ as $$Container, r as readingTime } from './PageLayout_CyJO_9HJ.mjs';
import { $ as $$BackToPrev, a as $$FormattedDate } from './BackToPrev_D7u6tZI8.mjs';

const $$Astro = createAstro("https://xoboid.vercel.app");
async function getStaticPaths() {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": post.data.title, "description": post.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrev", $$BackToPrev, { "href": "/blog" }, { "default": ($$result4) => renderTemplate`
Back to blog
` })} </div> <div class="space-y-1 my-10"> <div class="animate flex items-center gap-1.5"> <div class="font-base text-sm"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": post.data.date })} </div>
&bull;
<div class="font-base text-sm"> ${readingTime(post.body)} </div> </div> <div class="animate text-2xl font-semibold text-black dark:text-white"> ${post.data.title} </div> </div> <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "C:/Users/synth/Dojo/oss/xoboid/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/synth/Dojo/oss/xoboid/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
