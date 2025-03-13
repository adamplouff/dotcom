import type { Post } from '$lib/types'

export async function load({ fetch, params }) {
	const response = await fetch('api/tracks')
	const posts: Post[] = await response.json()

  // each post contains a property 'tags' as an array of strings. return all pages contain the slug in the tags array
  const slug = 'listen'

	return { posts }
}
