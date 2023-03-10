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
            path: "/admin",
            component: () => import ('../views/Admin.vue'),

            children: [
                {
                    path: "/admin/add",
                    name: "add",
                    component: () => import ('../views/AddAdmin.vue')
                },
                {
                    path: "/admin/list",
                    name: "list",
                    component: () => import ('../views/AdminLists.vue')
                }

            ]


        },
        
        {
            path: "/category",
            component: () => import ('../views/Category.vue'),

            children: [
                {
                    path: "/category/add",
                    name: "categoryadd",
                    component: () => import ('../views/AddCategory.vue')
                },
                {
                    path: "/category/list",
                    name: "categorylist",
                    component: () => import ('../views/CategoryLists.vue')
                }

            ]
        },

         {
            path: "/posts",
            component: () => import ('../views/Post.vue'),

            children: [
                {
                    path: "/posts/add",
                    name: "postadd",
                    component: () => import ('../views/Postadd.vue')
                },
                {
                    path: "/posts/list",
                    name: "postslist",
                    component: () => import ('../views/Postlist.vue')
                }

            ]
        },
        
        {
            path: '/:pathMatch(.*)*',
            name: 'erorr',
            component: () => import ('../views/NotFound.vue')
        }


    ]
})

export default router
