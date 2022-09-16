<template>
        <button class="button is-success" @click="$emit('cliqueNoAdicionar')">
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
    name: 'AdicionarBtn',
    emits:['cliqueNoAdicionar'],
    methods: {

        darFoco: function(){
            this.$emit('cliqueNoAdicionar', 0)
        }
    }
    
})
</script>