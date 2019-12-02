<!--
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 09:53:01
 * @LastEditTime: 2019-12-02 17:06:19
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div>
    <Header></Header>

    <Search></Search>

    <div class="container container-no-sidebar">
      <div class="content">
        <header class="article-header">
          <h1 class="article-title">关于我们</h1>
        </header>
        <article class="article-content">{{body}}</article>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>




<script>
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  // data() {
  //   return {
  //     body: String
  //   };
  // },
  computed: {
    body() {
      return this.$store.state.aboutData;
    }
  },
  created() {
    this.$store.dispatch("loadAboutData");
    console.log("about created");
  },
  // mounted() {
  //   this.body = this.$store.state.aboutData;
  //   console.log(this.body);
  // },
  activated() {
    this.$store.dispatch("loadAboutData");
    this.body = this.$store.state.aboutData;
    console.log(this.body);
  },
  components: {
    Header,
    Search,
    Footer
  }
};
</script>