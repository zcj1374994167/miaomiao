<template>
  <div class="back">
    <span @click="goBack">&lt;</span>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goBack() {
      history.go(-1);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
<style lang='scss' scoped>
.back {
  width: 100%;
  height: 40px;
  // background: red;
  position: relative;
  span {
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 40px;
    // background: #ccc;
  }
}
</style>