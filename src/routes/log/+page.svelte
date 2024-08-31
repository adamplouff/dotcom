<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data

  import { audioStore } from '$lib/stores/audioStore';

  let playingData = {
    title: '',
    file: '',
    playing: false
  }

  function playAudio(data) {
    playingData = {
      title: data.title,
      file: data.file,
      playing: true
    }
    audioStore.set(playingData);
  }

  function stopAudio() {
    playingData.playing = false
    audioStore.set(playingData);
  }
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
          <button on:click={() => playAudio(post)}>▶</button>
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
</style>
