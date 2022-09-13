<script>
    /*
    * 로그인 여부에 따라 landing / memberIndex 출력
    * */
    import { userName } from '../store/store.js';
    import Header from '../components/header.svelte'
    import LandingSection from '../components/section.svelte'
    import Footer from '../components/footer.svelte'
    console.log('writable username:',userName);
    console.log('print store data:',$userName); //$를 쓰면 데이터 출력
    // $userName=name;
</script>
<Header/>
<LandingSection/>
<Footer/>
