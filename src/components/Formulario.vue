<template>
    <div class="box formulario">
        <div class="columns is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
            <div class="column is-5">
                <div class="column" 
                    role="form" 
                    aria-label="Formulário para criação de uma nova tarefa"
                    >
                    <p class="control has-icons-left has-icons-right">
                        <input 
                            id="nomeTarefa"
                            type="text" 
                            class="input input-form"
                            placeholder="Qual tarefa deseja iniciar?"
                            v-model="descricao"                
                        />
                        <span class="icon is-small is-left">
                            <i class="fa fa-tasks" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
            </div>
            <div class="column is-3 input-form">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option
                        :value="projeto.id"
                        v-for="projeto in projetos"
                        :key="projeto.id"
                        >
                        {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <div class="column" >
                    <Temporizador 
                    @ao-temporizador-finalizado= "finalizarTarefa" aoTemporizadorPausado=''/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import  {computed, defineComponent} from 'vue'
import Temporizador from './Temporizador.vue'
import { useStore } from 'vuex'
import { key } from '@/store'



export default defineComponent({
    name: 'FormularioComponent',
    emits: ['aoSalvarTarefa'],
    components: {
    Temporizador,
    },
    data (){
        return {
            descricao: '',
            idProjeto: '',
            id:''
        }
    },
    methods: {
        finalizarTarefa (tempoDecorrido: number) : void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto),
                id: Math.random()
            })
            this.descricao = ''
        }
    },
    setup () {
        const store = useStore(key)
        return {
            projetos: computed(() => store.state.projeto.projetos),
            tarefas: computed(() => store.state.tarefa.tarefas)
        };
    },
    
});

</script>
<style scoped>

.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
    padding: 1.5rem;
    
}
.input-form {
    color: var(--texto-primario);
    display: flex;
    justify-content: space-evenly;
    padding: 1.5rem;
}
</style>