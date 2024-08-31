<script lang="ts">
	import * as config from '$lib/config'

  import { audioStore } from '$lib/stores/audioStore';

  let trackTitle = ''
  let trackDuration = 0
  let isPlaying = false

  let audioFile: HTMLAudioElement

  const playTrack = (updatePlaying?: boolean) => {
    if (audioFile) {
      audioFile.play()
    }
    if (updatePlaying) {
      isPlaying = true
    }
  }
  const pauseTrack = (updatePlaying?: boolean) => {
    if (audioFile) {
      audioFile.pause()
    }
    if (updatePlaying) {
      isPlaying = false
    }
  }

  const loadTrack = (url: string, title: string) => {
    pauseTrack()

    audioFile = new Audio(url)
    trackTitle = title
    audioFile.onloadedmetadata = () => {
			trackDuration = audioFile.duration;
			// updateTime();

      if (isPlaying) {
        audioFile.play()
      }
		}
  }

  audioStore.subscribe(value => {
    isPlaying = value.playing
    if (isPlaying) { playTrack() } else { pauseTrack() }

    if (value.file && value.title !== trackTitle) {
      loadTrack(value.file, value.title)
    }
  });





</script>

<player>
	Player: {trackTitle}
  {#if isPlaying}
    <button on:click={() => {pauseTrack(true) }}>| |</button>
  {:else}
    <button on:click={() => {playTrack(true) }}>▶</button>
  {/if}
</player>

<style>
	player {
    position: fixed;
    bottom: 0;
    background-color: #111;
		padding-block: var(--size-7);
	}
</style>
