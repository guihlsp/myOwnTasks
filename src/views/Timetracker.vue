<template>
  <Topo class="topo">Temporizador</Topo>
  <Formulario @aoSalvarTarefa="salvarTarefa"/>
  <div class="lista">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa">
      <div class="button is-warning is-small">
        <span class="icon is-small">   
            <i class="fas fa-pencil-alt"></i>
        </span>
      </div>
      <div class="button is-danger is-small" @click="excluir(tarefa.idTarefa)">
        <span class="icon is-small">
            <i class="fas fa-trash"></i>
        </span>
      </div>
    </Tarefa>
  </div>
  <Card class="card" v-if="listaVazia">
    <h1>Até o momento não há tarefas registradas!</h1>
  </Card>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Formulario from '@/components/Formulario.vue'
import Tarefa from '@/components/Tarefa.vue'
import ITarefa from '@/interfaces/ITarefa'
import Card from '@/components/Card.vue'
import Topo from '@/components/Topo.vue'
import { useStore } from '@/store'
import { ADICIONA_TAREFA, EXCLUI_TAREFA } from '@/store/tipo-mutacoes'

export default defineComponent({
    name: "TimetrackerPage",
    components: {
    Formulario,
    Tarefa,
    Card,
    Topo
  },
  data() {
    return {
      modoEscuroAtivo: false,
    }
  },
  computed: {
    listaVazia () : boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa){
      this.store.commit(ADICIONA_TAREFA, tarefa)
    },
    excluir (idTarefa: number) {
      this.store.commit(EXCLUI_TAREFA, idTarefa)
    },
  },
  setup () {
      const store = useStore()
      return {
        tarefas: computed(() => store.state.tarefas),
        store
      }
  }

});

</script>

<style scoped>
  .lista{
    padding: 1.2rem;
  }
</style>
