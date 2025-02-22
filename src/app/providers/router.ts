import { createMemoryHistory, createRouter } from 'vue-router'
import { ROUTES } from '@shared/lib/router'
import { Dashboard } from '@pages';

const routes = [
  { path: ROUTES.home, component: Dashboard },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})