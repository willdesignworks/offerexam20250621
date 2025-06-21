// 從 Vite 套件中匯入 defineConfig，用來定義專案設定
import { defineConfig } from 'vite'
// 匯入 Vue 插件，讓 Vite 能處理 .vue 檔案
import vue from '@vitejs/plugin-vue'
// Node.js 內建的 path 模組，用來處理檔案路徑
import path from 'path'

// 使用 defineConfig 包裹設定物件（這樣有型別支援與 IDE 提示
export default defineConfig({

  // 設定要使用的插件（這裡是 Vue 插件）
  plugins: [vue()],

  // 設定路徑解析的選項
  resolve: {
    alias: {
      // 將 @ 設定為 src 資料夾的別名
      // 這樣你可以用 @/components/MyComponent.vue 來引入，而不用寫一堆 ../../
      '@': path.resolve(__dirname, './src'),
    },
  },
})