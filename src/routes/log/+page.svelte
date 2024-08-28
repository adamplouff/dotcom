<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
  console.log(`%cdata`,`color: white; background: #d97706; padding: 2px 4px; border-radius: 4px;`, data)
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={`log/${post.slug}`} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<!-- <p class="description">{post.description}</p> -->
        <!-- if the categories contains listen, show a music player for file -->
        {#if post.categories.includes('listen')}
          <audio controls>
            <source src={post.file} type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        {:else}
          <img src={post.image} alt="">
          <p class="description">{post.description}</p>
        {/if}
			</li>
		{/each}
	</ul>
</section>

<style>
  .posts {
    list-style: none;
    padding: 0;
  }

  .post {
    margin-bottom: 2rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .date {
    font-size: 0.8rem;
    color: #666;
  }

  .description {
    margin-top: 1rem;
  }

  audio {
    width: 100%;
  }
</style>
