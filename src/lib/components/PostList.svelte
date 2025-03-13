<script lang="ts">
  import { formatDate } from '$lib/utils'

  export let posts: {
    title: string,
    slug: string,
    date: string,
    description?: string,
    tags: string[],
    image?: string
  }[]

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

<div class="posts">
  {#each posts as post}
  <div class="post">
    <div class="image">
      {#if post.tags.includes('listen')}
        <button on:click={() => playAudio(post)}>▶</button>
      {:else}
      <a href={`${post.slug}`}>
        <img src={post.image} alt="">
      </a>
      {/if}
    </div>

    <div class="title">
      <a href={`${post.slug}`}>{post.title}</a>
      <p class="date">{formatDate(post.date)}</p>
    </div>

    <div class="description">
      {#if post.description}
        <p>{post.description}</p>
      {/if}
    </div>

    <div class="tags">
      {#each post.tags as tag}
      <a href={`/${tag}`}>
        <span>
          &num;{tag}
        </span>
      </a>
      {/each}
    </div>
  </div>
  {/each}
</div>

<style>
  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 3rem;
    padding-bottom: 128px;
  }
  .post {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .title {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .date {
    font-size: 0.8rem;
    color: #666;
  }

  .description {
    /* margin-top: 1rem; */
    /* truncate text after 100 characters */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
</style>
