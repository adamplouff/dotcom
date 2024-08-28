<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<article>

  <img src="/profile.jpg" alt="Adam" class="rounded-full w-32 h-32 mx-auto mb-4" />

  <p>My name is Adam and I write nonsense.
    <a href="/music">music</a>,
    <a href="/til">learnings</a>,
    <a href="https://battleaxe.co">code</a>,
    <a href="/log">everything</a>.
  </p>
</article>


<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

</style>
