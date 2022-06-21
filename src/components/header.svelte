<script>
    import Fa from 'svelte-fa'
    import { faHouse ,faUser, faMessage, faCircleInfo, faLock, faSignOut} from '@fortawesome/free-solid-svg-icons'
</script>
<header>
    <nav class="navigation">
        <ul>
            <li>
                <a href="#">
                    <span class="icon"><Fa icon={faHouse} /></span>
                    <span class="title">Home</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><Fa icon={faUser}/></span>
                    <span class="title">Profile</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><Fa icon={faMessage}/></span>
                    <span class="title">Message</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><Fa icon={faCircleInfo}/></span>
                    <span class="title">Help</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><Fa icon={faLock}/></span>
                    <span class="title">Password</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><Fa icon={faSignOut}/></span>
                    <span class="title">Sign Out</span>
                </a>
            </li>
        </ul>
    </nav>
    <div>
        <span class="menu"></span>
    </div>
    <button>
        Sign Up
    </button>
</header>

<style lang="scss">
    /* For Desktop*/
    @media (min-width: 640px) {
        header {
            position: relative;
            display: flex;
            width: 100%;
        }
    }
</style>