/*
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 09:53:01
 * @LastEditTime: 2019-11-29 16:57:30
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import Vuex from "vuex";
import { Request } from "@/request";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    homeData: [],
    sidebarData: [],
    frontendData: [],
    ecmascriptData: [],
    typescriptData: [],
    aboutData: ""
  },
  mutations: {
    loadHomeData(state, res) {
      state.homeData = res;
    },
    loadSidebarData(state, res) {
      state.sidebarData = res;
    },
    loadAboutData(state, res) {
      state.aboutData = res;
    },
    loadFrontEndData(state, res) {
      state.frontendData = res;
    },
    loadEcmaScriptData(state, res) {
      state.ecmascriptData = res;
    },
    loadTypeScriptData(state, res) {
      state.typescriptData = res;
    }
  },
  actions: {
    loadHomeData(context) {
      Request("/loadHomeData")
        .then(res => {
          context.commit("loadHomeData", res.data.articles);
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadSidebarData(context) {
      Request("/loadSidebarData")
        .then(res => {
          context.commit("loadSidebarData", res.data.articles);
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadAboutData(context) {
      Request("/loadAboutData")
        .then(res => {
          context.commit("loadAboutData", res.data.about.body);
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadFrontEndData(context) {
      Request("/loadFrontEndData")
        .then(res => {
          context.commit("loadFrontEndData", res.data.articles);
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadEcmaScriptData(context) {
      Request("/loadEcmaScriptData")
        .then(res => {
          context.commit("loadEcmaScriptData", res.data.articles);
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadTypeScriptData(context) {
      Request("/loadTypeScriptData")
        .then(res => {
          context.commit("loadTypeScriptData", res.data.articles);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
