import { createVuetify } from 'vuetify/dist/vuetify'

import App from './App.vue'

import { createRouter } from './router'
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  const vuetify = createVuetify()
  app.use(vuetify)

  return { app, router, vuetify }
}
