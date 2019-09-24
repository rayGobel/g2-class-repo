// Components that required to be rendered as a route
import Home from '@/pages/Home'
import Agenda from '@/pages/Agenda'
// Use this format to enable lazy-loading. e.g. not included in the main
// webpack bundle. Only downloaded when clicked
const History = () => import('@/pages/History')

/**
 * Routes is an array, should redirect to the correct component
 *
 */
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/agenda',
    component: Agenda
  },
  {
    path: '/history',
    component: History
  }
]

export default routes
