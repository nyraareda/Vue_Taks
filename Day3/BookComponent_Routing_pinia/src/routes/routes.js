
import { createRouter, createWebHistory } from 'vue-router';
import { userAuthenticated } from '@/store/authontication';
import profilecomponent from '@/components/profilecomponent.vue';
import productsscreen from '@/components/productscreen.vue';
import wishlistscreen from '@/components/wishlistbtncomponent.vue';

const routes = [
  {
    path: '/',
    name: 'productsscreen',
    component: productsscreen,
    meta: { requiresAuth: true }
  },
  {
    path: '/productsscreen',
    name: 'productsscreen',
    component: productsscreen,
    meta: { requiresAuth: true }
  },
  {
    path: '/wishlistscreen',
    name: 'wishlistscreen',
    component: wishlistscreen,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = userAuthenticated().isAuthenticated;
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!isAuthenticated) {
//       next({ path: '/' });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });


export default router;
