import { error } from '@sveltejs/kit'
import type { Post } from '$lib/types'

export async function load({ fetch, params }) {
  const slug = params.slug

  try {
    let page = undefined
    try {
      const pageData = await import(`../../adamplouff_vault/notes/${params.slug}.md`)

      page = (pageData) ? {
        content: pageData.default,
        meta: pageData.metadata,
        slug: params.slug
      } : undefined
    } catch (e) { console.log(e); }


    const response = await fetch('api/posts')
    const posts: Post[] = await response.json()

    // each post contains a property 'categories' as an array of strings. return all pages contain the slug in the categories array
    const filteredPosts = posts
    // filter out posts with empty tags
    .filter(post => post.tags)
    .filter(post => post.tags.includes(slug))
    return {
      page,
      posts: filteredPosts,
      slug
    }
  } catch (e) {
    error(404, `Could not find ${slug}`)
  }
}
