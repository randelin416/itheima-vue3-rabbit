import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
    // 導航列表的資料管理
    // state導航列表資料
    const categoryList = ref([])

    // action獲取導航資料的方法
    const getCategory = async () => {
        const res = await getCategoryAPI()
        console.log(res)
        categoryList.value = res.result
    }

    return {
        categoryList,
        getCategory
    }
})
