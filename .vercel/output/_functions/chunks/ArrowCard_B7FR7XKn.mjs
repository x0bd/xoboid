import { w as createAstro, s as createComponent, t as renderTemplate, v as maybeRenderHead, x as addAttribute } from './astro/server_CMv_d3ee.mjs';
import 'clsx';

const $$Astro = createAstro("https://xoboid.vercel.app");
const $$ArrowCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArrowCard;
  const { entry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${entry.collection}/${entry.slug}`, "href")} class="relative group flex flex-nowrap py-3 px-4 pr-10 rounded-lg border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"> <div class="flex flex-col flex-1 truncate"> <div class="font-semibold"> ${entry.data.title} </div> <div class="text-sm"> ${entry.data.description} </div> </div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute top-1/2 right-2 -translate-y-1/2 size-5 stroke-2 fill-none stroke-current"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></line> <polyline points="12 5 19 12 12 19" class="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></polyline> </svg> </a>`;
}, "C:/Users/synth/Dojo/oss/xoboid/src/components/ArrowCard.astro", void 0);

export { $$ArrowCard as $ };
