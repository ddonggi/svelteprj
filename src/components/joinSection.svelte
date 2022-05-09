<script>
    import {push} from 'svelte-spa-router';

</script>
<section>
    <p>hi</p>
    <button text on:click={ () => push("/")}>go to index</button>
</section>
<style>

</style>