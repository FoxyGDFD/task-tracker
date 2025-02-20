import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

import { router } from "./providers/router";
import { Layout } from "./layouts";
import './main.css'

createApp(Layout).use(VueQueryPlugin).use(router).mount('#app')
