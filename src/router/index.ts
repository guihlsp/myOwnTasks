import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Timetracker from '@/views/Timetracker.vue'
import Dashboard from '@/views/Dashboard.vue'
import Configuracoes from '@/views/Configuracoes.vue'
import Agenda from '@/views/Agenda.vue'
import Projetos from '@/views/Projetos.vue'
import Adicionar from '@/views/Projetos/Adicionar.vue'
import Editar from '@/views/Projetos/Editar.vue'
import Listar from '@/views/Projetos/Listar.vue'


const rotas: RouteRecordRaw[] = [{
    path: '/',
    alias: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
},
{
    path: '/projetos',
    component: Projetos,
    children: [
        {
            path: '',
            name: 'Projetos',
            component: Listar
        },
        {
            path: 'adicionar',
            name: 'Adicionar projeto',
            component: Adicionar
        },
        {
            path: ':id',
            name: 'Editar projeto',
            component: Editar,
            props: true
        },
    ]
},
{
    path: '/tarefas',
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