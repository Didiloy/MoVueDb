import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Movie from '../views/Movie.vue'
import Movies from '../views/Movies.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            enterClass: "animate__animated animate__fadeInLeft",
            leaveClass: "animate__animated animate__fadeOutLeft",
        },
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue'),
        meta: {
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutRight",
        },
    },
    {
        path: '/movie/:name',
        name: 'movie',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Movie,
        meta: {
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutRight",
        },
    },
    {
        path:'/movies/:name',
        name:'movies',
        props:true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:Movies,
        meta:{
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutRight",
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router