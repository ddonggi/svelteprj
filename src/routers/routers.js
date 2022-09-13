import BioView from '../views/bio/bio.svelte';
import JoinView from '../views/member/join.svelte'
import IndexView from '../views/index.svelte'

const routes = {
    '/': IndexView,
    '/join': JoinView,
    '/:id': BioView
}

export default routes;