<template>
  <div class="movie_body">
    <ul>
      <li v-for="item in list" :key="item._id">
        <div class="pic_show"><img :src="item.imgurl" /></div>
        <div class="info_list">
          <h2>{{ item.title }}}</h2>
          <p>
            观众评 <span class="grade">{{ item.score }}</span>
          </p>
          <p>主演: {{ item.stars }}</p>
          <p>{{ item.description }}</p>
        </div>
        <div class="btn_mall" @click="goCell(item._id)">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getToken } from "../../../utils/auth";
export default {
  data() {
    //这里存放数据
    return {
      list: [],
      img_base_url: "http://localhost:8888/",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getMovies() {
      this.$http.get("/getMovieLists").then((res) => {
        // console.log(res);
        this.list = res.list;
        this.list.forEach((item) => {
          item.imgurl = this.img_base_url + item.imgurl;
        });
      });
    },
    goCell(id) {
      if (getToken()) {
        this.$router.push({
          path: "/ticket",
          query: { id: id },
        });
      } else {
        this.$router.push({
          path: "/mine",
          query: { id: id },
        });
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getMovies();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>