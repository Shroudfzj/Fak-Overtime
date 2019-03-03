<template>
  <div class>
    <template class="body-table">
      <el-table class="movie-list" stripe :data="movieList">
        <el-table-column prop="name" label="电影" width="100"></el-table-column>
        <el-table-column prop="director" label="导演" width="100"></el-table-column>
        <el-table-column prop="score" label="评分" width="80">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.score>7.5">{{scope.row.score}}</el-tag>
            <el-tag type="warning" v-else-if="scope.row.score<4.5">{{scope.row.score}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="language" label="语言" width="200"></el-table-column>
        <el-table-column prop="relatedInfo" label="剧情简介"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      title: "标题",
      main: "描述性字段",
      activeIndex: "1",
      movieList: [
        {
          name: "低俗小说",
          director: "昆汀・塔伦蒂诺",
          score: 8.8,
          language: "英语 / 西班牙语 / 法语",
          relatedInfo:
            "盗贼 “小南瓜” 和 “小兔子” 在早餐店里打劫，却遇上了天大的麻烦 —— 黑社会成员朱尔斯（塞缪尔・杰克逊 Samuel L. Jackson 饰）和文森特（约翰・特拉沃尔塔 John Travolta 饰）在店内用餐，可谓天外有天。二人是否会放过两名小盗贼？ ..."
        },
        {
          name: "流浪地球",
          director: "郭帆",
          score: 7.9,
          language: "汉语普通话 / 英语 / 俄语 / 法语 / 日语 / 韩语 / 印尼语",
          relatedInfo:
            "近未来，科学家们发现太阳急速衰老膨胀，短时间内包括地球在内的整个太阳系都将被太阳所吞没。为了自救，人类提出一个名为 “流浪地球” 的大胆计划..."
        },
        {
          name: "小时代",
          director: "郭敬明",
          score: 4.4,
          language: "汉语普通话",
          relatedInfo:
            "这是一个梦想闪耀的时代，这也是一个理想冷却的时代；这是最坏的时代，这也是最好的时代，这是我们的小时代。 这是当下时代一群时尚年轻人的青春故事，也是属于他们生活的真实写照，更是我们这个时代的一个缩影..."
        }
      ]
    };
  }
};
</script>
<style scoped>
.navbar-menu {
  margin-bottom: 3rem;
  width: 98%;
  margin-right: auto;
  margin-left: auto;
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
