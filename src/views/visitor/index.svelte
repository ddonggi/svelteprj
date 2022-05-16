<script>
    import Header from '/components/visitor/header.svelte';
    import Footer from '/components/indexFooter.svelte';
    import VisitorSection from '/components/visitor/section.svelte';
    let sectionPackage = {
        name:'기동이다',
        age:31,
        src:'https://upload.wikimedia.org/wikipedia/commons/f/f3/Meow_cat_-_Mdebona.jpg'
    }

</script>
<Header/>
<VisitorSection {...sectionPackage}/>
<Footer kid="동기"/>
