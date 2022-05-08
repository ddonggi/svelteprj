<script>
	import Router from 'svelte-spa-router'
	import routes from './routers/routers.js'
	export let name;
	export let age;
	export let director
</script>

<main>
<!--	<Header/>-->
<!--	<Section {name}/>-->
<!--	<div> my age is {age}</div>-->
<!--	<Footer/>-->
	<Router {routes} {name} {age} {director}/>
</main>

<style>

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

</style>