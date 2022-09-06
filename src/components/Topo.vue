<template>
    <section class="topo">
        <div class="titulo">
            <h1 class="title display"><slot></slot></h1>
        </div>
        <div class="perfil">
            <figure class="image is-64x64 foto">
                <img class="is-rounded" src="@/assets/imgs/perfil.jpg">
                <div class="button is-rounded is-white is-hover is-small seta">
                    <span class="icon is-small material-symbols-outlined">
                    expand_circle_down
                    </span>
                </div>
            </figure>
            
        </div>
    </section>
</template>

<script lang="ts">

import {defineComponent} from 'vue'


export default defineComponent ({
    name: 'TopoComponent',
})

</script>

<style>

.display {
    color: var(--texto-primario);
    padding: 1.5rem;
    color: #faf0ca;
}

.perfil{
    margin-right: 5%;
}

.foto {
    position:relative;
    display:flex;
    justify-content: center;
}
.seta{
    margin: 80% 0 0 -80%;
}
</style>