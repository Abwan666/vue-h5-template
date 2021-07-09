<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import index from '../../assets/img/index.png'
import index_select from '../../assets/img/index_select.png'
import class_u from '../../assets/img/class.png'
import class_select from '../../assets/img/class_select.png'
import shoppingcart_select from '../../assets/img/shoppingcart_select.png'
import shoppingcart from '../../assets/img/shoppingcart.png'
import mine from '../../assets/img/mine.png'
import mine_select from '../../assets/img/mine_select.png'

export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: {
            active: index_select,
            inactive: index
          }
        },
        {
          title: '分类',
          to: {
            name: 'Classification'
          },
          icon: {
            active: class_select,
            inactive: class_u
          }
        },
        {
          title: '购物车',
          to: {
            name: 'ShoppingCart'
          },
          icon: {
            active: shoppingcart_select,
            inactive: shoppingcart
          }
        },
        {
          title: '我的',
          to:{
            name: 'Mine'
          },
          icon: {
            active: mine_select,
            inactive: mine
          }
        }
      ]
    }
  },
  components: {
    TabBar,
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
