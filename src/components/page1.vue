<template>
  <div class="page1">
    <section class="pub_hr">
      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>page1</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
        <el-button class="mlem">刷新</el-button>
        <span class="mlem">
            page1共<font class='pub_count'>{{ other.totalCount }}</font>条
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
      msg: 'this is page1!',
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
    this.gets();
  },
  methods: {
    gets() {
      // this.axios.get('http://192.168.0.48:6001/systemmanagement/templatesetting/sysCommonSign/findTree').then(data => {
      //   let res = data.returnContent;
      //   console.log(res);
      // });
      //console.log(this.$location.sysMenuManagerfindTree)
    }
  }
}
</script>

<style lang="less">
  .page1{
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: auto;
  }
</style>
