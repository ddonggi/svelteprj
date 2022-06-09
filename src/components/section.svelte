<script>
    import {push} from 'svelte-spa-router';
</script>
<section>
    <p>Life History Service</p>
    <button text on:click={ () => push("/join")}>go to join</button>
    <button>top</button>
</section>
<style>
    /* For Desktop*/
    @media (min-width: 640px) {
        section{
            background: wheat;
        }
    }
</style>