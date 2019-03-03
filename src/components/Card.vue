<template>
  <div class="card">
    <div class="title">{{title}}</div>
    <div class="content">{{content}}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      title: "标题",
      content: "描述性字段"
    };
  }
};
</script>
<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 17rem;
  border: 1px solid #eae3e3;
  box-shadow: 0 2px 1px #E0E3DA;
}
.title {
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  padding: 0.8rem 0.6rem 0.8rem 0.6rem;
  background-color: #eeeeee;
}
.content {
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  padding: 1rem 0.6rem 1rem 0.6rem;
  background-color: white;
}
</style>