<template>
    <div
        style="font-family: youyuan;font-size: 20px;font-weight: bolder;color: rgb(80, 208, 33);border-bottom: 1px solid #ccdada;">
        考试成绩修改</div>
    <div class="main" v-if="isVisible0">
        <div class="first">
            <el-input v-model="sid" placeholder="请输入学号" />
        </div>

        <div class="but">
            <el-button type="success" :icon="Search" @click="hand_search1">查询</el-button>
            <el-button :icon="Delete" @click="reset1">重置</el-button>
        </div>
    </div>
    <div v-if="isVisible1">
        <div class="main">
            <div class="first">
                <el-input v-model="grade" placeholder="请输入修改后成绩" style="position: relative;" />
            </div>

            <div class="but">
                <el-button type="success" :icon="Search" @click="hand_change2">更改</el-button>
                <el-button :icon="Delete" @click="reset2">重置</el-button>
            </div>
        </div>
    </div>
    <div style="height: 100px;display: block;"></div>

    <div class="main1" v-if="isVisible">

        <el-table :data="tableData" style="width: 100% ;height: 250px ;position: relative;left:30%">
            <el-table-column fixed prop="exam" label="考试名称" width="130" />
            <el-table-column prop="name" label="姓名" width="120" />
            <el-table-column prop="sid" label="学号" width="160" />
            <el-table-column prop="score" label="成绩" width="120" />
            <el-table-column prop="ack" label="是否提出申请" width="120" />
            <el-table-column prop="more" label="备注" width="180" />
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="{ row }">
                    <el-button link type="primary" size="small" @click="() => hand_change(row)">修改</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts" setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { Delete, Search } from '@element-plus/icons-vue'
import { get, post } from '../../axios_setting/index'
import { ElMessage } from 'element-plus'
const isVisible0 = ref(true);
const isVisible = ref(false);
const isVisible1 = ref(false);
const sid = ref('')
const remid = ref('')
const grade = ref('')
const tableData = ref<Array<{ exam: string; name: string; sid: string; score: string; ack: string, more: string }>>([])
const pagetable = ref<Array<{ exam: string; name: string; sid: string; score: string; ack: string, more: string }>>([])
const alter_msg1 = (msg) => {
    ElMessage({
        message: msg,
        type: 'warning',
    })
}
const alter_msg2 = (msg) => {
    ElMessage({
        message: msg,
        type: 'success',
    })
}
const hand_search1 = () => {
    if (sid.value != '') {
        post('/api/updatechange0', { sid: sid.value }).then((response) => {
            sid.value = '';
            tableData.value = response;
            isVisible.value = true;
        }).catch((err) => {
            console.log(err);
        })
    }
    else {
        alter_msg1("学号不能为空！")
    }
}
const hand_change = (row) => {
    isVisible0.value = false;
    isVisible.value = false;
    isVisible1.value = true;
    pagetable.value = row;
    remid.value = row.id;
}
const reset1 = () => {
    sid.value = '';
}
const hand_change2 = () => {
    if (grade.value != '') {
        isVisible0.value = true;
        isVisible1.value = false;
        console.log(pagetable.value)
        post('/api/updatechange1', { id: remid.value, score: grade.value }).then((response) => {
            sid.value = '';
            isVisible0.value = true;
            isVisible.value = false;
            isVisible1.value = false;
            grade.value = ''
            alter_msg2("修改成功!")
        }).catch((err) => {
            console.log(err);
        })
    }
    else {
        alter_msg1("修改成绩不能为空")
    }
}
const reset2 = () => {
    grade.value = '';
}
</script>
    
<style scoped>
.main {
    background-color: rgb(255, 254, 254);
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    border-color: #ccdada;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.main1 {
    max-width: 742px;
}

.m-2 {
    width: 180px;
}

.second {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.first {
    display: block;
}

span {
    font-size: medium;
    font-weight: 700;
}
</style>