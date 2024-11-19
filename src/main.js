import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import global css
import './assets/main.css'

// import firebase auth service
import { projectAuth } from './firebase/config'


//用於延遲 Vue 應用的初始化，直到 Firebase 確認當前用戶的認證狀態（例如：已登入、未登入或其他狀態）。
let app

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app')
  }
})