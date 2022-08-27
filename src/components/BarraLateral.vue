<template class="">
    <header class="">
        <div class="sidebar-menu">
            <section class="logo">
                <div class="botoes-sidebar">
                    <button class="button is-warning is-outlined botao-tema" @click="alterarTema">
                        <span class="material-symbols-outlined">
                            {{ iconeBotao }}
                        </span>
                    </button>
                    <button class="button is-warning is-outlined botao-menu" @click="alterarMenu">
                        <span class="icon">
                            <i class="fa fa-bars" aria-hidden="true"> 
                            </i>
                        </span>
                    </button>
                </div>
                <h1 class="imagem-logo"
                >
                    <a href="http://localhost:8080/#/"
                    >
                        <img src="@/assets/imgs/myOwnTasks_2.png" 
                        alt="Logo myOwnTasks"
                        />
                    </a>
                </h1>

                <h2 class="boas-vindas"> Olá, Guilherme!</h2>
            </section>
            <section class="menu-opcoes">
                <aside class="menu">
                    <p class="menu-label">
                        General
                    </p>
                    <ul class="menu-list">
                        <ul class="menu-top">
                            <li>
                                <a class="menu-opcao">
                                    <div class="menu-nome">
                                        <span>
                                            Dashboard
                                        </span>
                                    </div>
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a class="menu-opcao is-active">
                                    <div class="menu-nome">
                                        <span class="menu-">
                                        Timetracker
                                        </span>
                                    </div>
                                    <i class="fa fa-hourglass " aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a class="menu-opcao">
                                    <div class="menu-nome">
                                        <span>
                                        Agenda
                                        </span>
                                    </div>
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                        <ul class="menu-botton">
                            <li>
                                <a class="menu-opcao">
                                    <div class="menu-nome">
                                        <span>
                                        Ajustes
                                        </span>
                                    </div>
                                    <i class="fa fa-sliders" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a class="sair menu-opcao">
                                    <div class="menu-nome">
                                        <span>
                                        Sair
                                        </span>
                                    </div>
                                    <i class="fa fa-power-off" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </ul>
                </aside>
            </section>
        </div>
    </header>

</template>

<script lang="ts">

import { defineComponent } from "vue"

export default defineComponent({
    name: "BarraLateralComponent",
    data() {
        return {
            menuFechado: false,
            modoEscuroAtivo: false
        }
    },
    emits: ['aoTemaAlterado', 'aoMenuAlterado'],
    computed: {
        iconeBotao() {
            if (this.modoEscuroAtivo) {
                return 'sunny'
            }
            return 'dark_mode'
        }
    },
    methods: {

        alterarMenu(){
            this.menuFechado = !this.menuFechado
            this.$emit('aoMenuAlterado', this.menuFechado)
            console.log(this.menuFechado)
        },

        alterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
        }
    },
});

</script>
<style scoped>
@import '@/assets/css/main.css';

.menu-opcao{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
}

</style>