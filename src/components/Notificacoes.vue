<template>
    <div class="notificacoes">
        <article class="message"
        :class="contexto[notificacao.tipo]" 
        v-for="notificacao in notificacoes" 
        :key="notificacao.id"
        
        >
            <div class="message-header"> 
                {{ notificacao.titulo}} 
                <div class="button close" @click="excluir(notificacao.id)">
                    <span class="icon">
                    <i class="fas fa-times"></i>
                    </span>
                </div>
            </div>
            <div class="message-body"> 
                {{ notificacao.texto }} 
            </div>
        </article>
    </div>
</template>

<script lang="ts">

import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import { TipoNotificacao } from "@/interfaces/INotifcacao";
import { FECHA_NOTIFICACAO } from '@/store/tipo-mutacoes';

export default defineComponent({
    name: 'NotificacoesComponent',
    data () {
        return {
            contexto: {
                [TipoNotificacao.SUCESSO]: 'is-success',
                [TipoNotificacao.ATENCAO]: 'is-warning',
                [TipoNotificacao.FALHA]: 'is-danger'
            }
        }
    },
    methods: {
        excluir (id: number) {
        this.store.commit(FECHA_NOTIFICACAO, id)
        }
    },
    setup () {
        const store = useStore()
        return {
            notificacoes: computed(() => store.state.notificacoes),
            store
        }
    },
});
</script>

<style scoped>
.notificacoes{
    position:absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 10;
}
.message-header{
    justify-content: center;
}

.close {
    background:none;
    position: absolute;
    right: 0;
    border: none;
}
</style>