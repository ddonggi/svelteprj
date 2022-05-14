<script>
    import {push} from 'svelte-spa-router';
</script>
<section>

    <p>landing Page 입니다</p>
    <button text on:click={ () => push("/join")}>go to join</button>
    <button text on:click={ () => push("/dglee")}>go to dglee page</button>
</section>