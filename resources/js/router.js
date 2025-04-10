import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import CompaniesList from './components/CompaniesList.vue';
import CompanyDetail from './components/CompanyDetail.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/companies', component: CompaniesList },
  { path: '/company/:id', component: CompanyDetail, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;