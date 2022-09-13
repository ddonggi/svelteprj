<script>
    import { userName } from "../../store/store.js";
</script>
<footer>
    <div>
        {$userName}의 소중한 모습
    </div>
    <div class="footer-container">
        <div class="footer-item baby">
            영아기
        </div>
        <div class="footer-item teenager">
            10대
        </div>
        <div class="footer-item twenties">
            20대
        </div>
        <div class="footer-item thirties">
            30대
        </div>
        <div class="footer-item forties">
            40대
        </div>
        <div class="footer-item fifties">
            50대
        </div>
        <div class="footer-item sixties">
            60대
        </div>

    </div>
</footer>
<style lang="scss">
    footer{
        position: fixed;
        bottom: 0;
        width: 100%;
      .footer-container{
        display: flex;
        justify-content: center;
      }
      .footer-item{
        margin:0 1vw;
        background: wheat;
        width: 120px;
        height: 64px;

      }
    }

    .baby{
      background: #666666;
    }
    .sixties{
      background: silver;
    }
</style>