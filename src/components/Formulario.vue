<template>
    <div class="box formulario">
        <div class="columns is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
            <div class="column is-7">
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



export default defineComponent({
    name: 'FormularioComponent',
    emits: ['aoSalvarTarefa'],
    components: {
    Temporizador
    
    
    },
    data (){
        return {
            descricao: '',
        }
    },
    // computed: {
    //     validaDescricao (descricao: boolean ) {
    //   return this.descricao === ''
    // }
    // },
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

.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
    padding: 2rem;
    
}
</style>