<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
  // import Player from './player.svelte'

	import 'open-props/style'
	// import 'open-props/normalize'
	import 'open-props/buttons'

	import '../app.css'
</script>

<div class="layout">
  <!-- Header -->
	<Header />

	<main>
    <div class="blood"></div>
		<!-- Black hole for other content -->
		<slot />
	</main>

  <!-- Footer -->
	<Footer />

  <!-- <Player/> -->
</div>

<style>
	.layout {
		height: 100%;
		/* display: grid;
		grid-template-rows: auto 1fr auto; */
    display: flex;
    flex-direction: column;
		margin: var(--size-7);
    padding-top: var(--size-8);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
  /* mobile */
  @media (max-width: 600px) {
    .layout {
      margin: 8px;
      /* padding-top: var(--size-7); */
    }
  }
</style>
