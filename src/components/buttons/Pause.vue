<template>
        <button class="button is-warning ">
            <span class="icon">
                <i class="fas fa-pause"></i>
            </span>
            <span>Pause</span>
        </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PauseBtn'
})
</script>