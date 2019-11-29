<!--
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 14:54:22
 * @LastEditTime: 2019-11-27 14:54:26
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="sidebar">
    <div class="widget widget_ui_posts">
      <h3>置顶推荐</h3>
      <ul>
        <li v-for="(sidebar,index) in sidebars.slice(0,1)" :key="index">
          <a :href="sidebar.category.url+sidebar.id">
            <span class="thumbnail">
              <img
                :data-src="sidebar.thumb"
                :alt="sidebar.title"
                :src="sidebar.thumb"
                class="thumb"
                style="display: block;"
              />
            </span>
            <span class="text">
              {{sidebar.title}}
              <span>全新平面化风格</span>
            </span>
            <span class="muted">{{sidebar.pubDate}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="widget widget_ui_posts">
      <h3>随机推荐</h3>
      <ul>
        <li v-for="(sidebar,index) in sidebars.slice(0,10)" :key="index">
          <a :href="sidebar.category.url">
            <span class="thumbnail">
              <img
                :data-src="sidebar.thumb"
                :alt="sidebar.title"
                :src="sidebar.thumb"
                class="thumb"
                style="display: block;"
              />
            </span>
            <span class="text">{{sidebar.title}}</span>
            <span class="muted">{{sidebar.pubDate}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>




<script>
export default {
  name: "Sidebar",
  props: {
    sidebars: Array
  }
};
</script>