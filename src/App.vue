<!--
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 09:53:01
 * @LastEditTime: 2019-11-28 10:00:39
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>
<script>
export default {
  name: "App",
  created() {
    /* 防止页面刷新之后vuex数据丢失 */
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
};
</script>
