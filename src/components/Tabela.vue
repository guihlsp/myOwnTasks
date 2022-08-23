<template>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th title="TarefaDescricao">Descrição da Tarefa</th>
                <th title="TarefaTempo" class="">Tempo utilizado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Criar tabela</td>
                <td>00:10:00</td>
            </tr>
            <tr>
                <td>Compreender lógica</td>
                <td>00:15:00</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent ({
    name: 'TabelaComponent'
    
});

</script>