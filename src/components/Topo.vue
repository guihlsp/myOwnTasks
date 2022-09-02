<template>
    <div class="titulo">
        <h1 class="title"><slot></slot></h1>
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
    margin-bottom: 5%;
}

</style>