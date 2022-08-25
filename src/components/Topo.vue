<template>
    <div class="titulo">
        <h1><slot></slot></h1>
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

}

</style>