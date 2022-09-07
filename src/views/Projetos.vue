<template>
    <Topo>Projetos</Topo>
    <section class="box projetos">
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do Projeto
                </label>
                <input type="text" 
                class="input" 
                v-model="nomeDoProjeto" 
                id="nomeDoProjeto" 
                />
            </div>
            <div class="field">
                <button class="button is-success" type="submit">
                    <span class="icon">
                        <i class="fa fa-check"></i>
                    </span>
                    <span>
                    Salvar
                    </span>
                </button>
            </div>
        </form>
    </section>
    <section class="projetos">
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth tabela">
            <thead>
                <tr>
                    <th align="center" class="id-column">ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td class="id-column">{{projeto.id}}</td>
                    <td>{{projeto.nome}}</td>
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
    name: "ProjetosPage",
    components: {
        Topo 
    },
    data() {
        return {
            nomeDoProjeto: "",
        };
    },
    methods: {
        salvar() {
            this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
            this.nomeDoProjeto = "";
        }
    },
    setup () {
        const store = useStore()
        return {
            store,
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
        margin-top: 5rem;   
    }
    .id-column{
        width: 20%;
        text-align: center;
    }
    .label{
        color: var(--texto-primario);
    }
</style>
  