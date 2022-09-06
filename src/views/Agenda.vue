<template>     
    <section class="dashboard">
        <Topo>Agenda</Topo>
    </section>
</template>
  
<script lang="ts">

import { defineComponent } from 'vue'
import Topo from '@/components/Topo.vue'

export default defineComponent({
    name: "AgendaPage",
    components:{
        Topo
    }
})
  
</script>
  
<style>
</style>
  