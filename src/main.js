// import './assets/main.css'
// 引入初始化樣式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// // 測試接口函數
// import { getCategory } from '@/apis/testAPI'
// getCategory().then(res => {
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')