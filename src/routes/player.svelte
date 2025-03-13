<script lang="ts">
	import * as config from '$lib/config'

  import { audioStore } from '$lib/stores/audioStore';

  let trackTitle = ''
  let trackDuration = 0
  let trackTime = 0
  let displayDuration = '0'
  let displayTime = '0'
  let isPlaying = false
  let trackTimer: Timeout | null = null

  let audioFile: HTMLAudioElement

  const playTrack = (updatePlaying?: boolean) => {
    if (audioFile) {
      audioFile.play()
    }
    if (updatePlaying) {
      isPlaying = true
      trackTimer = setInterval(() => { updateTime() }, 300);
    }
  }
  const pauseTrack = (updatePlaying?: boolean) => {
    if (audioFile) {
      audioFile.pause()
      clearInterval(trackTimer)
      console.log('paused');

    }
    if (updatePlaying) {
      isPlaying = false
    }
  }

  const loadTrack = (url: string, title: string) => {
    if (isPlaying) {pauseTrack()}
    console.log('load', url, title);

    audioFile = new Audio(url)
    trackTitle = title
    audioFile.onloadedmetadata = () => {

      clearInterval(trackTimer)
      trackTimer = setInterval(() => { updateTime() }, 300);

      playTrack()
		}
  }

  const updateTime = () => {
    trackDuration = audioFile.duration;
    trackTime = audioFile.currentTime;

    // console.log(trackTime, trackDuration);

    const minutes = Math.floor(audioFile.currentTime / 60);
    const seconds = Math.floor(audioFile.currentTime - minutes * 60);
    displayTime = `${padTwoDigits(minutes)}:${padTwoDigits(seconds)}`;

    const durationMinutes = Math.floor(audioFile.duration / 60);
    const durationSeconds = Math.floor(audioFile.duration - durationMinutes * 60);
    displayDuration = `${padTwoDigits(durationMinutes)}:${padTwoDigits(durationSeconds)}`;
  }

  const padTwoDigits = (num: number) => {
    return num.toString().padStart(2, '0')
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
	{trackTitle} : {displayTime} / {displayDuration}
  {#if isPlaying}
    <button on:click={() => {pauseTrack(true) }}>⏸︎</button>
  {:else}
    <button on:click={() => {playTrack(true) }}>⏵︎</button>
  {/if}
  <div class="progress">
    <div class="progress-bar" style:width={`${trackTime/trackDuration * 100}%`}></div>
  </div>
</player>

<style>
	player {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #111;
    padding: 1em 2em;
    width: 100vw;
	}

  .progress {
    background-color: black;
    width: 100%;
    border: 1px solid white;
    padding: 2px;
  }
  .progress-bar {
    background-color: white;
    height: 3px;
  }
</style>
