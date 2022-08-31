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
      <Timetracker>
      </Timetracker>
    </div>
  </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './components/BarraLateral.vue';
import Timetracker from './pages/Timetracker.vue'


export default defineComponent({
    name: "App",
    components: {
      Timetracker,
      BarraLateral
    },
    data() {
      return {
        modoEscuroAtivo: false,
        menuFechado: false
      }
    },
    methods: {
    trocarMenu (menuFechado: boolean){
      this.menuFechado = menuFechado
    },
    trocarTema (modoEscuroAtivo: boolean){
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
})

</script>


<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"; 

  body{
  min-height: 100%;
  overflow: auto
  }

  @media only screen and (max-width: 768px) {
    body{
      height: 100%;
      
    }
  }

  @media only screen and (max-width: 680px) {
    body{
      height: 100%;
    }
  }

.columns{
  overflow: auto;
  position: relative;
}
.columns .column .card h1{
  font-weight: bold;
  color: #faf0ca;
  box-sizing: 100%;
  
}

main {
  --bg-primario:#ffff;
  --texto-primario: #000
  --texto-secundario: #000000
}
main.menu-fechado{
  color: red;
}
main.modo-escuro {
    --bg-primario:#2b2d42;
    --texto-primario: #ddd;
    --texto-secundario: #2b2d42;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>

