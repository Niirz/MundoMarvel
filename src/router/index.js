import { createRouter, createWebHistory } from 'vue-router';

import ComicInfo from '@/views/ComicInfo.vue';
import CharacterInfo from '@/views/CharacterInfo.vue';

const routes = [
    //{
        //path: '/',
        //name: 'Home',
        // división del código a nivel de ruta
        // esto genera un chunk separado (about.[hash].js) para esta ruta
        // que se carga de forma perezosa (lazy-loaded) cuando se visita la ruta.
        //component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
    //},
    {
        path: '/ComicList',
        name: 'ComicList',
        // división del código a nivel de ruta
        // esto genera un chunk separado (about.[hash].js) para esta ruta
        // que se carga de forma perezosa (lazy-loaded) cuando se visita la ruta.
        component: () => import(/* webpackChunkName: "about" */ '@/views/ComicList.vue')
    },
    {
        path: '/CharacList',
        name: 'CharacterList',
        // división del código a nivel de ruta
        // esto genera un chunk separado (about.[hash].js) para esta ruta
        // que se carga de forma perezosa (lazy-loaded) cuando se visita la ruta.
        component: () => import(/* webpackChunkName: "about" */ '@/views/CharacterList.vue')
    },
    {

        path: '/',
        name: 'Landing Page',
        // división del código a nivel de ruta
        // esto genera un chunk separado (about.[hash].js) para esta ruta
        // que se carga de forma perezosa (lazy-loaded) cuando se visita la ruta.
        component: () => import(/* webpackChunkName: "about" */ '@/views/LandingPage.vue')
    },

    {
        path: '/comics/:id',
        name: 'ComicInfo',
        component: ComicInfo,
    },
    {
        path: '/character/:id',
        name: 'CharacterInfo',
        component: CharacterInfo,
    },

    {
        path: '/login',
        name: 'Login',
        // división del código a nivel de ruta
        // esto genera un chunk separado (about.[hash].js) para esta ruta
        // que se carga de forma perezosa (lazy-loaded) cuando se visita la ruta.
        component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
    },
    {
        path: '/registro',
        name: 'Registro',
        // división del código a nivel de ruta
        // esto genera un chunk separado (about.[hash].js) para esta ruta
        // que se carga de forma perezosa (lazy-loaded) cuando se visita la ruta.
        component: () => import(/* webpackChunkName: "about" */ '@/views/Registro.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
