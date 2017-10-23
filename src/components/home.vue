<template>
  <div class="def">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'def',
  data () {
    return {
      msg: ''
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped>
  
</style>
