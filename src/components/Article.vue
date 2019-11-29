<!--
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 15:22:55
 * @LastEditTime: 2019-11-28 09:26:37
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <article class="excerpt">
    <router-link class="focus" :to="item.category.url+'/'+item.id" exact>
      <img v-lazy="item.thumb" :alt="item.title" class="thumb" style="display: inline;" />
    </router-link>
    <header>
      <router-link class="cat" :to="item.category.url" exact>
        {{item.category.name}}
        <i></i>
      </router-link>
      <h2>
        <router-link :to="item.category.url+'/'+item.id" :title="item.title" exact>
          {{item.title}}
          <span>全新平面化风格</span>
        </router-link>
      </h2>
      <span class="sticky-icon">置顶</span>
    </header>
    <p class="meta">
      <time>
        <i class="fa fa-clock-o"></i>
        {{item.pubDate}}
      </time>
      <span class="author">
        <i class="fa fa-user"></i>
        {{item.author}}
      </span>
      <span class="pv">
        <i class="fa fa-eye"></i>
        阅读({{item.reading}})
      </span>
      <a class="pc" href="https://demo.themebetter.com/dux/49.html#comments">
        <i class="fa fa-comments-o"></i>评论(6)
        <a href="javascript:;" etap="like" class="post-like" data-pid="49"></a>
        <i class="fa fa-thumbs-o-up"></i>赞(
        <span>754</span>)
      </a>
    </p>
    <p class="note">{{item.summary}}...</p>
  </article>
</template>

<script>
export default {
  name: "Article",
  props: {
    item: Object
  }
};
</script>