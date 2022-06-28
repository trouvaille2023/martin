import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/3dLayer",
      name: "3DLayer",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/3DLayer.vue"),
    },
    {
      path: "/cssClock",
      name: "CssClock",
      component: () => import("../views/CssClock.vue"),
    },
  ],
});

export default router;
