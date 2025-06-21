<script setup lang="ts">
// 引入必要功能
import { RouterView } from 'vue-router';

// 引入元件
import Navbar from '@/components/Navbar.vue';

// 響應式資料容器
const nav = ref([])
const siteTitle = ref('')
const banner = ref({
  id: '',
  title: '',
  subtitle: ''
})
const sections = ref([])

//API
// 引入必要功能
//ref()：建立一個「響應式變數」，可以被追蹤、用在畫面上。
//onMounted()：Vue 的生命周期鉤子，當元件被掛載（畫面顯示出來）時執行裡面的程式碼。
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 狀態
//建立一個「響應式變數」,儲存從 API 取得的資料,Vue 會自動追蹤 data 的變化，當 data.value 更新，畫面會自動重新渲染。
const data = ref();

const getDate = async () => {
  try {
    // 使用 axios 發送 GET 請求到組合出來的API 路徑
    const res = await axios.get('/data.json')

    // 拿到回傳結果後，將 res.data 存到 data 裡
    data.value = res.data

    nav.value = res.data.nav // 選單
    siteTitle.value = res.data.siteTitle //選單-標題
    banner.value = res.data.banner // 首頁
    sections.value = res.data.sections  // 內容
  } catch (err) {
    // 如果請求失敗
    console.error('讀取資料失敗:', err)
  }
}

/* ------------------------
  生命周期：mounted
-------------------------*/
onMounted(() => {
  getDate();
})

/* ------------------------
  生命周期：unmounted
-------------------------*/
</script>

<template>
  <div class="layout">
    <Navbar :nav="nav" :site-title="siteTitle" />


    <RouterView v-slot="{ Component }">
      <component :is="Component" :banner="banner" :sections="sections" />
    </RouterView>
  </div>

  <!-- 
  RouterView + 動態元件傳 props

  Vue Router 的 動態元件 + 插槽 (slot) 解構用法，搭配 <component :is="..."> 來傳遞額外的 props 給目前的頁面元件（例如 Home.vue）。

  RouterView
  是 Vue Router 提供的元件，會根據當前路由自動渲染對應的頁面元件（像是 Home.vue、About.vue）。

  v-slot="{ Component }"
  這裡代表：你用「具名插槽語法」取出目前該顯示的頁面元件的「元件實體」，也就是 Component。

  <component :is="Component" />
  Vue 的 <component> 是動態元件，你可以用 :is="xxx" 指定要渲染哪一個元件。

  :banner="banner"
  把 banner 資料作為 prop 傳給 Component，也就是傳給現在正在顯示的頁面元件（例如 Home.vue）。
  -->

  <!--
  <KeepAlive>
    <RouterView />
  </KeepAlive>
  -->
</template>