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
                <router-link to="/projetos/" class="button is-danger cancelar">
                    <span class="icon is-small">
                        <i class="fas fa-times"></i>
                    </span>
                    <span>Cancelar</span>
                </router-link>
            </div>
        </form>
    </section>
</template>
  
<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue'
import Topo from '@/components/Topo.vue'
import { CADASTRAR_PROJETO } from '@/store/tipo-acoes';
import { TipoNotificacao } from '@/interfaces/INotifcacao';
import useNotificador from '@/hooks/notificador'

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
            if (this.nomeDoProjeto == ""){
                this.notificar(TipoNotificacao.FALHA, 'Erro', 'Você deve inserir um nome ao projeto!')
            } else{
                this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto)
                .then(() => {
                    this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'Projeto adicionado com sucesso!')
                    this.$router.push('/projetos')
                })
            }
        },
    },
    setup () {
        const store = useStore()
        const { notificar } = useNotificador()
        return {
            store,
            notificar
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
    .cancelar{
        margin-left: 2%;
    }
</style>
  