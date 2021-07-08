<!-- home -->
<template>
  <div>
		<van-button @click="goUser" plain hairline type="primary">用户</van-button>
		<van-button @click="onCount" plain hairline type="primary">用户</van-button>
		<span>{{ number }}</span>
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      wechat: `${this.$cdn}/wx/640.gif`,
			number: 0
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    this.initData()
  },
  methods: {
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { user: 'sunnie' }
      getUserInfo(params)
        .then(() => { })
        .catch(() => { })
    },
    // Action 通过 store.dispatch 方法触发
    doDispatch() {
      this.$store.dispatch('setUserName', '真乖，赶紧关注公众号，组织都在等你~')
    },
    goGithub(index) {
      window.location.href = 'https://github.com/sunniejs/vue-h5-template'
    },
		goUser() {
			this.$router.push({name: 'User', query: { id: 1, vip: false }});
		},
		onCount() {
			this.number++;
		}
  }
}
</script>
<style lang="scss">
	
</style>
