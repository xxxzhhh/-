<template>
  <div class="page">
    <!-- 顶部 -->
    <transition name="fade1" mode="out-in">
      <div class="top" v-if="showTo" key="tologin">学  生  成  绩  管  理  系  统</div>
    </transition>
    <transition name="fade1" mode="out-in">
      <button @click="toggleElements" v-if="showTo" key="tologin" class="tologin">点击进入系统</button>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="showTo" key="totip" class="totip">Welcome to our score management system </div>
    </transition>
    <div class="creaters">2023 成绩管理系统 By XZH LZ and QJJ</div>
    <!-- 登录框 -->
    <transition name="fade" mode="out-in">
      <div class="register-content" v-if="showRegister" key="register-content">
        <!-- 顶部提示 -->
        <div class="tip-top">
          密码登录
        </div>
        <!-- 输入框 -->
        <div class="reg">
          <form @submit.prevent="login">
            <div class="block">
              <img class="pic5" :src="pic5" />
              <input id="username" name="username" placeholder="用户名" class="auth_input" type="text" v-model="username"
                required>
            </div>
            <div class="block1">
              <img class="pic6" :src="pic6" />
              <input id="password" placeholder="密码" class="auth_input" type="password" v-model="password"
                autocomplete="off" require>
            </div>

            <button class="btn" type="submit">
              登 <span style="margin: 0 10px;">
              </span>
              录
            </button>
          </form>
        </div>
        <div class="reg1">
          提示：
          1.首次登录时，使用学号作为用户名，初始密码为身份证后六位，进入平台后请修改密码；
          2.教师与学生使用相同的方式登录，出现登录问题，请联系管理员。
        </div>
      </div>
    </transition>
    <!-- 主背景 -->
    <transition name="fade" mode="out-in">
      <div class="main-page" v-if="showPic3" key="pic3">
        <img class="pic3" :src="pic3" />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="main-page" v-if="showRegister" key="pic7">
        <img class="pic7" :src="pic7" />
      </div>
    </transition>
    

  </div>
</template>

<script>
import * as echarts from 'echarts';
import { mapMutations } from 'vuex';
import pic1 from '@/assets/top.png';
import pic2 from '@/assets/top2.png';
import pic3 from '@/assets/mainpage.png';
import pic4 from '@/assets/head.png';
import pic5 from '@/assets/smallhead.png';
import pic6 from '@/assets/smalllock.png';
import pic7 from '@/assets/mainpage1.png';
export default {
  data() {
    return {
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
      pic7,
      username: '',
      password: '',
      showRegister: false,
      showTo: true,
      showPic3: true,
      chart: null,
    }
  },
  methods: {
    ...mapMutations(['login']),
    login() {
      // 实际的登录逻辑，例如，发送登录请求到服务器
      // 如果登录成功，调用 `this.login()` 来更新 `isLoggedIn` 状态
      // this.login()
      this.$router.push('/teacher/main')
    },
    toggleElements() {
      this.showRegister = true;
      this.showTo = false;
      this.showPic3 = false;
    },
  },
  mounted() {
    const buttons = document.getElementsByClassName("tologin");
    const toggleElements = (className, displayValue) => {
      const elements = document.getElementsByClassName(className);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = displayValue;
      }
    };
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        toggleElements("tologin", "none");
        toggleElements("totip", "none");
        toggleElements("register-content", "block");
        toggleElements("pic3", "none");
        toggleElements("pic7", "block");
      });
    }
  }
}
function init() {
  var myChart = echarts.init(document.getElementById('main'));
  var option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };
  myChart.setOption(option);
}
</script>
  
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade1-enter-active,
.fade1-leave-active {
  transition: opacity 0.1s, transform 0.1s;
}

.fade1-enter,
.fade1-leave-to {
  opacity: 0;
  transform: translateY(20px);
}


body {
  margin: 0;
}

.top {
  font-family: 幼圆;
  color: #fff;
  font-size: 50px;
  text-align: center;
  opacity: 80%;
  position: absolute;
  left: 35.6%;
  overflow: hidden;

}

.pic1 {
  margin: 0;
  padding: 0;
  margin-left: 2%;
  max-height: 76px;
  max-width: auto;
}

.pic2 {
  float: right;
  margin-right: 2%;
  max-height: 76px;
  max-width: auto;
}

.pic3 {
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: 742px;
}

.pic4 {
  height: 80px;
  width: auto;
}

.pic5 {
  position: relative;
  margin-top: 0%;
  left: 80px;
}

.pic6 {
  position: relative;
  margin-top: 0%;
  left: 80px;
}

.pic7 {
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: 742px;
}

.page {
  color: gray;
  padding: 0;
  font-family: 'Microsoft YaHei';
  font-size: 13px;
}

.main_page {
  position: relative;
}

.register-content {
  position: absolute;
  width: 460px;
  height: 290px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color:rgb(255, 255, 255,0.4);
  border: 2px solid #3a1eb703;
}

.tip-top {
  border: 1px solid black;
  width: 100%;
  height: 15%;
  text-align: center;
  color: black;
  font-family: 幼圆;
  font-size: 30px;
  background-color: transparent;
}

.reg {
  display: inline-block;
  width: 100%;
  height: 85%;
  border: 1px solid black;
  /* background-color: rgb(255, 0, 0); */
  /* opacity: 80%; */
}

.reg1 {
  display: inline-block;
  width: 100%;
  height: 20%;
  border: 1px solid black;
}

.block {
  width: 100%;
  height: 40%;

}

.block1 {
  width: 100%;
  height: 100px;
}

#username {
  position: relative;
  left: 80px;
  bottom: 16px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  font-size: 14px;
  width: 209px;
  margin-top: 10%;
  color: #676a6c;
}

#password {
  position: relative;
  left: 80px;
  bottom: 16px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  font-size: 14px;
  width: 209px;
  margin-top: 10%;
  margin-bottom: 10%;
  color: #676a6c;
}

.totip {
  position: absolute;
  left: 31.5%;
  bottom: 40%;
  font-family: 幼圆;
  color: #fff;
  font-size: 40px;
  text-align: center;
  opacity: 80%;
}

.tologin {
  position: absolute;
  left: 50%;
  bottom: 50%;
  height: 90px;
  width: 150px;
  background-color: rgb(247, 173, 37);
  color: #ffffff;
  padding: 6px 12px;
  font-family: 幼圆;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  border: 2px solid #fff;
  opacity: 81%;
}

.btn {
  position: relative;
  left: 15%;
  height: 30%;
  background-color: #3049d7;
  color: #fff;
  padding: 6px 12px;
  font-family: 幼圆;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 3px;
  text-decoration: none;
  border: 1px solid transparent;
  width: 70%;
}

.tologin:hover {
  background-color: #e86620;
  /* 鼠标悬停时的背景颜色 */
  color: #ffffff;
  /* 鼠标悬停时的文本颜色 */
}

.creaters {
  position:absolute;
  left: 80%;
  bottom: 0;
  /* top: 150%; */
  color: #fff;
  font-family: 幼圆;
  font-size: 16px;
  opacity: 80%;
}</style>