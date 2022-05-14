import IndexView from '../views/landing.svelte'
import JoinView from '../views/member/join.svelte'
import VisitorView from '../views/visitor/index.svelte'

const routes = {
    '/': IndexView,
    '/join': JoinView,
    '/:id': VisitorView,
    '/dglee':VisitorView
}

export default routes