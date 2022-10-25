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
        <table class="table is-bordered  is-narrow is-fullwidth tabela">
            <thead>
                <tr>
                    <th align="center" class="id-column cabecalho">ID</th>
                    <th class="cabecalho">Nome</th>
                    <th align="center" class="acoes-column cabecalho">Ações</th>
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
                            <div class="button is-danger is-small deletar" @click="excluir(projeto.id)">
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
import { NOTIFICAR } from '@/store/tipo-mutacoes';
import { TipoNotificacao } from '@/interfaces/INotifcacao';
import { EXCLUIR_PROJETO, OBTER_PROJETOS } from '@/store/tipo-acoes';

export default defineComponent({
    name: "ProjetosLista",
    components: {
        Topo
    },
    methods: {
        excluir(id: string) {
            this.store.dispatch(EXCLUIR_PROJETO, id)

            this.store.commit(NOTIFICAR, {
                titulo: 'Sucesso',
                texto: 'Projeto excluído com sucesso!',
                tipo: TipoNotificacao.SUCESSO
            })

        }
    },
    setup() {
        const store = useStore()
        store.dispatch(OBTER_PROJETOS)
        
        return {
            projetos: computed(() => store.state.projeto.projetos),
            store
        }
    }
})

</script>
  
<style scoped>
.projetos {
    padding: 1.25rem;
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}

.tabela {
    margin-top: 2rem;
}

.id-column {
    width: 20%;
    text-align: center;
}

.adicionar-projeto {
    padding: 1%;
}

.acoes-column {
    width: 8%;
}

.acoes {
    display: flex;
    justify-content: space-around;
}

tr {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}

.cabecalho {
    color: var(--texto-primario);

}
</style>
  