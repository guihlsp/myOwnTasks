<template>
    <header class="menuFechado">
        <div class="sidebar-menu">
            <section class="logo">
                <div class="botoes-sidebar">
                    <button class="button is-warning is-outlined botao-tema" @click="alterarTema">
                        <span class="material-symbols-outlined">
                            {{ iconeBotao }}
                        </span>
                    </button>
                    <!-- @click="fecharMenu"
                        :hidden="menuAberto"> -->
                    <button class="button is-warning is-outlined botao-menu">
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
                        <img src="@/assets/myOwnTasks_2.png" 
                        alt="Logo myOwnTasks"
                        />
                    </a>
                </h1>

                <h2 class="boas-vindas"> Olá, Guilherme!</h2>
            </section>
            <section class="menu-options">
                <aside class="menu">
                    <p class="menu-label">
                        General
                    </p>
                    <ul class="menu-list">
                        <ul class="menu-top">
                            <li>
                                <a class="menu-opcao">
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                    <div class="menu-nome">
                                        <span>
                                            Dashboard
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="menu-opcao is-active">
                                    <i class="fa fa-hourglass " aria-hidden="true"></i>
                                    <div class="menu-nome">
                                        <span class="menu-">
                                        Timetracker
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="menu-opcao">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                    <div class="menu-nome">
                                        <span>
                                        Agenda
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="menu-botton">
                            <li>
                                <a class="menu-opcao">
                                    <i class="fa fa-sliders" aria-hidden="true"></i>
                                    <div class="menu-nome">
                                        <span>
                                        Configurações
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="sair menu-opcao">
                                    <i class="fa fa-power-off" aria-hidden="true"></i>
                                    <div class="menu-nome">
                                        <span>
                                        Sair
                                        </span>
                                    </div>
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
import '@/assets/css/main.css'
export default defineComponent({
    name: "BarraLateralComponent",
    data() {
        return {
            menuAberto: true,
            modoEscuroAtivo: false
        }
    },
    emits: ['aoTemaAlterado'],
    computed: {
        iconeBotao() {
            if (this.modoEscuroAtivo) {
                return 'sunny'
            }
            return 'dark_mode'
        }
    },
    methods: {
        // fecharMenu(){
        //     this.menuAberto = !this.menuAberto
        //     console.log(this.menuAberto)
        // },

        alterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
        }
    },
});

</script>
<style scoped>

</style>