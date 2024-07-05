<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
// import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 測試插槽 -->
  <!-- <HomePanel title="精選好物" sub-title="新鮮好物 好多商品">
    <div>
      我是新鮮好物的推播內容
    </div>
  </HomePanel>
  <HomePanel title="人氣推薦" sub-title="人氣推薦 好多商品">
    <div>
      我是人氣推薦的推播內容
    </div>
  </HomePanel> -->
</template>

<!-- <template>
    <div>我是Home頁面</div>
    <div style="height: 1200px"></div>
</template> -->