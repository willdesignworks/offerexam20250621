<script setup lang="ts">
// 引入必要功能
import { RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 引入元件
import Navbar from '@/components/Navbar.vue';

// 響應式資料容器
const data = ref();
const nav = ref([])
const siteTitle = ref('')
const banner = ref({
  id: '',
  title: '',
  subtitle: ''
})
const sections = ref([])

const getDate = async () => {
  try {
    const res = await axios.get('/data.json')
    data.value = res.data

    nav.value = res.data.nav // 選單
    siteTitle.value = res.data.siteTitle //選單-標題
    banner.value = res.data.banner // 首頁
    sections.value = res.data.sections  // 內容
  } catch (err) {
    console.error('讀取資料失敗:', err)
  }
}

/* ------------------------
  生命周期：mounted
-------------------------*/
onMounted(() => {
  getDate();
})
</script>

<template>
  <div class="layout">
    <Navbar :nav="nav" :site-title="siteTitle" />

    <RouterView v-slot="{ Component }">
      <component :is="Component" :banner="banner" :sections="sections" />
    </RouterView>
  </div>

</template>