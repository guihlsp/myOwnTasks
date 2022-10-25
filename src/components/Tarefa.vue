<template>
    <Box>
        <div class="columns tarefa" @click="tarefaClicada">
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
                <slot></slot>
            </div>
        </div>
    </Box>
</template>

<script lang="ts">

import ITarefa from '@/interfaces/ITarefa';
import { computed, defineComponent, PropType } from 'vue';
import Cronometro from './Cronometro.vue';
import Box from './Box.vue'
import { useStore } from '@/store'
import { OBTER_TAREFAS } from '@/store/tipo-acoes';

export default defineComponent({
    name: "TarefaComponent",
    emits: ['aoTarefaClicada'],
    components:{
        Cronometro,
        Box
    },
    props:{
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true,
        }
    },
    methods: {
        tarefaClicada () : void {
            this.$emit('aoTarefaClicada', this.tarefa)
        }
    },
    computed: {
        nenhumProjeto () : boolean {
            return this.tarefa.projeto == null 
        }
    },
    setup () {
      const store = useStore()
      return {
          tarefas: computed(() => store.state.tarefa.tarefas),
          store
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