<template>
  <div class="notice">
    <div class="content">
      <i class="el-icon-bell"></i>
      <div class="info">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      content: "描述性字段"
    };
  }
};
</script>
<style scoped>
.content {
  display: flex;
  align-items: center;
  /* padding: 1.3rem 1rem 1.3rem 1rem; */
  background-color: #d9edf7;
  border: 1px solid #bce8f1;
  border-radius: 5px;
}
i {
  margin: 1rem;
  color: #31708F;
}
.info {
  color: #31708F;
}
</style>