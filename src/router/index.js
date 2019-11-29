/*
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 09:53:01
 * @LastEditTime: 2019-11-28 18:00:40
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/frontend",
    name: "frontend",
    component: () => import("@/views/Frontend/Frontend.vue")
  },
  {
    path: "/frontend/ecmascript",
    name: "ecmascript",
    component: () => import("@/views/Frontend/Ecmascript.vue")
  },
  {
    path: "/frontend/ecmascript/:id",
    name: "ecmascriptDetail",
    component: () => import("@/views/Frontend/Detail.vue")
  },
  {
    path: "/frontend/typescript",
    name: "typescript",
    component: () => import("@/views/Frontend/Typescript.vue")
  },
  {
    path: "/frontend/typescript/:id",
    name: "typescriptDetail",
    component: () => import("@/views/Frontend/Detail.vue")
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
