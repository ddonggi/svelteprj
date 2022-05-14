<script>
    import {push} from 'svelte-spa-router';

</script>
<section>
    <p>hi</p>
    <button text on:click={ () => push("/")}>go to landing</button>
</section>
<style>

</style>