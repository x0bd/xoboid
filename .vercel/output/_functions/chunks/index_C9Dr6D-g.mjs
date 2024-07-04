/* empty css                          */
import { s as createComponent, t as renderTemplate, u as renderComponent, v as maybeRenderHead } from './astro/server_CMv_d3ee.mjs';
import { g as getCollection } from './_astro_content_U02kxNEe.mjs';
import { $ as $$Container, a as $$PageLayout } from './PageLayout_CyJO_9HJ.mjs';
import { $ as $$ArrowCard } from './ArrowCard_B7FR7XKn.mjs';
import { P as PROJECTS } from './consts_D65tU1yI.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": PROJECTS.TITLE, "description": PROJECTS.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="space-y-10"> <div class="animate font-semibold text-black dark:text-white">
Projects
</div> <ul class="animate flex flex-col gap-4"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": project })} </li>`)} </ul> </div> ` })} ` })}`;
}, "C:/Users/synth/Dojo/oss/xoboid/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/synth/Dojo/oss/xoboid/src/pages/projects/index.astro";
const $$url = "/projects";

export { $$Index as default, $$file as file, $$url as url };
