<template>
    <Topo>Projetos</Topo>
    <section class="projetos">
        <div class="adicionar-projeto">
            <router-link to="/projetos/adicionar" class="button is-success">
                <span class="icon is-small">
                    <i class="fas fa-plus"></i>
                </span>
                <span>Adicionar projeto</span>
            </router-link>
        </div>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth tabela">
            <thead>
                <tr>
                    <th align="center" class="id-column">ID</th>
                    <th>Nome</th>
                    <th align="center" class="acoes-column">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td class="id-column">{{projeto.id}}</td>
                    <td>{{projeto.nome}}</td>
                    <td class="">
                        <div class="acoes">
                            <router-link :to="`/projetos/${projeto.id}`" class="button is-warning is-small">
                                <span class="icon is-small">
                                    <i class="fas fa-pencil-alt"></i>
                                </span>
                            </router-link>
                            <div class="button is-danger is-small deletar">
                                <span class="icon is-small">
                                    <i class="fas fa-trash"></i>
                                </span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
  
<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue'
import Topo from '@/components/Topo.vue';

export default defineComponent({
    name: "ProjetosLista",
    components: {
        Topo 
    },
    setup () {
        const store = useStore()
        return {
            projetos: computed(() => store.state.projetos)
        }
    }
})

</script>
  
<style scoped>
    .projetos{
        padding: 1.25rem;
        color: var(--texto-primario);
        background-color: var(--bg-primario);
    }
    
    .tabela{
        margin-top: 2rem;
    }
    .id-column{
        width: 20%;
        text-align: center;
    }
    .adicionar-projeto {
        padding: 1%;   
    }
    .acoes-column{
        width: 8%;
    }
    .acoes{
        display: flex;
        justify-content: space-around;
    }
</style>
  