<template>
  <main class="columns  is-gapless is-multiline" id="pai" 
  :class="{ 'modo-escuro': modoEscuroAtivo} || { 'menu-fechado': menuFechado}"
  >
    <div class="column lateral-menu is-one-fifth is-two-fifths-is-mobile" @aoMenuAlterado="trocarMenu" 
      >
      <Barra-lateral
      @aoTemaAlterado="trocarTema" 
      class="container"
      id="lateralBar"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacoes />
      <router-view></router-view>
    </div>
  </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './components/BarraLateral.vue';
import Notificacoes from './components/Notificacoes.vue'

export default defineComponent({
    name: "App",
    components: {
      BarraLateral,
      Notificacoes
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

  html {
    height: 100vh;
    overflow-y:auto;
  }
  header {
    height: 100%;
  }
  body{
    min-height: 100vh;
    overflow:auto
  }

 
  @media only screen and (max-width: 768px) {
    body{
      height: 100%;
    }
    #lateralBar{
    max-height: 5vh;
    }
  }

  @media only screen and (max-width: 680px) {
    body{
      height: 100%;
    }
  }

  @media only screen and (min-width: 766px) {
    body{
      height: 100%;
    }
    #lateralBar{
    min-height: 100vh;
    }
  }

.columns .column .card h1{
  font-weight: bold;
  color: #faf0ca;
  box-sizing: 100%;
  
}

main {
  --bg-primario:#ffff;
  --texto-primario: #000;
  --texto-secundario: #000000;
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

