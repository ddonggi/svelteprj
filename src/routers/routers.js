import VisitorView from '../views/user/user.svelte';
import JoinView from '../views/member/join.svelte'
import IndexView from '../views/index.svelte'

const routes = {
    '/': IndexView,
    '/join': JoinView,
    '/:id': VisitorView
}

export default routes;