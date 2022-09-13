<script>
    import Header from '../../components/header.svelte';
    import UserSection from '../../components/bio/section.svelte';
    import Footer from '../../components/bio/footer.svelte';
    let sectionPackage = {
        name:'디케이',
        age:31,
        src:'https://upload.wikimedia.org/wikipedia/commons/f/f3/Meow_cat_-_Mdebona.jpg'
    }
    let params = {};
    console.log('params id:',params.id)
</script>
<Header/>
<UserSection {...sectionPackage}/>
<Footer {params}/>

