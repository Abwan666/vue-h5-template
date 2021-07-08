<template>
  <div>
    <div>user页面</div>
	<div v-if="vip">100 yuan</div>
	<div v-else>120 yuan</div>
	<div v-for="item in list">
		{{item}}<br/>
	</div>
  </div>
</template>

<script>
export default {
  data() {
	  return {
		  vip : false,
		  list: ["haha","hehe"]
	  }
  },
  created() {
	  this.vip = this.$route.query.vip;
  },
  methods: {

  }
}
</script>

<style>
</style>
