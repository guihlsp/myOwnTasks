<template>     
    <section class="dashboard">
        <Topo>Dashboard</Topo>
    </section>
</template>
  
<script lang="ts">

import { defineComponent } from 'vue'
import Topo from '@/components/Topo.vue'

export default defineComponent({
    name: "DashboardPage",
    components: {
        Topo
    }
})
  
</script>
  
<style scoped>

</style>
  