import Vue from 'vue'
import Router from 'vue-router'
import ProductList from './pages/ProductList.vue';
import ProductDetails from './pages/ProductDetails.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: ProductList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/About.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      props: true,
      component: ProductDetails
    }
  ]
})
