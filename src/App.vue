<template>
  <div id="app">
    <header class="this_header">
      <!-- <div class="logo">后台管理系统</div>
      <div class="user">
        <el-badge :value="20" :max="99" class="item">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              {{ userName }}<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>信息中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-badge>
      </div> -->
    </header>
    <section class="this_main">
      <nav class="this_nav">
        <el-button type="text" class="el-icon-menu this_spread" @click="isCollapse=!isCollapse"></el-button>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" router unique-opened @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span>page1</span>
            </el-menu-item>
            <el-menu-item index="/page2">
              <i class="el-icon-menu"></i>
              <span>page2</span>
            </el-menu-item>
            <el-menu-item index="/page3">
              <i class="el-icon-menu"></i>
              <span>page3</span>
            </el-menu-item>
            <el-menu-item index="/page4">
              <i class="el-icon-menu"></i>
              <span>page4</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-menu"></i>
              <span>选项1</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i>
              <span>选项2</span>
            </el-menu-item>
            <el-menu-item index="2-3">
              <i class="el-icon-menu"></i>
              <span>选项3</span>
            </el-menu-item>
            <el-menu-item index="2-4">
              <i class="el-icon-menu"></i>
              <span>选项4</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i>
              <span>选项1</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-menu"></i>
              <span>选项2</span>
            </el-menu-item>
            <el-menu-item index="3-3">
              <i class="el-icon-menu"></i>
              <span>选项3</span>
            </el-menu-item>
            <el-menu-item index="3-4">
              <i class="el-icon-menu"></i>
              <span>选项4</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </nav>
      <section class="this_view">
        <router-view class="view"></router-view>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userName: 'admin',
      isCollapse: true
    }
  },
  created() {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .this_header{
    width: 100%;
    height: 60px;
    padding: 0 30px;
    color: #fff;
    background-color: #2f4050;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
      font-size: 20px;
    }
    .user{
      .el-dropdown{
        color: #fff;
      }
      .el-badge__content.is-fixed{
        right: 0px;
      }
    }
  }
  .this_main{
    background-color: #f9fafc;
    flex: 1;
    display: flex;
    .this_nav{
      background-color: #eef1f6;
      .this_spread{
        width: 100%;
        background-color: #eef1f6;
      }
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
      }
    }
    .this_view{
      height: 100%;
      padding: 15px 20px 0 20px;
      flex: 1;
      border: 1px solid blue;
      overflow: hidden;
      .view{
        height: 100%;
        border: 1px solid green;
      }
    } 
  }
}
</style>
