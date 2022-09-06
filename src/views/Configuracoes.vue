<template>     
    <section class="dashboard">
        <Topo>Configurações</Topo>
    </section>
</template>
  
<script lang="ts">

import { defineComponent } from 'vue'
import Topo from '@/components/Topo.vue'

export default defineComponent({
    name: "ConfiguracoesPage",
    components:{
        Topo
    }
})
  
</script>
  
<style>
</style>
  