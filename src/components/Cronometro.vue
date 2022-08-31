<template>
    <section>
        <strong class="display">
            <span class="material-symbols-outlined">
                schedule
            </span>
            {{ tempoDecorrido }}
        </strong>
    </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CronometroComponent',
    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0
        }
    }, 
    computed: {
        tempoDecorrido () : string { 
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11,8)
        }
    },

})

</script>

<style scoped>

.display {
    color: var(--texto-primario);
    display: flex;
    justify-content: center;

}

</style>