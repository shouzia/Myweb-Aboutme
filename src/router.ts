import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home/index.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});
