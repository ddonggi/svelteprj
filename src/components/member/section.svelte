<script>
    import {push} from 'svelte-spa-router';

</script>
<section>
    <p>hi</p>
    <button text on:click={ () => push("/")}>go to landing</button>
    <button text on:click={()=>push("/join")}>회원 가입 하기</button>
</section>
<style>

</style>