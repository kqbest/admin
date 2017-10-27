<template>
  <div class="page3">
    <section class="pub_hr">
      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>page3</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
        <el-button class="mlem">刷新</el-button>
        <span class="mlem">
            page3共<font class='pub_count'>{{ other.totalCount }}</font>条
        </span>
      </div>
    </section>
    <div>
      <h2>{{ msg }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is page3!',
      form: {

      },
      rules: {

      },
      array: {

      },
      obj: {

      },
      other: {
        totalCount: '0'
      },
      alert: {

      }
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="less">
  .page3{
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: auto;
  }
</style>
