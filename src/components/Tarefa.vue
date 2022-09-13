<template>
    <Box>
        <div class="columns tarefa">
            <div class="column is-7">
                {{tarefa.descricao || "Tarefa sem descrição"}}
            </div>
            <div class="projeto">
                {{tarefa.projeto.nome}}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" class="registro"/>
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
    justify-content: space-around;
}
</style>