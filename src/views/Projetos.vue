<template>
    <Topo>Projetos</Topo>
    <section class="projetos">
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
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
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

import { defineComponent } from 'vue'
import IProjeto from '@/interfaces/IProjeto'
import Topo from '@/components/Topo.vue';

export default defineComponent({
    name: "ProjetosPage",
    data() {
        return {
            nomeDoProjeto: "",
            projetos: [] as IProjeto[]
        };
    },
    methods: {
        salvar() {
            const projeto: IProjeto = {
                nome: this.nomeDoProjeto,
                id: new Date().toISOString()
            };
            this.projetos.push(projeto);
            this.nomeDoProjeto = "";
        }
    },
    components: {
        Topo 
    }
})

</script>
  
<style scoped>
    .projetos{
        padding: 1.25rem;
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
  