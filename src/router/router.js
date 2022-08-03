import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScoreView from '../views/ScoreView.vue'
import InfoView from '../views/InfoView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/score',
            name: 'score',
            component: ScoreView
        },
        {
            path: '/info',
            name: 'info',
            component: InfoView
        }
    ]
})

export default router