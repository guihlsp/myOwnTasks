import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Timetracker from '@/views/Timetracker.vue'
import Dashboard from '@/views/Dashboard.vue'
import Configuracoes from '@/views/Configuracoes.vue'
import Agenda from '@/views/Agenda.vue'
import Projetos from '@/views/Projetos.vue'
import Adicionar from '@/views/Projetos/Adicionar.vue'
import Editar from '@/views/Projetos/Editar.vue'


const rotas: RouteRecordRaw[] = [{
    path: '/',
    alias: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
},
{
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
},
{
    path: '/projetos/adicionar',
    name: 'Adicionar projeto',
    component: Adicionar
},
{
    path: '/projetos/:id',
    name: 'Editar projeto',
    component: Editar,
    props: true
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