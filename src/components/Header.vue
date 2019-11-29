<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        <a href="/" title="DUX主题官方演示站">
          <img
            src="https://demo.themebetter.com/dux/wp-content/themes/dux/img/logo.png"
            alt="DUX主题官方演示站"
          />DUX主题演示
        </a>
      </h1>
      <div class="brand">
        欢迎光临
        <br />我们一直在努力
      </div>
      <ul class="site-nav site-navbar">
        <li class="aaa menu-item">
          <router-link exact to="/" aria-current="page">
            <i class="fa fa-home"></i> 首页
          </router-link>
        </li>
        <li class="menu-item menu-item-has-children">
          <router-link exact to="/frontend">
            <i class="fa fa-code"></i> 前端
          </router-link>
          <ul class="sub-menu">
            <li class="menu-item">
              <router-link exact to="/frontend/ecmascript">ecmascript</router-link>
            </li>
            <li class="menu-item">
              <router-link exact to="/frontend/typescript">typescript</router-link>
            </li>
            <li class="menu-item">
              <router-link exact to="/frontend/vuejs">vuejs</router-link>
            </li>
            <li class="menu-item">
              <router-link exact to="/frontend/css">css</router-link>
            </li>
            <li class="menu-item">
              <router-link exact to="/frontend/other">other</router-link>
            </li>
          </ul>
        </li>
        <li class="menu-item menu-item-has-children">
          <router-link exact to="/backend">
            <i class="fa fa-database"></i> php
          </router-link>
          <ul class="sub-menu">
            <li class="menu-item">
              <router-link exact to="/backend/navivephp">nativephp</router-link>
            </li>
            <li class="menu-item">
              <router-link exact to="/backend/ci">ci</router-link>
            </li>
            <li class="menu-item">
              <router-link exact to="/backend/thinkphp">thinkphp</router-link>
            </li>
            <li class="menu-item">
              <router-link exact to="/backend/laravel">laravel</router-link>
            </li>
            <li class="menu-item">
              <router-link exact to="/backend/other">other</router-link>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <router-link exact to="/server">
            <i class="fa fa-server"></i> Server
          </router-link>
        </li>
        <li class="menu-item">
          <router-link exact to="/other">
            <i class="fa fa-book"></i> other
          </router-link>
        </li>
        <li class="menu-item">
          <router-link exact to="/about">
            <i class="fa fa-users"></i> 关于
          </router-link>
        </li>
        <li class="navto-search">
          <a href="javascript:;" class="search-show active">
            <i class="fa fa-search"></i>
          </a>
        </li>
      </ul>
      <div class="topbar">
        <ul class="site-nav topmenu">
          <li
            id="menu-item-112"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"
          >
            <a href="https://demo.themebetter.com/dux/tags">标签云</a>
          </li>
          <li
            id="menu-item-113"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"
          >
            <a href="https://demo.themebetter.com/dux/readers">读者墙</a>
          </li>
          <li
            id="menu-item-114"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-114"
          >
            <a href="https://demo.themebetter.com/dux/archives">页面存档</a>
          </li>
          <li
            id="menu-item-115"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115"
          >
            <a href="https://demo.themebetter.com/dux/sample-page">友情链接</a>
          </li>
          <li class="menusns menu-item-has-children">
            <a href="javascript:;">关注我们</a>
            <ul class="sub-menu">
              <li>
                <a
                  class="sns-wechat"
                  href="javascript:;"
                  title="关注微信"
                  data-src="https://themebetter.com/qrcode?url=http://demo.themebetter.com/dux"
                >关注微信</a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="external nofollow"
                  href="https://themebetter.com"
                >themebetter</a>
              </li>
              <li>
                <a target="_blank" rel="external nofollow" href="https://themebetter.com">更好的主题</a>
              </li>
            </ul>
          </li>
        </ul>
        <a rel="nofollow" href="javascript:;" class="signin-loader">Hi, 请登录</a>
        &nbsp; &nbsp;
        <a rel="nofollow" href="javascript:;" class="signup-loader">我要注册</a>
        &nbsp; &nbsp;
        <a
          rel="nofollow"
          href="https://demo.themebetter.com/dux/reset-password"
        >找回密码</a>
      </div>
      <i class="fa fa-bars m-icon-nav" @click="showMenu"></i>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      screenWidth: document.body.clientWidth // 屏幕宽度
    };
  },
  methods: {
    showMenu() {
      document.body.classList.add("m-nav-show");
    }
  },
  created() {
    /* 解决页面刷新vuex数据就丢失的问题 */
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
    /* 解决页面刷新vuex数据就丢失的问题 */
  },
  mounted() {
    // 监听窗口大小

    window.addEventListener(
      "resize",
      function() {
        this.screenWidth = document.body.clientWidth; //窗口宽度
      },
      true
    );

    window.addEventListener(
      "scroll",
      function() {
        let h = document.documentElement.scrollTop + document.body.scrollTop;
        if (this.screenWidth > 720 && h > 0) {
          document.body.classList.add("nav-fixed");
        } else {
          document.body.classList.remove("nav-fixed");
        }
      },
      true
    );
  }
};
</script>