<!--
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 10:49:52
 * @LastEditTime: 2019-12-02 17:08:39
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div>
    <Header></Header>

    <Search></Search>

    <Breadcrumbs></Breadcrumbs>

    <section class="container single">
      <div class="content-wrap">
        <div class="content">
          <header class="article-header">
            <h1 class="article-title">
              <a href="https://demo.themebetter.com/dux/97.html">从下载看我们该如何做事</a>
            </h1>
            <div class="article-meta">
              <span class="item">2015-06-30</span>
              <span class="item">
                分类：
                <a href="https://demo.themebetter.com/dux/see" rel="category tag">观点</a>
              </span>
              <span class="item post-views">阅读(12438)</span>
              <span class="item">评论(1)</span>
              <span class="item"></span>
            </div>
          </header>
          <article class="article-content">
            <div class="asb asb-post asb-post-01">
              <a
                class="tbas"
                href="https://themebetter.com/theme/dux"
                target="_blank"
              >广告位，电脑和手机可分别设置，可放任何广告代码</a>
            </div>
            <p>一次我下载几部电影，发现如果同时下载多部要等上几个小时，然后我把最想看的做个先后排序，去设置同时只能下载一部，结果是不到一杯茶功夫我就能看到最想看的电影。</p>
            <p>这就像我们一段时间内想干成很多事情，是同时干还是有选择有顺序的干，结果很不一样。同时做很多件事，每件事达到目标花费的时间就会被拉长，过程可能会变得越来越复杂已致不可控；有选择且一件件的去干，每件事情结束的时候我们都会收到胜利的果实，战斗力和状态也会不断提升，最重要的是每隔一段时间你就会成功一次，心理负担也会逐渐减少。</p>
          </article>
          <div class="asb-post-footer">
            <b>AD：</b>
            <strong>【前标题】</strong>
            <a target="_blank" href="https://themebetter.com/theme/dux">广告标题广告标题广告标题</a>
          </div>
          <div class="post-actions">
            <a href="javascript:;" etap="like" class="post-like action action-like" data-pid="97">
              <i class="fa fa-thumbs-o-up"></i>赞(
              <span>182</span>)
            </a>
            <a href="javascript:;" class="action action-rewards" data-event="rewards">
              <i class="fa fa-jpy"></i> 打赏
            </a>
          </div>
          <div class="post-copyright">
            未经允许不得转载：
            <a href="https://demo.themebetter.com/dux">DUX主题演示</a> »
            <a href="https://demo.themebetter.com/dux/97.html">从下载看我们该如何做事</a>
          </div>

          <div class="article-tags"></div>

          <div class="article-author">
            <img
              alt
              data-src="https://secure.gravatar.com/avatar/17b6dfae86510c3fe0a2a2a409ac0dbc?s=50&amp;d=mm&amp;r=g"
              srcset="https://secure.gravatar.com/avatar/17b6dfae86510c3fe0a2a2a409ac0dbc?s=100&amp;d=mm&amp;r=g 2x"
              class="avatar avatar-50 photo"
              height="50"
              width="50"
              src="https://secure.gravatar.com/avatar/17b6dfae86510c3fe0a2a2a409ac0dbc?s=50&amp;d=mm&amp;r=g"
              style="display: block;"
            />
            <h4>
              <i class="fa fa-user" aria-hidden="true"></i>
              <a title="查看更多文章" href="https://demo.themebetter.com/dux/author/admin">themebetter主题小秘</a>
            </h4>Hi，我是themebetter主题小秘！我的老板是浩子，我还有其他几个兄弟姐妹，DUX、XIU、TOB等，我们都很帅气！其实我有很多话想说，只是，只是我比较内向！！这个介绍是不是很赞呢~~
          </div>

          <nav class="article-nav">
            <span class="article-nav-prev">
              上一篇
              <br />
              <a
                href="https://demo.themebetter.com/dux/70.html"
                rel="prev"
              >云适配获千万美金B轮融资，将开发移动端企业安全浏览器</a>
            </span>
            <span class="article-nav-next">
              下一篇
              <br />
              <a
                href="https://demo.themebetter.com/dux/101.html"
                rel="next"
              >大前端D8主题等其他主题支持wordpress 3.8版本</a>
            </span>
          </nav>

          <div class="asb asb-post asb-post-02">
            <a
              class="tbas"
              href="https://themebetter.com/theme/dux"
              target="_blank"
            >广告位，电脑和手机可分别设置，可放任何广告代码</a>
          </div>
          <div class="relates">
            <div class="title">
              <h3>相关推荐</h3>
            </div>
            <ul>
              <li>暂无文章</li>
            </ul>
          </div>
          <div class="asb asb-post asb-post-03">
            <a
              class="tbas"
              href="https://themebetter.com/theme/dux"
              target="_blank"
            >广告位，电脑和手机可分别设置，可放任何广告代码</a>
          </div>
        </div>
      </div>

      <sidebar :sidebars="sidebars"></sidebar>
    </section>

    <Footer></Footer>
  </div>
</template>



<script>
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";

import Breadcrumbs from "@/components/Breadcrumbs.vue";

import Sidebar from "@/components/Sidebar.vue";

import Footer from "@/components/Footer.vue";

export default {
  name: "Detail",
  // data() {
  //   return {
  //     sidebars: []
  //   };
  // },
  computed: {
    sidebars() {
      return this.$store.state.sidebarData;
    }
  },
  components: {
    Header,
    Search,
    Breadcrumbs,
    Sidebar,
    Footer
  },
  created() {
    this.$store.dispatch("loadSidebarData");
  },
  // mounted() {
  //   this.sidebars = this.$store.state.sidebarData;
  // },
  activated() {
    //发起数据请求
    this.$store.dispatch("loadSidebarData");
    this.sidebars = this.$store.state.sidebarData;
  }
};
</script>