<template>
    <div class="card">
        <div class="card-content">
            <span class="icon">
                <i class="fa fa-exclamation-triangle" 
                aria-hidden="true"></i>
            </span>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: 'cardComponent'
    })
</script>

<style scoped>

    .card{
        margin: 0 10%;
        background: #35393d;
    }
    .card-content{
        padding: 2rem;
        text-align: center;
        font-size: large;
        font-weight:bolder;
        
    }
    .icon{
        color: #faf0ca;
    }
    
</style>