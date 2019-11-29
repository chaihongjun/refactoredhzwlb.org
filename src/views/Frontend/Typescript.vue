<!--
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 10:49:32
 * @LastEditTime: 2019-11-28 17:57:21
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div>
    <Header></Header>
    <Search></Search>

    <section class="container">
      <div class="content-wrap">
        <div class="content">
          <div class="catleader">
            <h1>Typescript</h1>
          </div>

          <Articles v-for="(item,index) in articles" :key="index" :item="item"></Articles>
        </div>
      </div>
      <sidebar :sidebars="sidebars"></sidebar>
    </section>
  </div>
</template>


<script>
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Articles from "@/components/Article";
export default {
  name: "Ecmascript",
  data() {
    return {
      articles: [],
      sidebars: []
    };
  },
  created() {
    this.$store.dispatch("loadTypeScriptData");
    this.$store.dispatch("loadSidebarData");
  },
  mounted() {
    this.articles = this.$store.state.typescriptData;
    this.sidebars = this.$store.state.sidebarData;
  },
  activated() {
    this.$store.dispatch("loadTypeScriptData");
    this.$store.dispatch("loadSidebarData");
    this.articles = this.$store.state.typescriptData;
    this.sidebars = this.$store.state.sidebarData;
  },
  components: {
    Header,
    Search,
    Footer,
    Sidebar,
    Articles
  }
};
</script>