<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <Barra-lateral/>
    </div>
      
    <div class="column is-three-quarter">
      <Formulario/>
      <tabela/>
    </div>
    
  </main>
 
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';
import Tabela from './components/Tabela.vue';


export default defineComponent({
    name: "App",
    components: {
    BarraLateral,
    Formulario,
    Tabela
}
});

</script>


<style>

</style>
