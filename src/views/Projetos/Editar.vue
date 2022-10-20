<template>
    <Topo>Editar projeto</Topo>
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
import { NOTIFICAR } from '@/store/tipo-mutacoes';
import { TipoNotificacao } from '@/interfaces/INotifcacao';
import { ALTERAR_PROJETO } from '@/store/tipo-acoes';


export default defineComponent({
    name: "EditarProjetos",
    props: {
        id: {
            type: String
        }
    },
    components: {
        Topo
    },
    mounted() {
        if(this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    data() {
        return {
            nomeDoProjeto: "",
        };
    },
    methods: {
        salvar() {
            if (this.nomeDoProjeto == ""){
                this.store.commit(NOTIFICAR, {
                    titulo: 'Falha',
                    texto: 'Você deve inserir um nome ao projeto!',
                    tipo: TipoNotificacao.FALHA
                })
            } else{
                this.store.dispatch(ALTERAR_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                })
                this.nomeDoProjeto = "";
                this.store.commit(NOTIFICAR, {
                    titulo: 'Sucesso',
                    texto: 'Projeto alterado com sucesso!',
                    tipo: TipoNotificacao.SUCESSO
                })
                this.$router.push('/projetos')
            }
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
    .cancelar{
        margin-left: 2%;
    }
</style>
  