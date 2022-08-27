<template>
  <main class="columns is-gapless is-multiline" 
  :class="{ 'modo-escuro': modoEscuroAtivo} || { 'menu-fechado': menuFechado}"
  >
    <div class="column is-one-fifth is-two-fifths-is-mobile" @aoMenuAlterado="trocarMenu" 
      >
      <Barra-lateral
      @aoTemaAlterado="trocarTema" 
      class="container"/>
    </div>
      
    <div class="column is-three-quarter conteudo">
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
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
      menuFechado: false
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
    },
    trocarMenu (menuFechado: boolean){
      this.menuFechado = menuFechado
    },
    trocarTema (modoEscuroAtivo: boolean){
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});



</script>


<style scoped>

.columns{
  overflow: auto;
  position: relative;
}
.lista{
  padding: 1.25rem;
}
.columns .column .card h1{
  font-weight: bold;
  color: #faf0ca;
  box-sizing: 100%;
  
}
  


main {
  --bg-primario:#ffff;
  --texto-primario: #000
}
main.menu-fechado{
  color: red;
}
main.modo-escuro {
    --bg-primario:#2b2d42;
    --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
