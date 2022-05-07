<script>
	import Router from 'svelte-spa-router'
	import Header from './components/header.svelte';
	import Footer from './components/footer.svelte';
	import Section from './components/section.svelte';
	export let name;
	export let age;
</script>

<main>
	<Header/>
	<Section {name}/>
	<div> my age is {age}</div>
	<Footer/>
</main>

<style>

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

</style>