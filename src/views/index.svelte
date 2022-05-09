<script>
import Header from '../components/header.svelte';
import Footer from '../components/footer.svelte';
import IndexSection from '../components/indexSection.svelte';
let pkgs = {
    name:'기동이',
    age:31,
    src:'https://upload.wikimedia.org/wikipedia/commons/f/f3/Meow_cat_-_Mdebona.jpg'
}

</script>
<Header/>
<IndexSection {...pkgs}/>
<Footer director="이동기"/>
