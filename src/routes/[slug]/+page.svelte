<script lang="ts">
  import { formatDate } from '$lib/utils'
  import * as config from '$lib/config'
  import PostList from '$lib/components/PostList.svelte';


  export let data

</script>

<!-- SEO -->
<svelte:head>
	<title>{`${config.title} : ${data.page?.meta.title || data.slug}`}</title>
  <meta property="og:site_name" content={`${config.title} : ${data.page?.meta.title || data.slug}`} />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content={config.url} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={`${config.title}: ${data.slug}`} />
  <meta property="og:description" content={data?.page?.meta?.description ? data.page.meta.description : config.description} />
  <meta property="og:image" content={data?.page?.meta?.image ? `https://adamplouff.com/${data.page.meta.image}` : `https://adamplouff.com/social.png`} />
  <meta property="og:image:alt" content="social img" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
<!-- Posts -->
<!-- {#if !isPage} -->


{#if data.posts.length > 0}
<PostList posts={data.posts} />
{:else}
<div class="post">
  {#if data.page}
  <div class="content">

    <h2>{data.page.meta.title}</h2>
    <div class="tags">
      {#each data.page.tags as tag}
      <a href={`/${tag}`}>
        <span>
          &num;{tag}
        </span>
      </a>
      {/each}
    </div>

    <!-- <hgroup>
    </hgroup> -->
    <content class="prose">
      <svelte:component this={data.page.content} />
    </content>
    <p>posted: {formatDate(data.page.meta.date)}</p>
  </div>

    {#if data.posts.length > 0}
    <hgroup>
      <hr/>
      <h2>Backlinks</h2>
    </hgroup>
    {/if}
  {/if}

</div>
{/if}
<!-- {:else}
<section>
  {#if data.meta?.title}
  <hgroup>
    <h2>{data.meta.title}</h2>
  </hgroup>
  {/if}
  <content class="prose">
    <svelte:component this={data.content} />
  </content>
  <p>Last edited: {formatDate(data.meta?.date)}</p>
</section>

{/if} -->

<style>

.post {
  width: 100%;
  display: flex;
  justify-content: center;
}
.content {
  width: 100%;
  max-width: 672px;
  display: flex;
  flex-direction: column;
  gap: 2em;
}
</style>
