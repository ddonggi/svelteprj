<script>
    export let params={id:'dglee',company:'donggi'};
</script>
<footer>
    <div>
        company : {params.company}
    </div>
    <div class="footer-container">
        id : {params.id}
    </div>
</footer>
<style>
    footer{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .footer-container{
        display: flex;
        justify-content: center;
    }
    .footer-item{
        margin:0 1vw;
    }
</style>