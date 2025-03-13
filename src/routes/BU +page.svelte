<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	// export let data
</script>

<svelte:head>
	<title>{config.title}</title>
  <meta property="og:site_name" content={config.title} />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content={config.url} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={config.title} />
  <meta property="og:description" content={config.description} />
  <meta property="og:image" content="./social.jpg" />
  <meta property="og:image:alt" content="social img" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>


<div class="prose">
  <h1>{config.title.toLowerCase()}</h1>
  <p>Archmage of simplicity</p>
  <p>Ruler of the kingdom of <a href="http://battleaxe.co" target="_blank" rel="noopener noreferrer">Battleaxia</a></p>
  <p></p>
  <p>This site is very WIP. It is built with SvelteKit and Obsidian (<a href="https://github.com/adamplouff/dotcom" target="_blank" rel="noopener noreferrer">source</a>).</p>
</div>

<style>

</style>
