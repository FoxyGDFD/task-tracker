import { createApp } from 'vue'
import { router } from "./providers/router";
import { Layout } from "./layouts";
import './main.css'

createApp(Layout).use(router).mount('#app')
