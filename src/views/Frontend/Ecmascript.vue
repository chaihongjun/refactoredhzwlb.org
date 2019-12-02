<!--
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 10:49:22
 * @LastEditTime: 2019-12-02 17:07:12
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
            <h1>Ecmascript</h1>
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
  // data() {
  //   return {
  //     articles: [],
  //     sidebars: []
  //   };
  // },
  created() {
    this.$store.dispatch("loadEcmaScriptData");
    this.$store.dispatch("loadSidebarData");
    console.log("Ecmascript created");
  },
  computed: {
    articles() {
      return this.$store.state.ecmascriptData;
    },
    sidebars() {
      return this.$store.state.sidebarData;
    }
  },
  // mounted() {
  //   this.articles = this.$store.state.ecmascriptData;
  //   this.sidebars = this.$store.state.sidebarData;
  //   console.log(this.articles);
  //   console.log(this.sidebars);
  // },
  activated() {
    this.$store.dispatch("loadEcmaScriptData");
    this.$store.dispatch("loadSidebarData");
    this.articles = this.$store.state.ecmascriptData;
    this.sidebars = this.$store.state.sidebarData;
    console.log(this.articles);
    console.log(this.sidebars);
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