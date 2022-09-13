<script>
    export let params={};
</script>
<footer>
    <div>
        footer : {params.company}
    </div>
    <div class="footer-container">
        footer2 : {params.id}
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