/* empty css                          */
import { w as createAstro, s as createComponent, t as renderTemplate, u as renderComponent, v as maybeRenderHead } from './astro/server_CMv_d3ee.mjs';
import { g as getCollection } from './_astro_content_U02kxNEe.mjs';
import { a as $$PageLayout, $ as $$Container, r as readingTime, b as $$Link } from './PageLayout_CyJO_9HJ.mjs';
import { $ as $$BackToPrev, a as $$FormattedDate } from './BackToPrev_D7u6tZI8.mjs';

const $$Astro = createAstro("https://xoboid.vercel.app");
async function getStaticPaths() {
  const projects = (await getCollection("projects")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: project
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const project = Astro2.props;
  const { Content } = await project.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": project.data.title, "description": project.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrev", $$BackToPrev, { "href": "/projects" }, { "default": ($$result4) => renderTemplate`
Back to projects
` })} </div> <div class="space-y-1 my-10"> <div class="animate flex items-center gap-1.5"> <div class="font-base text-sm"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": project.data.date })} </div>
&bull;
<div class="font-base text-sm"> ${readingTime(project.body)} </div> </div> <div class="animate text-2xl font-semibold text-black dark:text-white"> ${project.data.title} </div> ${(project.data.demoURL || project.data.repoURL) && renderTemplate`<nav class="animate flex gap-1"> ${project.data.demoURL && renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": project.data.demoURL, "external": true }, { "default": ($$result4) => renderTemplate`
demo
` })}`} ${project.data.demoURL && project.data.repoURL && renderTemplate`<span>/</span>`} ${project.data.repoURL && renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": project.data.repoURL, "external": true }, { "default": ($$result4) => renderTemplate`
repo
` })}`} </nav>`} </div> <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "C:/Users/synth/Dojo/oss/xoboid/src/pages/projects/[...slug].astro", void 0);

const $$file = "C:/Users/synth/Dojo/oss/xoboid/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
