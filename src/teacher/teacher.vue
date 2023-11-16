<template>
    <div class="common-layout">
        <el-container style="height:742px">
            <el-aside width="200px">
                <div class="logo">成绩管理系统</div>
                <div class="menu"><Menu /></div>
            </el-aside>
            <el-container>
                <el-header>
                    <Head />
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer height="30px">2023 成绩管理系统 By XZH LZ and QJJ</el-footer>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import Menu from './components/menu.vue'
import Head from './components/head.vue'
// import Test from './test.vue'
// import Query from './query.vue'
export default {
    components: {
        Menu,
        Head,
        // Query,
        // Test,
    }
}
</script>
<style scoped>
.logo{
    text-align: center;
    font-size: 25px;
    font-family: YouYuan;
    font-weight: bolder;
    padding-bottom: 20.8px;
    padding-top: 10px;
    border-bottom: 1px solid #ccdada;
}
.menu{
    margin-top: 10px;
}
.el-header{
    border-bottom-style: solid;
    border-width: 1px;
    border-color:#ccdada;
}
.el-aside{
    border-style: solid;
    border-width: 1px;
    border-color:#ccdada;
}
.el-footer{
    text-align: center;
    font-family: FangSong;
    font-weight: border;
    font-size: 15px;
    border-top-style: solid;
    border-width: 1px;
    border-color:#ccdada;
}
.el-main{
    background-color: white;
}
.el-container{
    height: 100%;
}
.common-layout{
    height: 742px;
}
body{
    height: 742px;
}
</style>