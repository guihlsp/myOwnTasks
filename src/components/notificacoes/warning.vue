<template>
    <Notificacoes>
        <article class="message is-warning">
            <div class="message-header">
                Sucesso!
            </div>
            <div class="message-body">
                Notificação
            </div>
        </article>
    </Notificacoes>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Notificacoes from './notificacoes.vue';

export default defineComponent({
    name: "successComponent",
    components: { Notificacoes }
});
</script>

<style scoped>


.message-header{
    justify-content: center;
}
</style>