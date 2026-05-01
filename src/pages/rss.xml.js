// smart-side RSS feed
// /rss.xml で配信（BaseLayout の <link rel="alternate"> から参照）
// 4条件①匿名遵守：author 欄を出さない

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = [...posts].sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );

  return rss({
    title: 'smart-side',
    description:
      '「要らない9割」を捨てる、最低限スターターキット。AI・投資・IT、非エンジニアが書くミニマム実装メディア。',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.description ?? '',
      link: `/posts/${post.id}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: '<language>ja-jp</language>',
  });
}
