import { createApp } from 'vue'
import App from './App'
import route from './routes/index.js'
import store from "@/store/index.js";

createApp(App)
    .use(route)
    .use(store)
    .mount('#app')