<template>
    <div class="welcome">
        <small>欢迎，{{ name }}老师</small>
    </div>
    <div class="right">
        <span class="email">
            <el-icon :size="30" color="DodgerBlue">
                <Message />
            </el-icon>
        </span>
        <span class="head_img">
            <el-avatar :size="45" >{{ name }}</el-avatar>
        </span>
        
    </div>
</template>

<script >
import { Message } from '@element-plus/icons-vue'
export default {
    data() {
        return {
            name: '李哲'
        }
    },
    components:{
        Message,
    }
}
</script>

<style scoped>
.welcome{
    position: relative;
    top: 15px;
    display: inline-block;
    font-size: 20px;
    font-family: 幼圆;
}
.right{
    position: absolute;
    display: inline-block;
    right: 0;
}

.email{
    position: relative;
    display: inline-block;
    margin-top: 15px;
    margin-right: 15px;
    right: 10px;
}
.head_img{
    position: relative;
    bottom: 10px;
    display: inline-block;
    right: 10px;
}
</style>