<!--
 * @Author: ChaiHongJun
 * @Date: 2019-11-27 16:05:59
 * @LastEditTime: 2019-11-27 16:06:28
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <swiper
    id="focusslide"
    class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-android"
    :options="swiperOption"
    @mouseenter.native="show = !show"
    @mouseleave.native="show = !show"
  >
    <swiper-slide>
      <a target="_blank" href="https://themebetter.com/theme/xiu">
        <img src="https://themebetter.com/uploads/2014/11/hs-xiu.jpg" />
      </a>
    </swiper-slide>

    <swiper-slide>
      <a target="_blank" href="https://themebetter.com/theme/xiu">
        <img src="https://themebetter.com/uploads/2014/11/hs-xiu.jpg" />
      </a>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev">
      <i class="fa fa-chevron-left" v-show="show"></i>
    </div>
    <div class="swiper-button-next" slot="button-next">
      <i class="fa fa-chevron-right" v-show="show"></i>
    </div>
  </swiper>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Swiper",
  data() {
    return {
      show: false,
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },

  components: {
    swiper,
    swiperSlide
  }
};
</script>



<style>
.swiper-pagination-bullet-active {
  background-color: #fff !important;
}

.swiper-button-next,
.swiper-button-prev {
  background-image: none !important;
}
</style>
