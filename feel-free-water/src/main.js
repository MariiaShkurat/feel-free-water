import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
import { createVuetify } from 'vuetify/dist/vuetify'
import 'vuetify/dist/vuetify.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify()
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
