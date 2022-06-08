<script>
    import {push} from 'svelte-spa-router'
    export let params = {id:'dgleee'};
    export let name;
    export let age;
    export let src = 'https://i1.sndcdn.com/artworks-WkxGw85lhDbxVBfB-pe9z8Q-t500x500.jpg';
    let description = `this is my first <strong><a href="/join"> Svelte Project!</a></strong>`;
</script>

<section>
    <h1>Hello {name}, id : {params.id}</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <img {src} alt="{name} image">
    <div> my age is {age}<br>
        {@html description}
    </div>
    <button text on:click={ () => push("/join")}>go to join!</button>
</section>

<style lang="scss">

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    /* desktop */
    @media (min-width: 640px) {
      h1 {
        color: blue;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
      }
    }
</style>