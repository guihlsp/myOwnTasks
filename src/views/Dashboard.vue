<template>     
    <section class="dashboard">
        <Topo>Dashboard</Topo>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification background">
                    <p class="title">Vertical...</p>
                    <p class="subtitle">Top tile</p>
                    </article>
                    <article class="tile is-child notification background">
                    <p class="title">...tiles</p>
                    <p class="subtitle">Bottom tile</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification background">
                    <p class="title">Middle tile</p>
                    <p class="subtitle">With an image</p>
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/640x480.png">
                    </figure>
                    </article>
                </div>
                </div>
                <div class="tile is-parent">
                <article class="tile is-child notification background">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div class="content">
                    <!-- Content -->
                    </div>
                </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification background">
                <div class="content">
                    <p class="title">Tall tile</p>
                    <p class="subtitle">With even more content</p>
                    <div class="content">
                    <!-- Content -->
                    </div>
                </div>
                </article>
            </div>
        </div>
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
   .is-ancestor{
    padding: 1.2rem;
    max-width:99%;
    height: 100%;
   } 

   .background {
    background-color: bisque;
   }
</style>
  