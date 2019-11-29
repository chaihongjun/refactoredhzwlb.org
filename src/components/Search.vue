<!--
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 16:07:27
 * @LastEditTime: 2019-11-27 16:07:30
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="site-search">
    <div class="container">
      <form method="get" class="site-search-form" action="https://demo.themebetter.com/dux/">
        <input class="search-input" name="s" type="text" placeholder="输入关键字" value />
        <button class="search-btn" type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  </div>
</template>



<script>
export default {
  name: "Search"
};
</script>