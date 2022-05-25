<script>
    console.log('landing!')
    import Header from '../../components/header.svelte'
    import Section from '../../components/indexSection.svelte'
    import Footer from '../../components/indexFooter.svelte'
    export let kid;
</script>

<Header/>
<Section/>
<Footer kid="멀까"/>

