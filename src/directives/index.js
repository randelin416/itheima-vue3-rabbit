// vueUse窗口監視使用
import { useIntersectionObserver } from '@vueuse/core'

// 定義懶加載插件

export const lazyPlugin = {
   install (app) {
    // 懶加仔指令邏輯
    app.directive('img-lazy', {
        mounted (el, binding) {
            // el: 指令綁定的那個元素(img)
            // binding: binding.value 指令等於後面綁定的表達式的值 圖片url
            console.log(el, binding.value)
            const { stop } = useIntersectionObserver(
                el,
                ([{ isIntersecting }],) => {
                    console.log(isIntersecting)
                    if (isIntersecting) {
                        // 圖片進入窗口區域
                        el.src = binding.value
                        stop()
                    }
                }
              )
        }
    })
   } 
}