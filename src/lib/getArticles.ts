// import fetch from 'node-fetch';

export async function getArticles() {
  const apiUrl = 'https://adamplouff.com/api/posts';
  const response = await fetch(apiUrl);
  const articles = await response.json();

  let posts = [];

  for (const article of articles) {
    const slug = article.slug;
    const postUrl = `https://adamplouff.com/log/${slug}`;
    const postResponse = await fetch(postUrl);
    const postContent = await postResponse.text();
    const contentMatch = postContent.match(/<content[^>]*>([\s\S]*?)<\/content>/);
    let content = contentMatch ? contentMatch[1] : '';

    // remove data-svelte-h="*" attributes
    content = content.replace(/data-svelte-h=".*?"/g, '');

    // replace img src="../ with img src="https://adamplouff.com/
    content = content.replace(/img src="\.\.\//g, 'img src="https://adamplouff.com/');


    // console.log(`Content of ${slug}: ${postContent}`);

    posts.push({
      title: article.title,
      slug: article.slug,
      description: article.description,
      content,
      date: article.date,
    });
  }

  return posts;
}
