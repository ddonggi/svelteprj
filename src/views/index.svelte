<script>
import Header from '../components/header.svelte';
import Footer from '../components/footer.svelte';
import Section from '../components/section.svelte';
export let name;
export let age;
</script>
<Header/>
<Section {name}/>
<div> my age is {age}</div>
<Footer/>