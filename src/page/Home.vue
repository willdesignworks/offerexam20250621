<script setup lang="ts">
// 定義
defineProps<{
  banner: {
    title: string,
    subtitle: string
  },
  sections: {
    id: string,
    title: string,
    content: string
  }[]
}>()
</script>
<template>
  <div class="top">
    <div class="banner" v-if="banner">
      <h1>{{ banner.title }}</h1>
      <h5>{{ banner.subtitle }}</h5>
    </div>
    <div class="content">
      <div class="content-card" v-for="item in sections" :key="item.id">
        <div class="card-title">
          <h1>{{ item.title }}</h1>
          <div class="circle-hole-bg"></div>
        </div>

        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>