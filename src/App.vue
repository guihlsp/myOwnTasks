<template>
 <Timetracker>

 </Timetracker>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Timetracker from './pages/Timetracker.vue'


export default defineComponent({
    name: "App",
    components: {
      Timetracker
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
</style>

