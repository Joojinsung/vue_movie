import { createApp } from 'vue'
import App from './App'
import route from './routes/index.js'

createApp(App)
    .use(route)
    .mount('#app')