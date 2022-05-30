import VisitorView from '../views/visitor/user.svelte';
import JoinView from '../views/member/join.svelte'
import IndexView from '../views/visitor/index.svelte'

const routes = {
    '/': IndexView,
    '/join': JoinView,
    '/:id': VisitorView
}

export default routes;