<script lang="ts">
	export let src: string
	export let alt: string

  const relativeSrc = `../${src}`
</script>

<img src={relativeSrc} {alt} loading="lazy" />
