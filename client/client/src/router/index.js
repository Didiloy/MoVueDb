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
        path: '/movies/:name',
        name: 'movies',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Movies,
        meta: {
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutRight",
        }
    },
    {
        path: '/boxOffice',
        name: 'boxOffice',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SideBarViews/BoxOfficeSemaine'),
        meta: {
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutRight",
        }
    },
    {
        path: '/boxOfficeAllTime',
        name: 'boxOfficeAllTime',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SideBarViews/BoxOfficeAllTime'),
        meta: {
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutRight",
        }
    },
    {
        path: '/inTheater',
        name: 'inTheater',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SideBarViews/InTheater'),
        meta: {
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutRight",
        }
    },
    {
        path: '/mostPopularMovies',
        name: 'mostPopularMovies',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SideBarViews/MostPopularMovies'),
        meta: {
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutRight",
        }
    },
    {
        path: '/mostPopularSeries',
        name: 'MostPopularSeries',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SideBarViews/MostPopularSeries'),
        meta: {
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutRight",
        }
    },
    {
        path: '/top250Movies',
        name: 'Top250Movies',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SideBarViews/Top250Movies'),
        meta: {
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