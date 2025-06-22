<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'

type NavItem = {
  id: string,
  title: string
}

const props = defineProps<{ nav: NavItem[], siteTitle: string }>()

const activeId = ref('')
const isMenuOpen = ref(false)

const setActive = (id: string) => {
  activeId.value = id
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

/* ------------------------
  生命周期：
-------------------------*/
watchEffect(() => {
  if (props.nav.length && !activeId.value) {
    activeId.value = props.nav[0].id
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