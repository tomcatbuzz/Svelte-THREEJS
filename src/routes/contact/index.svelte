<script>
	import { fade } from 'svelte/transition';
	import { customtransition } from "$components/transition"
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="content" in:customtransition out:fade>
<h1>Contact this site</h1>

<p>This is the 'contact' page. There's not much here.</p>
</div>