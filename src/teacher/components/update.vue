<template style="max-width: 742px;">
  <el-upload class="upload-demo"  drag action="http://localhost:3000/api/update/updatenew" multiple
      :on-success="handleUploadSuccess">
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
          将文件拖动到这里或<em>点击上传</em>
      </div>
      <template #tip>
          <div class="el-upload__tip" style="position: relative;left: 300px;max-width: 700px;">
              请上传 .xlsx 或 .xls 文件，并请注意文件的格式（从左到右）为：分数，考试名称，科目，学生学号，否则会导致上传出错！
          </div>
      </template>
  </el-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
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
const handleUploadSuccess = (response, file) => {
  console.log('File uploaded successfully:', file)
  sendFileToApiUpdate(file)
}

const sendFileToApiUpdate = (file) => {
  const form = new FormData()
  form.append('file', file.raw)
  if (file) {
      fetch('http://localhost:3000/api/update/updatenew', {
          mode: 'no-cors',
          method: 'post',
          body: form,
          headers: {
              'Content-Type': 'application/json'
          }
      })
          .then(response => {
              if (response) {
                  alter_msg2("上传成功！")
              } else {
                  alter_msg1("上传失败，请重试！")
              }
          })
          .catch((err) => {
              alter_msg1("上传失败，请重试！")
          });
  } else {
      alter_msg1("不能上传空文件！")
  }


}
</script>
<style scoped>
  
</style>