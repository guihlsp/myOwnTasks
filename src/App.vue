<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
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
      <Card class="card">
        <h1 style="justify-content:center"
        >Não foi inserida nenhuma tarefa até o momento!</h1>
      </Card>
    </div>
    
  </main>
 
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './components/BarraLateral.vue'
import Formulario from './components/Formulario.vue'
import Tabela from './components/Tabela.vue'
import Tarefa from './components/Tarefa.vue'
import ITarefa from './interfaces/ITarefa'
import Card from './components/Card.vue'

export default defineComponent({
    name: "App",
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
