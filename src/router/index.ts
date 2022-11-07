import { createRouter, createWebHistory } from "vue-router";
import GrottocenterView from "../views/projects/GrottocenterView.vue";
import HomeView from "../views/HomeView.vue";
import SuivieView from "../views/projects/SuivieView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "Clément ROIG - Web developer" },
    },
    {
      path: "/projects/suivie",
      name: "Suivie",
      component: SuivieView,
      meta: { title: "Clément ROIG - SuiVie" },
    },
    {
      path: "/projects/grottocenter",
      name: "Grottocenter",
      component: GrottocenterView,
      meta: { title: "Clément ROIG - Grottocenter" },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
    return { top: 0 };
  },
});

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta.title as string;
  next();
});

export default router;
