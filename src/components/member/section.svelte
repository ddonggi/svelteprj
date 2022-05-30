<script>
    import {push} from 'svelte-spa-router';

</script>
<section>
    <p>hi</p>
    <button text on:click={ () => push("/")}>go to landing</button>
    <button text on:click={ () => push("/dglee")}>동기 페이지 가기</button>
</section>
<style>

</style>