import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
import 'vuetify/dist/vuetify.css'
import 'vueperslides/dist/vueperslides.css'
import './assets/main.css'
import { VueperSlides, VueperSlide } from 'vueperslides'

import { createApp } from './main'

const { app, router } = createApp()

router.isReady().then(() => {
  app.component('VueperSlides', VueperSlides)
  app.component('VueperSlide', VueperSlide)
  app.mount('#app')
})
