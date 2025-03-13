<script lang="ts">
  import { formatDate } from '$lib/utils'
  import * as config from '$lib/config'
  import PostList from '$lib/components/PostList.svelte';


  export let data

</script>

<!-- SEO -->
<svelte:head>
	<title>{`${config.title}: ${data.slug}`}</title>
  <meta property="og:site_name" content={`${config.title}: ${data.slug}`} />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content={config.url} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={`${config.title}: ${data.slug}`} />
  <meta property="og:description" content={data?.meta?.description ? data.meta.description : config.description} />
  <meta property="og:image" content={data?.meta?.image ? `./${data.meta.image}` : `./social.jpg`} />
  <meta property="og:image:alt" content="social img" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
<!-- Posts -->
<!-- {#if !isPage} -->
<div class="post">
  {#if data.page}
  <div class="content">

    <h2>{data.page.meta.title}</h2>
    <!-- <hgroup>
    </hgroup> -->
    <content class="prose">
      <svelte:component this={data.page.content} />
    </content>
    <p>Last edited: {formatDate(data.page.meta.date)}</p>
  </div>

    {#if data.posts.length > 0}
    <hgroup>
      <hr/>
      <h2>Backlinks</h2>
    </hgroup>
    {/if}
  {/if}

</div>

{#if data.posts.length > 0}
<PostList posts={data.posts} />
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
