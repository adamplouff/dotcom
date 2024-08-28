import type { Post } from '$lib/types'

export async function load({ fetch, params }) {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()

  // each post contains a property 'categories' as an array of strings. return all pages contain the slug in the categories array
  const slug = params.slug
  const filteredPosts = posts.filter(post => post.categories.includes(slug))
	return { posts: filteredPosts }
}
