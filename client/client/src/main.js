import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import VueResource from 'vue-resource'



//import 'material-design-icons/iconfont/material-icons.css'

createApp(App).use(router).mount('#app')