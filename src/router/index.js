import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("../views/Posts.vue"),
  },
  {
    path: "/another_page",
    name: "Anouter Page",
    component: () => import("../views/AnotherPage.vue"),
  },
  {
    path: "/forth_page",
    name: "Forth Page",
    component: () => import("../views/ForthPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
