<template>
    <div class="titulo">
        <h1 class="title display"><slot></slot></h1>
    </div>
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
</style>