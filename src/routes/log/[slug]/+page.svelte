<script lang="ts">
  import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'

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
      file: `../${data.file}`,
      playing: true
    }
    console.log(playingData);
    audioStore.set(playingData);
  }
</script>

<!-- SEO -->
<svelte:head>
	<title>{`${config.title}: ${data.meta.title}`}</title>
  <meta property="og:site_name" content={config.title} />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content={config.url} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={`${config.title}: ${data.meta.title}`} />
  <meta property="og:description" content={data.meta.description || config.description} />
  <meta property="og:image" content={data.meta.image ? `../${data.meta.image}` : `../social.jpg`} />
  <meta property="og:image:alt" content="social img" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<article>
  <div>
    <!-- back button -->
    <a class="button" href="/log">← Back</a>
  </div>
  <!-- Title -->
	<hgroup>
    <p>/////////////////</p>
		<h2>{data.meta.title}</h2>
		<p>{formatDate(data.meta.date)}</p>
    <p>/////////////////</p>
	</hgroup>

  <!-- Tags -->
	<div class="tags">
		{#each data.meta.tags as tag}
      <a href={`/${tag}`}>
			  <span>
          &num;{tag}
        </span>
      </a>
		{/each}
	</div>

  {#if data.meta.tags.includes('listen')}
    <div>
      <button on:click={() => playAudio(data.meta)}>▶</button>
    </div>
  {/if}
  <!-- {#if data.meta.image}
    <div>
      <img src={`../${data.meta.image}`} alt="">
    </div>
  {/if} -->

  <!-- Post -->
	<content class="prose">
		<svelte:component this={data.content} />
	</content>
</article>

<style>
	article {
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}
</style>
