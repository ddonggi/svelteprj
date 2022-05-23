<script>
	import Router from 'svelte-spa-router'
	import routers from './routers/routers.js'
	// export let name;
	// export let age;
	// export let id;
	// export let director;
</script>

<main>
	<Router {routers}/>
</main>
<style>
	main {
		text-align: center;
		/*max-width: 240px;*/
		width: 100%;
		margin: 0 auto;
	}
</style>