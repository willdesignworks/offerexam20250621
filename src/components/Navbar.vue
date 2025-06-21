<script setup lang="ts">
// 定義一個 TypeScript 型別 NavItem，代表一個選單項目物件
type NavItem = {
  id: string,
  title: string //屬性，型別是字串
}

// 使用 defineProps() 宣告這個元件會接收一個 prop，名為 nav
// 接收 nav 作為 props，為 NavItem 陣列
const { nav, siteTitle } = defineProps<{
  nav: NavItem[]
  siteTitle: string
}>()

/* 縮寫
defineProps<{
  nav: { title: string }[]
}>()
*/

/*切換選單, 改變樣式*/
import { onMounted, ref } from 'vue'

// 定義目前選中的選單 id
const activeId = ref<string>('')

// 點選切換 active
const setActive = (id: string) => {
  activeId.value = id
}

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}


/* ------------------------
  生命周期：mounted
-------------------------*/
onMounted(() => {
  if (nav && nav.length > 0 && nav[0]?.id) {
    activeId.value = nav[0].id
  }
})
</script>

<template>
  <nav class="nav">
    <div class="menu-title">
      <div class="menu-toggle" :class="{ open: isMenuOpen }" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1 class="sitetitle">{{ siteTitle }}</h1>
      <div class="logo">
        <div class="logo-bird ">
          <div class="inwithe"></div>
          <div class="birdmouth"></div>
          <div class="bireye"></div>
        </div>
      </div>
    </div>
    <div class="menu" :class="{ open: isMenuOpen }">
      <div class="menu-list" v-for="(item) in nav" :key="item.id" :class="{ active: item.id === activeId }"
        @click="setActive(item.id)">
        {{ item.title }}
      </div>
    </div>
  </nav>

</template>