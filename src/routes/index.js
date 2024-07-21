import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/routes/Home.vue";
import About from "@/routes/About.vue";
import Movie from "@/routes/Movie.vue";


export default createRouter({

    // Hash, History
    //google.com/#/search
    history: createWebHashHistory(),
    // pasges
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/about',
            component: About,
        },{
            path: '/Movie',
            component: Movie,
        },

    ]

})