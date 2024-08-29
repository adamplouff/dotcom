import * as config from '$lib/config'
import { Feed } from "feed";
import { getArticles } from '$lib/getArticles';

// export const prerender = true

export async function GET() {
  const feed = new Feed({
    title: config.title,
    description: config.description,
    id: config.url,
    link: config.url,
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    favicon: `${config.url}favicon.ico`,
    copyright: `Copyright ${new Date().getFullYear().toString()}, Adam Plouff`,
    generator: "🍉", // optional, default = 'Feed for Node.js'
    feedLinks: {
      rss: `${config.url}rss.xml`,
    },
    author: {
      name: "Adam Plouff",
      email: "adamplouff@gmail.com",
      link: `${config.url}whoami`,
    },
    ttl: 60,
  });

  const articles = await getArticles();

  for (const article of articles) {
    feed.addItem({
      title: article.title,
      id: `${config.url}/${article.slug}`,
      link: `${config.url}/${article.slug}`,
      description: article.description,
      content: article.content,
      author: [
        {
          name: "Adam Plouff",
          email: "",
          link: `${config.url}whoami`,
        },
      ],
      date: new Date(article.date),
    });
  }



  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
