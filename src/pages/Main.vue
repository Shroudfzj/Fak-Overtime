<template>
  <div class="main-page">
    <notice class="main-page-notice"></notice>
    <div class="just-wadu">
      <span>WaduFak</span>
    </div>
    <div class="each-line">
      <Card class="main-page-card"></Card>
      <Card class="main-page-card"></Card>
      <Card class="main-page-card"></Card>
      <Card class="main-page-card"></Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Notice from "../components/Notice.vue";
export default {
  components: {
    Card,
    Notice
  }
};
</script>

<style scoped>
.main-page {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem 2rem 0 2rem;
}
.just-wadu {
  display: flex;
  flex-basis: 100%;
  justify-content: center;
}
.just-wadu span {
  flex-basis: 100%;
  font-size: 3rem;
  margin: 1rem auto 2rem auto;
  border-bottom: 1px solid #eae3e3;
}
.main-page-notice {
  flex-basis: 100%;
}
.each-line {
  display: flex;
  justify-content: center;
  flex-basis: 100%;
}
.main-page-card {
  flex-basis: 25%;
  margin-right: 1.5rem;
}
</style>
