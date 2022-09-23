<template>
    <section class="dashboard">
        <Topo>Dashboard</Topo>
        <div class="tile is-ancestor tile-pai">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification background">
                            <p class="title">Veja 4 razões para utilizar o myOwnTasks</p>
                            <p class="subtitle">Uma boa gestão do tempo e produtividade ajuda a criar o equilíbrio
                                perfeito, enquanto a má administração leva a um estresse excessivo.</p>
                        </article>
                        <article class="tile is-child notification background">
                            <p class="title">3 - Reduz o estresse e a ansiedade</p>
                            <p class="subtitle">A gestão do tempo ajuda a se livrar do estresse e da ansiedade, pois
                                facilita a administração das tarefas do dia. Isso não apenas melhora a saúde física,
                                como também a mental.</p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification background">
                            <p class="title">1 - Melhora o desempenho e a eficiência</p>
                            <p class="subtitle">Com uma programação adequada, fica mais fácil saber exatamente o que se
                                precisa fazer e quanto tempo se tem para concluir a tarefa</p>
                            <figure class="image is-4by3">
                                <img
                                    src="https://www.iep.edu.es/wp-content/uploads/2020/10/eficacia-eficiencia-diferencias.png">
                            </figure>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification background">
                        <p class="title">4 - Chega de indecisão</p>
                        <p class="subtitle">Uma boa gestão do tempo pode ajudar a ficar menos indeciso e a tomar
                            melhores decisões. Em vez de encarar uma rotina bagunçada de afazeres, crie um plano
                            adequado para não acabar tomando decisões incorretas que podem levar a repercussões
                            duradouras.</p>
                        <div class="content">
                            <!-- Content -->
                        </div>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification background">
                    <div class="content">
                        <p class="title">2 - Tenha uma vida pessoal mais gratificante</p>
                        <p class="subtitle">Ficar preso no trabalho o dia todo não é divertido para ninguém. No entanto,
                            como a gestão do tempo e produtividade minimizam o estresse de trabalhar sempre até mais
                            tarde, a vida pessoal passa a ter mais atenção.
                            Será mais simples desfrutar de momentos de qualidade com amigos e familiares, ler um livro
                            ou assistir a um filme.

                            Isso, por sua vez, afeta cada pessoa de maneira positiva no que diz respeito à saúde mental,
                            o que também se traduz em um melhor desempenho no trabalho. Portanto, serve como um
                            benefício em todos os sentidos.</p>
                            <figure class="image is-8by3">
                                <img
                                    src="@/assets/imgs/gratidao.jpg">
                            </figure>
                        <div class="content">
                            <!-- Content -->
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
  
<script lang="ts">

import { defineComponent } from 'vue'
import Topo from '@/components/Topo.vue'

export default defineComponent({
    name: "DashboardPage",
    components: {
        Topo
    }
})

</script>
  
<style scoped>
.is-ancestor {
    padding: 1.2rem;
    max-width: 99%;
    height: auto;
}

.background {
    background-color: bisque;
}
</style>
  