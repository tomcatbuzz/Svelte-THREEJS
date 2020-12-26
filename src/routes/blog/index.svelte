<script>
	import { fade } from 'svelte/transition';
	import { customtransition } from "$components/transition"
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="content" in:customtransition out:fade>
	<h1>New Blog</h1>
	
	<p>This is the 'blog' page. There's not much here.</p>
</div>