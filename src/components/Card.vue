<template>
    <div class="card">
        <div class="card-content">
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
    .card-content{
        padding: 2rem;
    }

</style>