<script lang="ts">
	import * as config from '$lib/config'
  import Toggle from './toggle.svelte'
</script>

<nav>
  <!-- Title -->
  <p>

    <a href="/" class="title">
      <span>{config.title}</span>
    </a>
    ::
    <a href="/about">about</a>
  </p>

  <!-- Navigation -->
	<!-- <ul class="links">
    <li>
      <a href="/log">Log</a>
    </li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">RSS</a>
		</li>
	</ul> -->

  <!-- Theme -->
  <Toggle />
</nav>

<style>
	nav {
    width: -webkit-fill-available;
    position: fixed;
    top: 0;
    left: 0;
		/* padding-block: var(--size-7); */
    display: flex;
    justify-content: space-between;
    mix-blend-mode: difference;
    padding: var(--size-3) var(--size-7);
    /* padding: 8px; */
	}

	.links {
    display: flex;
    gap: var(--size-3);
		/* margin-block: var(--size-7); */
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	/* mobile */
  @media (max-width: 600px) {
    nav {
      padding: 8px;
    }
  }
</style>
