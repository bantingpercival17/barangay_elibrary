import {
  createRouter,
  createWebHistory
} from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import ReadView from '../views/screen/ReadView.vue'
import WriteView from '../views/screen/WriteView.vue'
import TextWriter from '../views/components/write-components/TextWriterView.vue'
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/read',
    name: 'Read',
    component: ReadView
  },
  {
    path: '/read/view/:book',
    name: 'Read-Viewer',
    component: () => import("@/views/components/book-components/EBookViewer.vue"),
  },
  {
    path: '/write',
    name: 'Write',
    component: WriteView
  },
  {
    path: '/write/create',
    name: 'Write-Create',
    component: TextWriter,
  },
  {
    path: '/listen',
    name: 'Listen',
    component: () => import("@/views/screen/ListenView.vue"),
  },

]

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes
})

export default router