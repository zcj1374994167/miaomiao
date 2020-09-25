<template>
  <div id="main">
    <Header title="喵喵影院"></Header>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城 <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_swtich">
          品牌 <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色 <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <div class="cinema_body">
        <ul>
          <li>
            <div>
              <span>大地影院(澳东世纪店)</span>
              <span class="q"><span class="price">22.9</span> 元起</span>
            </div>
            <div class="address">
              <span>金州区大连经济技术开发区澳东世纪3层</span>
              <span>1763.5km</span>
            </div>
            <div class="card">
              <div>小吃</div>
              <div>折扣卡</div>
            </div>
          </li>
          <li>
            <div>
              <span>大地影院(澳东世纪店)</span>
              <span class="q"><span class="price">22.9</span> 元起</span>
            </div>
            <div class="address">
              <span>金州区大连经济技术开发区澳东世纪3层</span>
              <span>1763.5km</span>
            </div>
            <div class="card">
              <div>小吃</div>
              <div>折扣卡</div>
            </div>
          </li>
          <li>
            <div>
              <span>大地影院(澳东世纪店)</span>
              <span class="q"><span class="price">22.9</span> 元起</span>
            </div>
            <div class="address">
              <span>金州区大连经济技术开发区澳东世纪3层</span>
              <span>1763.5km</span>
            </div>
            <div class="card">
              <div>小吃</div>
              <div>折扣卡</div>
            </div>
          </li>
          <li>
            <div>
              <span>大地影院(澳东世纪店)</span>
              <span class="q"><span class="price">22.9</span> 元起</span>
            </div>
            <div class="address">
              <span>金州区大连经济技术开发区澳东世纪3层</span>
              <span>1763.5km</span>
            </div>
            <div class="card">
              <div>小吃</div>
              <div>折扣卡</div>
            </div>
          </li>
          <li>
            <div>
              <span>大地影院(澳东世纪店)</span>
              <span class="q"><span class="price">22.9</span> 元起</span>
            </div>
            <div class="address">
              <span>金州区大连经济技术开发区澳东世纪3层</span>
              <span>1763.5km</span>
            </div>
            <div class="card">
              <div>小吃</div>
              <div>折扣卡</div>
            </div>
          </li>
          <li>
            <div>
              <span>大地影院(澳东世纪店)</span>
              <span class="q"><span class="price">22.9</span> 元起</span>
            </div>
            <div class="address">
              <span>金州区大连经济技术开发区澳东世纪3层</span>
              <span>1763.5km</span>
            </div>
            <div class="card">
              <div>小吃</div>
              <div>折扣卡</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
  methods: {},
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
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>