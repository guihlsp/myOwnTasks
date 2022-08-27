<template>
        <button class="button is-danger">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>Stop</span>
        </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'StopBtn'
})
</script>