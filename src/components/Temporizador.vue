<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
        <div class="buttons has-addons">
            <Play
            @click="iniciar" 
            :disabled="cronometroRodando"/>
            <Stop
            @click="finalizar" 
            :disabled="!cronometroRodando"/>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue'
import Play from './buttons/Play.vue'
import Stop from './buttons/Stop.vue'

export default defineComponent({
    name: 'TemporizadorComponent',
    emits: ['aoTemporizadorFinalizado'],
    components: {
    Cronometro,
    Play,
    Stop
},
    data (){
        return{
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods: {
        iniciar () {
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000)
        },
        finalizar () {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }        
    }
});

</script>

<style>


</style>