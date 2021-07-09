<template>
  <div class="index-container">

    <div class='top'>
      <van-cell class='van-hairline--top' title="购物车"/>
    </div>
    <div class='goods-list'>
      <van-checkbox-group v-model="result" >

        <van-cell  v-for='(item,index) in goods' :key='index' class='shop_pane'>
         {{item.shopname}}
          <van-cell-group>
            <van-cell
              v-for="(item, index) in item.buy"
              clickable
              :key="item"
              @click="toggle(index)"
              class='shop_pane'
            >
              <template #icon>
                <van-checkbox :name="item" ref="checkboxes" @click='addGoods(item.price,item.amount)'/>
              </template>
              <van-card
                :price="item.price"
                :title="item.title"
                :thumb="item.thumb"
              >
                <template #bottom>
                  <van-stepper v-model="item.amount" theme="round" button-size="22" disable-input />
                </template>

                <template #footer>
                  <button size="mini" style='color: white;background-color: red;border-color: red;border-radius: 10px'>删除</button>
                </template>
              </van-card>
            </van-cell>
          </van-cell-group>
        </van-cell>
      </van-checkbox-group>
    </div>



    <van-submit-bar :price="0" button-text="提交订单" @submit="onSubmit">
    </van-submit-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Checkbox, CheckboxGroup } from 'vant'
import { Card } from 'vant'
import { Stepper } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(Stepper);
Vue.use(Card)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
export default {
  data() {
    return {
      result: [],
      list: ['a', 'b'],
      checked: true,
      goods:[
        {
          shopname: "Boy London官方旗舰店",
          buy: [
            {
              price: "1299.00",
              title: 'boy london旗舰官网春满印黑粉羽毛翅膀灰色连帽毛衣500603 灰色 S',
              thumb: require('@/assets/img/classification/shoppingcart/clothes.jpg'),
              amount: 1
            },
            {
              price: "1299.00",
              title: 'boy london旗舰官网春满印黑粉羽毛翅膀灰色连帽毛衣500603 灰色 S',
              thumb: require('@/assets/img/classification/shoppingcart/clothes.jpg'),
              amount: 1
            },
            {
              price: "1299.00",
              title: 'boy london旗舰官网春满印黑粉羽毛翅膀灰色连帽毛衣500603 灰色 S',
              thumb: require('@/assets/img/classification/shoppingcart/clothes.jpg'),
              amount: 1
            }
          ]
        },
        {
          shopname: "靓仔自营",
          buy: [
            {
              price: "6599.00",
              title: 'Apple iPhone 12 (A2404) 128GB 白色 支持移动联通电信5G 双卡双待手机',
              thumb: require('@/assets/img/classification/shoppingcart/iphone12.jpg'),
              amount: 1
            },
            {
              price: "4999.00",
              title: '联想ThinkPad E15 2021 锐龙版 15.6英寸轻薄笔记本电脑(锐龙7 5700U 16G双通道 512G 100%sRGB)黑',
              thumb: require('@/assets/img/classification/shoppingcart/thinkpad.jpg'),
              amount: 1
            },
            {
              price: "219.00",
              title: '美的（Midea）电压力锅 一锅双胆 智能预约 WQC50A1P 5L高压锅 适用3-6人',
              thumb: require('@/assets/img/classification/shoppingcart/media.jpg'),
              amount: 1
            }
          ]
        }
      ]
    }

  },
  created() {

  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    addGoods: {

    }
  },
}
</script>

<style>
.index-container {
  padding: 3px;
}

.van-hairline--top {
  background-color: red;
  color: white;
}

.shop_pane {
  margin-top: 8px;
  border-radius: 20px;
  background-color: white;
}

.shop_pane div {
  background-color: white;
}


.van-submit-bar{
  bottom:50px;
}
</style>
