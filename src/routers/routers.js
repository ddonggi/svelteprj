import LandingView from '../views/landing.svelte'
import JoinView from '/views/member/join.svelte'
import VisitorView from '/views/visitor/index.svelte'

const routes = {
    '/': LandingView,
    '/join': JoinView,
    '/:id': VisitorView,
    '/dglee':VisitorView
}

export default routes