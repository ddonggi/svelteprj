<script>
    import Header from '../../components/header.svelte';
    import VisitorSection from '../../components/user/section.svelte';
    import Footer from '../../components/user/footer.svelte';
    let sectionPackage = {
        name:'기동이다',
        age:31,
        src:'https://upload.wikimedia.org/wikipedia/commons/f/f3/Meow_cat_-_Mdebona.jpg'
    }
    let params = {};
    console.log('params id:',params.id)
</script>
<Header/>
<VisitorSection {...sectionPackage}/>
<Footer {params}/>

