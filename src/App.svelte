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
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>