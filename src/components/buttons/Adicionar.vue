<template>
        <button class="button is-success">
            <span class="icon">
                <i class="fas fa-plus"></i>
            </span>
            <span>
                <slot></slot>
            </span>
        </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AdicionarBtn'
})
</script>