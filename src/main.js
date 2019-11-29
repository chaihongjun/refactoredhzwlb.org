/*
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 09:53:01
 * @LastEditTime: 2019-11-28 09:17:29
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyload from "vue-lazyload";
Vue.config.productionTip = false;
Vue.use(VueLazyload);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/font-awesome.min.css";

import "@/assets/fonts/fa-brands-400.eot";
import "@/assets/fonts/fa-brands-400.svg";
import "@/assets/fonts/fa-brands-400.ttf";
import "@/assets/fonts/fa-brands-400.woff";
import "@/assets/fonts/fa-brands-400.woff2";

import "@/assets/fonts/fa-regular-400.eot";
import "@/assets/fonts/fa-regular-400.svg";
import "@/assets/fonts/fa-regular-400.ttf";
import "@/assets/fonts/fa-regular-400.woff";
import "@/assets/fonts/fa-regular-400.woff2";

import "@/assets/fonts/fontawesome-webfont.eot";
import "@/assets/fonts/fontawesome-webfont.svg";
import "@/assets/fonts/fontawesome-webfont.ttf";
import "@/assets/fonts/fontawesome-webfont.woff";
import "@/assets/fonts/fontawesome-webfont.woff2";

import "@/assets/css/main.css";
import "swiper/dist/css/swiper.css";
