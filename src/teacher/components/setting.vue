<template>
    <div class="topmsg" style="margin-top: 30px;">个人信息修改</div>
    <span style="margin-left: 26%;">输入新密码</span><el-input v-model="input1" type="password" placeholder="输入密码"
        show-password style="margin-top: 30px;margin-bottom: 30px;width: 500px;" />
    <div></div>
    <span style="margin-left: 26%;">确认新密码</span><el-input v-model="input2" type="password" placeholder="确认密码"
        show-password style="margin-top: 30px;margin-bottom: 30px;width: 500px;" />
    <div></div>
    <button class="btn" type="submit" @click="checkPasswords" >
        重   置
    </button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const input1 = ref('')
const input2 = ref('')
const checkPasswords = () => {
    if (input1.value != input2.value && (input1.value != ''&&input2.value != '')) {
        alert('两次输入的密码不一致，请重新输入！')
        input1.value='';
        input2.value='';
    }
    else if(input1.value == ''||input2.value == ''){
        alert('密码不能为空，请重新输入！')
        input1.value='';
        input2.value='';
    }
}
</script>
<style scoped>
.topmsg {
    font-family: youyuan;
    color: black;
    text-align: center;
    font-size: 30px;
}

span {
    font-family: songti;
    margin-right: 5px;
    font-size: 18px;
    color: rgb(211, 58, 58);
    opacity: 80%;
}
.btn {
  position: relative;
  left: 43%;
  height: 60px;
  background-color: #34bd5b;
  color: #fff;
  padding: 6px 12px;
  font-family: 幼圆;
  font-size: 25px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 7px;
  text-decoration: none;
  border: 1px solid transparent;
  width: 170px;
}
.btn:hover {
  background-color: rgb(6, 6, 129);
}
</style>

