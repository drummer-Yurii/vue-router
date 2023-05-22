import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('../views/Home.vue') },
    { path: '/about', component: () => import('../views/About.vue') },
    { path: '/movies', component: () => import('../views/Movies.vue') },
    { path: '/movies/:id', component: () => import('../views/MovieDetails.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;