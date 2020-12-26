<script>
	import { fade } from 'svelte/transition';
	import { customtransition } from "$components/transition"
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content" in:customtransition out:fade>
	<h1>About this site</h1>
	
	<p>This is the 'about' page. There's not much here.</p>
</div>
