<script>
	import Router from 'svelte-spa-router'
	import routes from './routers/routers.js'
</script>

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
</style>