<!--
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 09:53:01
 * @LastEditTime: 2019-12-02 18:15:15
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="home">
    <Header></Header>

    <Search></Search>

    <section class="container">
      <div class="content-wrap">
        <div class="content">
          <Banner></Banner>

          <article class="excerpt-minic excerpt-minic-index">
            <h2>
              <a class="red" href="https://demo.themebetter.com/dux/see">【今日观点】</a>
              <a
                href="https://demo.themebetter.com/dux/97.html"
                title="从下载看我们该如何做事-DUX主题演示"
              >从下载看我们该如何做事</a>
            </h2>
            <p
              class="note"
            >一次我下载几部电影，发现如果同时下载多部要等上几个小时，然后我把最想看的做个先后排序，去设置同时只能下载一部，结果是不到一杯茶功夫我就能看到最想看的电影。 这就像我们一段时间内想干成很多事情，是同时干还是有选择有顺序的干，结果很不一样。同时...</p>
          </article>
          <div class="title">
            <h3>最新发布</h3>
            <div class="more">
              <a href="链接地址">热门标签</a>
              <a href="http://daqianduan.com">大前端</a>
              <a href="https://themebetter.com">themebetter</a>
              <a href="http://jianshiduo.com">见识多</a>
            </div>
          </div>

          <Articles v-for="(item,index) in articles" :key="index" :item="item"></Articles>
          <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        </div>
      </div>
      <sidebar :sidebars="sidebars"></sidebar>
    </section>

    <Footer></Footer>
  </div>
</template>


<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Sidebar from "@/components/Sidebar.vue";

import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";

import Articles from "@/components/Article.vue";

// 无限加载组件
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "Home",
  // data() {
  //   return {
  //     articles: [],
  //     sidebars: []
  //   };
  // },
  beforeMount() {
    //发起数据请求
    console.log(this);
    this.$store.dispatch("loadHomeData");
    this.$store.dispatch("loadSidebarData");
  },
  computed: {
    articles() {
      return this.$store.state.homeData;
    },
    sidebars() {
      return this.$store.state.sidebarData;
    }
  },
  // mounted() {
  //   this.articles = this.$store.state.homeData;
  //   this.sidebars = this.$store.state.sidebarData;

  //   console.log(this.articles);
  // },
  activated() {
    //发起数据请求
    this.$store.dispatch("loadHomeData");
    this.$store.dispatch("loadSidebarData");
    this.articles = this.$store.state.homeData;
    this.sidebars = this.$store.state.sidebarData;
  },

  components: {
    Header,
    Search,
    Sidebar,
    Footer,
    Banner,
    Articles,
    InfiniteLoading
  },
  methods: {
    infiniteHandler($state) {}
  }
};
</script>
