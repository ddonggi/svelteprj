<script>
    import Header from '../../components/header.svelte';
    import UserSection from '../../components/bio/section.svelte';
    import Footer from '../../components/bio/footer.svelte';
    import Index from '../../views/index.svelte'
    import {push} from 'svelte-spa-router';

    let sectionPackage = {
        name:'디케이',
        age:31,
        src:'https://upload.wikimedia.org/wikipedia/commons/f/f3/Meow_cat_-_Mdebona.jpg'
    }
    export let params = {};
    console.log('params id:',params.id)
</script>

{#if params.id.length}
    {#if params.id ==="dglee"}
        <Header/>
        <UserSection {...sectionPackage}/>
        <Footer {params}/>
    {:else}
        <Index/>
    {/if}
{:else}
   <Index/>
{/if}

