<template>
    <section class="topo">
        <div class="titulo">
            <h1 class="title display"><slot></slot></h1>
        </div>
        <div class="perfil">
            <figure class="image is-64x64">
                <img class="is-rounded" src="@/assets/imgs/perfil.jpg">
                <div class="dropdown is-active"></div>
            </figure>
        </div>
    </section>
</template>

<script lang="ts">

import {defineComponent} from 'vue'


export default defineComponent ({
    name: 'TopoComponent',
})

</script>

<style>

h1{
    font-weight: bold ;
    font-size: large;
    background-color: #35393d;
    
}
.display {
    color: var(--texto-primario);
    padding: 1.5rem;
    color: #faf0ca;
}

.topo{
    display: flex;
    background-color: #35393d;
    align-items:center;
    justify-content: space-between;
}

.perfil{
    margin-right: 2%;
}
</style>