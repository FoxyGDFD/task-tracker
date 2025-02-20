import { createMemoryHistory, createRouter } from 'vue-router'
import { ROUTES } from '@shared/lib/router'
import { Home } from '@pages';

const routes = [
  { path: ROUTES.home, component: Home },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})