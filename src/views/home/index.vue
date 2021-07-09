<!-- home -->
<template>
  <div class='index-container'>
    <div class="Mine-search">
    <van-search
      v-model="value"
      shape="round"
      background="red"
      placeholder="请输入搜索关键词"
    />
    </div>
    <div class="Mine-categories-swipe">
      <van-swipe class="my-swipe" :autoplay="4000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class='mall-nav'>
      <van-grid square :border="false" :column-num="5">
        <van-grid-item>
          <a href='#'>
          <img src='../../assets/img/nav/mall.png'>
            <br/>
          <span>靓仔超市</span>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href='#'>
          <img src='../../assets/img/nav/3c.png'>
            <br/>
          <span>电子产品</span>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href='#'>
          <img src='../../assets/img/nav/clothes.png'>
            <br/>
          <span>精品服饰</span>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href='#'>
          <img src='../../assets/img/nav/fresh.png'>
            <br/>
          <span>优质生鲜</span></a>
        </van-grid-item>
        <van-grid-item>
          <a href='#'>
          <img src='../../assets/img/nav/save.png'>
            <br/>
          <span>领券中心</span>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href='#'>
          <img src='../../assets/img/nav/9conquer.png'>
            <br/>
          <span>9.9元拼</span>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href='#'>
          <img src='../../assets/img/nav/wine.png.webp'>
            <br/>
          <span>中外名酒</span>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href='#'>
          <img src='../../assets/img/nav/book_music.png.webp'>
            <br/>
          <span>图书影音</span>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href='#'>
          <img src='../../assets/img/nav/vip.png'>
            <br/>
          <span>PLUS会员</span>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href='#'>
          <img src='../../assets/img/nav/all.png'>
            <br/>
          <span>全部</span>
          </a>
        </van-grid-item>
      </van-grid>
    </div>

    <div class='bottom_goods'>
      <van-grid class='goods_head' :gutter="3" :border="false" :column-num="2">
        <van-grid-item>
            <h3 class='goods_title'>完美纪念</h3>
        </van-grid-item>
        <van-grid-item>
            <h3 class='goods_title'>海尔家电</h3>
        </van-grid-item>
      </van-grid>

      <van-grid :gutter="3" :border="false" :column-num="4">
        <van-grid-item>
          <a href='#'>
            <img class='goods_img' src='../../assets/img/bottom/goods1.png'>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href='#'>
            <img class='goods_img' src='../../assets/img/bottom/goods2.png'>
          </a>

        </van-grid-item>
        <van-grid-item>
          <a href='#'>
            <img class='goods_img' src='../../assets/img/bottom/goods3.png'>
          </a>

        </van-grid-item>
        <van-grid-item>
          <a href='#'>
            <img class='goods_img' src='../../assets/img/bottom/goods4.png'>
          </a>

        </van-grid-item>
      </van-grid>
      <van-grid :gutter="3" :border="false" :column-num="3">

        <van-grid-item>
          <a href='#'>
            <h3>经典童书</h3>
            <img src='../../assets/img/bottom/good7.png'>
          </a>
        </van-grid-item>
        <van-grid-item>
        <a href='#'>
          <h3>精细喂养</h3>
          <img src='../../assets/img/bottom/good6.png'>
        </a>
      </van-grid-item>
        <van-grid-item>
        <a href='#'>
          <h3>彰显魅力</h3>
          <img src='../../assets/img/bottom/goods9.png'>
        </a>
      </van-grid-item>
      </van-grid>
      <van-grid :gutter="3" :border="false" :column-num="2">
        <van-grid-item>
          <a href='#'>
            <h3>家庭种植</h3>
            <img src='../../assets/img/bottom/good8.png'>
          </a>
        </van-grid-item>
        <van-grid-item>
        <a href='#'>
          <h3>财产安全</h3>
          <img src='../../assets/img/bottom/goods5.png'>
        </a>
      </van-grid-item>

      </van-grid>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Col, Row } from 'vant';
import { Grid, GridItem } from 'vant';
import { Image as VanImage } from 'vant';

Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Search);
export default {
  data() {
    return {
      value: '',
      images: [
        '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/184948/29/12895/122932/60e40a47E9100dcad/4e2608ddcf417742.jpg!cr_1053x420_4_0!q70.jpg.dpg',
        '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/172985/20/11254/250873/60ab712bE2cfd0e52/f184257039a404d1.png!cr_1053x420_4_0!q70.jpg.dpg'
      ]
    }
  },

  computed: {},

  mounted() {
  },

  methods: {

  }
}
</script>

<style lang="scss">
.my-swipe .van-swipe-item {
  width: 100%;
  height: 120px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}
.Mine-categories-swipe img{
  display: inline-block;
  width: 100%;
  height: 120px;
}

.goods_head .van-grid-item div{
  height: 20px;
}

.van-grid {
  margin-top: 3px;
}

.van-grid .van-grid-item a {
  text-align: center;
}

.van-grid .van-grid-item a img {
  width: 75%;
}

</style>
