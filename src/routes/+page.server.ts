import type { Post } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()

  const filteredPosts = posts
    // filter out posts with empty tags
    .filter(post => post.tags)

	return { posts: filteredPosts }
}
