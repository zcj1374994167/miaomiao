<template>
  <div id="main">
    <Header title="登录喵喵"></Header>
    <div id="content">
      <div class="login_body" v-if="showFlag">
        <div>
          <input
            class="login_text"
            type="text"
            placeHolder="账户名/手机号/Email"
          />
        </div>
        <div>
          <input
            class="login_text"
            type="password"
            placeHolder="请输入您的密码"
          />
        </div>
        <div class="login_btn">
          <input type="submit" value="登录" @click="login" />
        </div>
        <div class="login_link">
          <a href="#">立即注册</a>
          <a href="#">找回密码</a>
        </div>
      </div>
      <div v-else>
        <mt-cell title="修改资料" is-link>
          <span style="color: green"></span>
        </mt-cell>
        <mt-cell title="退出登录" is-link @click.native="loginOut">
          <span style="color: green"></span>
        </mt-cell>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { getToken, setToken, removeToken } from "../../utils/auth";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  data() {
    //这里存放数据
    return {
      showFlag: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    login() {
      setToken("123456");
      
      if (this.$route.query.id) {
        this.showFlag = false;
        this.$router.push({
          path:'/ticket',
          query:{id:this.$route.query.id}
        })
      }else{
        this.showFlag = false;
      }
    },
    loginOut() {
      removeToken();
      this.showFlag = true;
      this.$route.query.id=''
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    if (getToken()) {
      this.showFlag = false;
    } else {
      this.showFlag = true;
    }
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
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped>
#content .login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
</style>