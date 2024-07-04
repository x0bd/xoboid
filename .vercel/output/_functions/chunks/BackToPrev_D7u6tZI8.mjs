import { w as createAstro, s as createComponent, t as renderTemplate, v as maybeRenderHead, x as addAttribute, z as renderSlot } from './astro/server_CMv_d3ee.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://xoboid.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-uk", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </time>`;
}, "C:/Users/synth/Dojo/oss/xoboid/src/components/FormattedDate.astro", void 0);

const $$Astro = createAstro("https://xoboid.vercel.app");
const $$BackToPrev = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BackToPrev;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="relative group w-fit flex pl-7 pr-3 py-1.5 flex-nowrap rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute top-1/2 left-2 -translate-y-1/2 size-4 stroke-2 fill-none stroke-current"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-2 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></line> <polyline points="12 5 5 12 12 19" class="translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></polyline> </svg> <div class="text-sm"> ${renderSlot($$result, $$slots["default"])} </div> </a>`;
}, "C:/Users/synth/Dojo/oss/xoboid/src/components/BackToPrev.astro", void 0);

export { $$BackToPrev as $, $$FormattedDate as a };
