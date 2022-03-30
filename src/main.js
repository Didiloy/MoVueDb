import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import VueResource from 'vue-resource'


createApp(App).use(router).mount('#app')