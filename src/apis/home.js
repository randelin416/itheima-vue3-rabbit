import httpInstance from '@/utils/http'

// 獲取banner

export function getBannerAPI () {
    return httpInstance({
        url: '/home/banner'
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function findNewAPI(){
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * @description: 獲取人氣推薦
 * @param {*}
 * @return {*}
 */
export function findHotAPI(){
    return httpInstance({
        url: '/home/hot'
    })
}
