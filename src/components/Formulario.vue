<template>
    <div class="box formulario">
        <Topo class="topo">Timetracker - Temporizador de tarefas</Topo>
        <div class="columns is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
            <div class="column is-8">
                <div 
                    class="column" 
                    role="form" 
                    aria-label="Formulário para criação de uma nova tarefa"
                    >
                    <p class="control has-icons-left has-icons-right">
                        <input 
                            type="text" 
                            class="input"
                            placeholder="Qual tarefa deseja iniciar?"
                            v-model="descricao"
                        />
                        <span class="icon is-small is-left">
                            <i class="fa fa-tasks" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="column" >
                    <Temporizador 
                    @aoTemporizadorFinalizado= "finalizarTarefa" aoTemporizadorPausado=''/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import  {defineComponent} from 'vue'
import Temporizador from './Temporizador.vue'
import Topo from './Topo.vue'

export default defineComponent({
    name: 'FormularioComponent',
    emits: ['aoSalvarTarefa'],
    components: {
    Temporizador,
    Topo
},
    data (){
        return {
            descricao: '',
        }
    },
    methods: {
        finalizarTarefa (tempoDecorrido: number) : void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao   
            })
            this.descricao = ''
        }
    }
});

</script>
<style scoped>
.box .topo {
    text-align: left;
    font-size: large;
    font-weight:bolder;
}
.columns {
    margin-top: 2%;
}

.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario)
}
</style>