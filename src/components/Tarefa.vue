<template>
    <Box>
        <div class="columns tarefa">
            <div class="column is-5 coluna">
                {{tarefa.descricao || "Tarefa sem descrição"}}
            </div>
            <div class="coluna">
                <div v-if="nenhumProjeto">------------</div>
                <div v-else>{{tarefa.projeto.nome}}</div>
            </div>
            <div class="coluna">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" class="registro"/>
            </div>
            <div class="acoes column is-1">
                <div class="button is-warning is-small">
                    <span class="icon is-small">   
                        <i class="fas fa-pencil-alt"></i>
                    </span>
                </div>
                <div class="button is-danger is-small">
                    <span class="icon is-small">
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        </div>
    </Box>
</template>

<script lang="ts">

import ITarefa from '@/interfaces/ITarefa';
import { defineComponent, PropType } from 'vue';
import Cronometro from './Cronometro.vue';
import Box from './Box.vue'

export default defineComponent({
    name: "TarefaComponent",
    components:{
        Cronometro,
        Box
    },
    props:{
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    },
    computed: {
        nenhumProjeto () : boolean {
            return this.tarefa.projeto == null 
        }
    }
})
</script>

<style scoped>

.registro {
    color: var(--texto-secundario);
    
}
.tarefa{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto
}
.coluna {
    justify-content: center;
    width: 30%;
}
.acoes{
    display: inline-flex;
    width: 10%;
    justify-content: space-around;
}
</style>