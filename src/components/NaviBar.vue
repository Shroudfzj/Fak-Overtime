<template>
  <div class>
    <el-menu
      router
      :default-active="activeIndex"
      class="navbar-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#1F2124"
      text-color="#c9d6de"
      active-text-color="#f0f5f9"
    >
      <el-menu-item index="/Main">主页</el-menu-item>
      <el-menu-item index="/Movie">电影</el-menu-item>
      <el-menu-item index="3">关于</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NaviBar",
  data() {
    return {};
  }
};
</script>
<style scoped>
.navbar-menu {
  margin: 0 0 3rem 0;
  width: 100%;
}
.movie-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}
</style>
