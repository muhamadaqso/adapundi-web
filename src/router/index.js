import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import Loans from '@/pages/loans/loans.vue'
import Invest from '@/pages/invest/invest.vue'

const router =  new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/loans',
      name: 'Loans',
      component: Loans
    },
    {
      path: '/invest',
      name: 'Invest',
      component: Invest
    }
  ]
});
router.afterEach((to, from) => {
  // NProgress.done();
  window.scroll(0,0);
});

export default router;

