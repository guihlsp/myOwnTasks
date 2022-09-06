<template>
  <Topo class="topo">Temporizador</Topo>
  <Formulario @aoSalvarTarefa="salvarTarefa"/>
  <div class="lista">
    <Tarefa v-for="(tarefa, index) in tarefas" 
      :key="index" 
      :tarefa="tarefa"/>
  </div>
  <Card class="card" v-if="listaVazia">
    <h1>Até o momento não há tarefas registradas!</h1>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Formulario from '@/components/Formulario.vue'
import Tarefa from '@/components/Tarefa.vue'
import ITarefa from '@/interfaces/ITarefa'
import Card from '@/components/Card.vue'
import Topo from '@/components/Topo.vue'

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
      tarefas: [] as ITarefa[],
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
      this.tarefas.push(tarefa)     
    }
  }
});

</script>

<style scoped>
  .lista{
    padding: 1.2rem;
  }
</style>
