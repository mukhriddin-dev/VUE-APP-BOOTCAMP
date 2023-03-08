import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import ('../views/AboutView.vue')
        },
        {
            path: '/signin',
            name: 'login',
            component: () => import ('../views/Login.vue')
        },
        {
            path: '/signup',
            name: 'registration',
            component: () => import ('../views/Registration.vue')
        }, {
            path: '/:pathMatch(.*)*',
            name: 'erorr',
            component: () => import ('../views/NotFound.vue')
        }


    ]
})

export default router
