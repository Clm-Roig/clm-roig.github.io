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
    },
    {
      path: "/projects/suivie",
      name: "Suivie",
      component: SuivieView,
    },
    {
      path: "/projects/grottocenter",
      name: "Grottocenter",
      component: GrottocenterView,
    },
  ],
});

export default router;
