import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Timetracker from '@/views/Timetracker.vue'
import Dashboard from '@/views/Dashboard.vue'
import Configuracoes from '@/views/Configuracoes.vue'
import Agenda from '@/views/Agenda.vue'

const rotas: RouteRecordRaw[] = [{
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
},
{
    path: '/temporizador',
    name: 'Timetracker',
    component: Timetracker
},
{
    path: '/agenda',
    name: 'Agenda',
    component: Agenda
},
{
    path: '/configuracoes',
    name: 'Configuracoes',
    component: Configuracoes
}
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default router;