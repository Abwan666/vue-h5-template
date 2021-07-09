<!-- home -->
<template>
  <div class="index-container">
      <div class="Mine-search">
        <van-search
          v-model="value"
          shape="round"
          background="red"
          placeholder="请输入搜索关键词"
        />
      </div>

      <div class='into_class'>
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="热门分类" name="1">
            <van-grid :border="false" :column-num="4">
              <van-grid-item v-for="(item, index) in list" :key="index">
                <a href='#'>
                  <img :src='item.img'>
                  <br/>
                  <span>{{item.text}}</span>
                </a>
              </van-grid-item>
            </van-grid>
          </van-collapse-item>
          <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
          <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        </van-collapse>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Collapse, CollapseItem } from 'vant'
import { Grid, GridItem } from 'vant'

Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
export default {
  data() {
    return {
      value: '',
      activeName: '1',
      list: [
        {
          img: require('@/assets/img/classification/hot/airc.jpg'),
          text: '空调'
        },
        {
          img: require('@/assets/img/classification/hot/icecage.jpg'),
          text: '冰箱'
        },
        {
          img: require('@/assets/img/classification/hot/computer.png'),
          text: '电脑'
        },
        {
          img: require('@/assets/img/classification/hot/phone.png'),
          text: '手机'
        },
        {
          img: require('@/assets/img/classification/hot/fullScreen.jpg'),
          text: '全面屏手机'
        },
        {
          img: require('@/assets/img/classification/hot/book.jpg'),
          text: '图书'
        },
        {
          img: require('@/assets/img/classification/hot/snack.jpg'),
          text: '零食'
        },
        {
          img: require('@/assets/img/classification/hot/gamestarter.jpg'),
          text: '游戏机'
        },
        {
          img: require('@/assets/img/classification/hot/beautifly.jpg'),
          text: '化妆品'
        },
        {
          img: require('@/assets/img/classification/hot/dilu.jpg'),
          text: '消毒液'
        },
        {
          img: require('@/assets/img/classification/hot/keepfrominsects.jpg'),
          text: '驱蚊用品'
        },
        {
          img: require('@/assets/img/classification/hot/mask.jpg'),
          text: '口罩'
        },
        {
          img: require('@/assets/img/classification/hot/shooter.jpg'),
          text: '投影仪'
        },
        {
          img: require('@/assets/img/classification/hot/babycharge.jpg'),
          text: '充电宝'
        },
        {
          img: require('@/assets/img/classification/hot/heatbool.jpg'),
          text: '电热水壶'
        },
        {
          img: require('@/assets/img/classification/hot/electionicpan.jpg'),
          text: '电磁炉'
        },
        {
          img: require('@/assets/img/classification/hot/health.jpg'),
          text: '药品'
        },
        {
          img: require('@/assets/img/classification/hot/heat.jpg'),
          text: '测温枪'
        },
        {
          img: require('@/assets/img/classification/hot/datarope.jpg'),
          text: '数据线'
        }
      ]
    }
  },
  computed: {

  },
  mounted() {
  },
  methods: {

  }
}
</script>
<style lang="scss">
  .van-grid .van-grid-item a {
    text-align: center;
  }

  .van-grid .van-grid-item a img {
    width: 75%;
  }
</style>
