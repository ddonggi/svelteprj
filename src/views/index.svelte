<script>
import Header from '../components/header.svelte';
import Footer from '../components/indexFooter.svelte';
import IndexSection from '../components/indexSection.svelte';
let sectionPackage = {
    name:'기동이다',
    age:31,
    src:'https://upload.wikimedia.org/wikipedia/commons/f/f3/Meow_cat_-_Mdebona.jpg'
}

</script>
<Header/>
<IndexSection {...sectionPackage}/>
<Footer kid="동기"/>
