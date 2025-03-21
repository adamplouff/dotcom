<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
  import PostList from '$lib/components/PostList.svelte';

	export let data


</script>

<svelte:head>
	<title>{config.title}</title>
  <meta property="og:site_name" content={config.title} />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content={config.url} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={config.title} />
  <meta property="og:description" content={config.description} />
  <meta property="og:image" content={`https://adamplouff.com/social.png`} />
  <meta property="og:image:alt" content="social img" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<!-- Posts -->
<section>
  <PostList posts={data.posts} />
</section>

<style>

</style>
