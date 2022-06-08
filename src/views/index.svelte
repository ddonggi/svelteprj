<script>
    import { userName } from '../store/store.js';
    import Header from '../components/header.svelte'
    import Section from '../components/section.svelte'
    import Footer from '../components/footer.svelte'
    console.log('writable username:',userName);
    console.log('print data:',$userName); //$를 쓰면 데이터 출력
    $userName=name;
</script>
<Header/>
<Section/>
<Footer/>
