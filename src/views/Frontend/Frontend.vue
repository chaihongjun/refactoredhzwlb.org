<!--
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 10:49:14
 * @LastEditTime: 2019-11-28 11:56:22
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
            <h1>FrondEnd</h1>
          </div>

          <Articles v-for="(item,index) in articles" :key="index" :item="item"></Articles>
        </div>
      </div>
      <sidebar :sidebars="sidebars"></sidebar>
    </section>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import Articles from "@/components/Article.vue";
export default {
  name: "Frontend",
  data() {
    return {
      articles: [],
      sidebars: []
    };
  },
  created() {
    this.$store.dispatch("loadFrontEndData");
    this.$store.dispatch("loadSidebarData");
    console.log("frontend created");
  },
  mounted() {
    this.articles = this.$store.state.frontendData;
    this.sidebars = this.$store.state.sidebarData;
    console.log(this.articles);
    console.log(this.sidebars);
  },
  activated() {
    this.$store.dispatch("loadFrontEndData");
    this.$store.dispatch("loadSidebarData");
    this.articles = this.$store.state.frontendData;
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