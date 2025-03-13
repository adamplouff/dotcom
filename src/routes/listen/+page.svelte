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

  // subscribe to audioStore to get the current playing track
  let currentTrack = '';
  audioStore.subscribe(value => {
    currentTrack = value.title;
  });

</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
	<div class="posts">
		{#each data.posts as track}
    <button class="play-track" on:click={() => playAudio(track)}>
      <p>{ (track.title == currentTrack) ? '+' : '' }</p>
      <p>{formatDate(track.date)}</p>
      <p>{track.title}</p>
      <!-- <p>+</p> -->
    </button>
		{/each}
	</div>
</section>

<style>
	.play-track {
    display: grid;
    grid-template-columns: 0.2fr 1fr 3fr 1fr;
    justify-items: start;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
  }

</style>
