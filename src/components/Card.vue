<template>
    <div class="card">
        <div class="card-content">
            <span class="icon has-text-warning">
                <i class="fa fa-exclamation-triangle fa-4x" 
                aria-hidden="true"></i>
            </span>
            <slot></slot>
            <Adicionar class="adicionar">
                Adicionar minha primeira tarefa</Adicionar>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import Adicionar from './buttons/Adicionar.vue'

    export default defineComponent({
        name: 'cardComponent',
        components: {
            Adicionar
        } 
    })
</script>

<style scoped>

    .card{
        margin: 0 10%;
        background: #35393d;
    }
    .card-content{
        text-align: center;
        font-size: large;
        font-weight:bolder;
        display: block;
        justify-content: space-between;
    }
    .icon{
        margin-bottom: 2%;
    }
    .adicionar{
        margin-top: 2%;
    }
</style>