<script>
	import Router from 'svelte-spa-router'
	import routes from './routers/routers.js'

	let hereKitty = false;

	const handleMouseenter = () => hereKitty = true;
	const handleMouseleave = () => hereKitty = false;
</script>
<svelte:body
		on:mouseenter={handleMouseenter}
		on:mouseleave={handleMouseleave}
/>
<img
		class:curious={hereKitty}
		alt="Kitten wants to know what's going on"
		src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Meow_cat_-_Mdebona.jpg"
>
<main>
	<Router {routes}/>
</main>
<style>
	main {
		text-align: center;
		/*max-width: 240px;*/
		width: 100%;
		margin: 0 auto;
	}
	img {
		position: absolute;
		left: 0;
		bottom: -60px;
		transform: translate(-80%, 0) rotate(-30deg);
		transform-origin: 100% 100%;
		transition: transform 0.4s;
		border-radius: 50%;
	}

	.curious {
		transform: translate(-15%, 0) rotate(0deg);
	}

	:global(body) {
		overflow: hidden;
		padding:0;
	}
</style>