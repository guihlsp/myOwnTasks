<template>
    <Topo>Adicionar projeto</Topo>
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
</template>
  
<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue'
import Topo from '@/components/Topo.vue'

export default defineComponent({
    name: "AdicionarProjetos",
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
            this.$router.push('/projetos')
        }
    },
    setup () {
        const store = useStore()
        return {
            store
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
    .label{
        color: var(--texto-primario);
    }
</style>
  