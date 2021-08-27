<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <!-- swiper的容器div -->
      <div class="swiper-container" v-if="categorys.length">
        <!-- swiper的包裹层div -->
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
          <!-- swiper的轮播div -->
          <swiper-slide
            class="swiper-slide"
            v-for="(categorys, index) in categorysArr"
            :key="index"
          >
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(category, index) in categorys"
              :key="index"
            >
              <div class="food_container">
                <img src="./images/nav/10.jpg" />
              </div>
              <span>{{ category.title }}</span>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <img v-else src="./images/msite_back.svg" alt="back">
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shop-list></shop-list>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      baseImageUrl: "./images/nav/",
      swiperOption: {
        notNextTick: true,
        loop: true,
        // effect : 'cube',
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
      },
    };
  },
  components: {
    HeaderTop,
    ShopList,
    swiper,
    swiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    ...mapState(["address", "categorys"]),

    categorysArr() {
      const { categorys } = this;
      const arr = [];
      let minArr = [];
      categorys.forEach((c) => {
        if (minArr.length === 8) {
          minArr = [];
        }
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        minArr.push(c);
      });
      return arr;
    },
  },
  mounted() {
    this.$store.dispatch("reqFoodCategorys");
    this.$store.dispatch('reqShops');
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.msite { // 首页
  width: 100%
  .msite_header {
    background-color: #02a774
    position: fixed
    z-index: 100
    left: 0
    top: 0
    width: 100%
    height: 45px
    .header_search {
      position: absolute
      left: 15px
      top: 50%
      transform: translateY(-50%)
      width: 10%
      height: 50%
      .icon-sousuo {
        font-size: 25px
        color: #fff
      }
    }
    .header_title {
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      width: 50%
      color: #fff
      text-align: center
      .header_title_text {
        font-size: 20px
        color: #fff
        display: block
      }
    }
    .header_login {
      font-size: 14px
      color: #fff
      position: absolute
      right: 15px
      top: 50%
      transform: translateY(-50%)
      .header_login_text {
        color: #fff
      }
    }
  }
  .msite_nav {
    bottom-border-1px(#e4e4e4)
    margin-top: 45px
    height: 200px
    background: #fff
    .swiper-container {
      width: 100%
      height: 100%
      .swiper-wrapper {
        width: 100%
        height: 100%
        .swiper-slide {
          display: flex
          justify-content: center
          align-items: flex-start
          flex-wrap: wrap
          .link_to_food {
            width: 25%
            .food_container {
              display: block
              width: 100%
              text-align: center
              padding-bottom: 10px
              font-size: 0
              img {
                display: inline-block
                width: 50px
                height: 50px
              }
            }
            span {
              display: block
              width: 100%
              text-align: center
              font-size: 13px
              color: #666
            }
          }
        }
      }
      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774
        }
      }
    }
  }
  .msite_shop_list {
    top-border-1px(#e4e4e4)
    margin-top: 10px
    background: #fff
    .shop_header {
      padding: 10px 10px 0
      .shop_icon {
        margin-left: 5px
        color: #999
      }
      .shop_header_title {
        color: #999
        font-size: 14px
        line-height: 20px
      }
    }
  }
}
</style>