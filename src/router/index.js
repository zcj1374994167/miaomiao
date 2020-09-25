import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/movie'
        },
        {
            path: '/movie',
            redirect: '/movie/nowplaying',
            component: () => import('../views/movie/index.vue'),
            children:[
                {
                    path:'city',
                    name:'City',
                    component: () => import('../views/movie/city/index.vue')
                },
                {
                    path:'nowplaying',
                    name:'Nowplaying',
                    component: () => import('../views/movie/nowplaying/index.vue')
                },
                {
                    path:'comingsoon',
                    name:'Comingsoon',
                    component: () => import('../views/movie/comingsoon/index.vue')
                },
                {
                    path:'search',
                    name:'Search',
                    component: () => import('../views/movie/search/index.vue')
                }
            ]
        },
        {
            path: '/cinema',
            component: () => import('../views/cinema/index.vue')
        },
        {
            path: '/mine',
            component: () => import('../views/mine/index.vue')
        },
        {
            path: '/ticket',
            component: () => import('../views/ticket/index.vue')
        }
    ],
    linkActiveClass: 'active'

})

export default router;