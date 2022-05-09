import IndexView from '../views/index.svelte'
import JoinView from '../views/member/join.svelte'

const routes = {
    '/': IndexView,
    '/join': JoinView,
}

export default routes