<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth is-two-fifths-is-mobile">
      <Barra-lateral/>
    </div>
      
    <div class="column is-three-quarter">
      <Formulario 
      @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        
        <Tarefa v-for="(tarefa, index) in tarefas" 
        :key="index" 
        :tarefa="tarefa"/>
      </div>
      <tabela/>
      <Card class="card" v-if="listaVazia">
        <h1>Até o momento não há tarefas registradas!</h1>
      </Card>
    </div>
    
  </main>
 
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from '@/components/BarraLateral.vue'
import Formulario from '@/components/Formulario.vue'
import Tabela from '@/components/Tabela.vue'
import Tarefa from '@/components/Tarefa.vue'
import ITarefa from '@/interfaces/ITarefa'
import Card from '@/components/Card.vue'

export default defineComponent({
    name: "TimetrackerPage",
    components: {
    BarraLateral,
    Formulario,
    Tarefa,
    Card
  },
  data() {
    return {
      tarefas: [] as ITarefa[]
    }
  },
  computed: {
    listaVazia () : boolean {
      return this.tarefas.length === 0
    }
    
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    }
  }
});

</script>


<style scoped>
.lista{
  padding: 1.25rem;
}
.columns .column .card h1{
  font-weight: bold;
  color: #faf0ca;
  
}
</style>
