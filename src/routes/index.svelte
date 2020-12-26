<script>
	import { fade } from 'svelte/transition';
	import { customtransition } from "$components/transition"
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="content" in:customtransition out:fade>
	<h1>Awesome Home page</h1>
	
	<p>This is the 'home' page. There's not much here.</p>
</div>