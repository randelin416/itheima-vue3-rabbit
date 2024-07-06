// import './assets/main.css'
// 引入初始化樣式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入懶加載插件並註冊
import { lazyPlugin } from '@/directives'

// vueUse窗口監視使用
// import { useIntersectionObserver } from '@vueuse/core'

// // 測試接口函數
// import { getCategory } from '@/apis/testAPI'
// getCategory().then(res => {
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

// 定義全局指令(懶加載)
// app.directive('img-lazy', {
//     mounted (el, binding) {
//         // el: 指令綁定的那個元素(img)
//         // binding: binding.value 指令等於後面綁定的表達式的值 圖片url
//         console.log(el, binding.value)
//         useIntersectionObserver(
//             el,
//             ([{ isIntersecting }],) => {
//                 console.log(isIntersecting)
//                 if (isIntersecting) {
//                     // 圖片進入窗口區域
//                     el.src = binding.value
//                 }
//             }
//           )
//     }
// })