import Vue from 'vue'
import Router from 'vue-router'
import Catalog from './views/Catalog.vue'
import ProductDetails from './components/ProductDetails.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      props: true,
      component: ProductDetails
    }
  ]
})
