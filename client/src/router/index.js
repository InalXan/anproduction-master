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
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/admin/login",
      name: "adminlogin",
      component: () => import("../views/AdminloginView.vue"),
    },
    {
      path: "/admin/inbox",
      name: "admininbox",
      component: () => import("../views/AInboxView.vue"),
    },
    {
      path: "/elaqe",
      name: "elaqe",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/categories/:categoryName",
      name: "mebeller",
      component: () => import("../views/FurnituresView.vue"),
    },
    {
      path: "/admin/home",
      name: "adminhome",
      component: () => import("../views/AdminhomeView.vue"),
    },
    {
      path: "/admin/show",
      name: "adminshow",
      component: () => import("../views/ShowView.vue"),
    },
    {
      path: "/admin/product",
      name: "adminproduct",
      component: () => import("../views/ProductAdd.vue"),
    },
    {
      path: "/admin/category",
      name: "admincategory",
      component: () => import("../views/AddCategory.vue"),
    },
  ],
});

export default router;
