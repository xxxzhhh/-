import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import '@element-plus/icons-vue'
import './assets/global.css'
// import VueECharts from 'vue-echarts';

// 创建Vue应用实例
const app = createApp(App)

// 使用Vue Router和Vuex
app.use(router)
app.use(store)
// 使用Element Plus
app.use(ElementPlus)
// 挂载应用到HTML元素
app.mount('#app')