import rss from '@astrojs/rss';
import { g as getCollection } from './_astro_content_U02kxNEe.mjs';
import { H as HOME } from './consts_D65tU1yI.mjs';

async function GET(context) {
  const blog = (await getCollection("blog")).filter(
    (post) => !post.data.draft
  );
  const projects = (await getCollection("projects")).filter(
    (project) => !project.data.draft
  );
  const items = [...blog, ...projects].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`
    }))
  });
}

export { GET };
