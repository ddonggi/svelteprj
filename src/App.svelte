<script>
	import Router from 'svelte-spa-router'
	import routes from './routers/routers.js'
	export let name;
	export let age;
	export let director
</script>

<main>
	<Router {routes}/>
</main>
<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}
</style>