<template>
    <section>
        <div class="buttons has-addons is-centered">
            <Play
            @click="iniciar" 
            :disabled="cronometroRodando"/>
            <Pause
            @click="pausar"
            :disabled="!cronometroRodando"/>
            <Stop
            @click="finalizar" 
            :disabled="!cronometroRodando"/>
        </div>
        <div class="tempo">
            <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
        </div>
    </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue'
import Play from './buttons/Play.vue'
import Stop from './buttons/Stop.vue'
import Pause from './buttons/Pause.vue';

export default defineComponent({
    name: 'TemporizadorComponent',
    emits: ['aoTemporizadorFinalizado'],
    components: {
    Cronometro,
    Play,
    Stop,
    Pause
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
        pausar () {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
        },
        finalizar () {
            if (this.tempoEmSegundos <= 0){
                return
            }
            else{
                this.cronometroRodando = false
                clearInterval(this.cronometro)
                this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
                this.tempoEmSegundos = 0
            }
        }        
    }
});

</script>

<style scoped>

.tempo {
    text-align: center;
}

</style>