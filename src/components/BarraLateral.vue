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
                    
                </div>
                <h1 class="imagem-logo">
                    <router-link to="/">
                        <img src="@/assets/imgs/myOwnTasks_2.png" 
                        alt="Logo myOwnTasks"/>
                    </router-link>
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
                                <router-link to="/" class="menu-opcao">
                                    <div class="menu-nome">
                                        <span>
                                            Dashboard
                                        </span>
                                    </div>
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/projetos" 
                                 class="menu-opcao" :style="estilo">
                                    <div class="menu-nome">
                                        <span>
                                        Projetos
                                        </span>
                                    </div>
                                    <i class="fa fa-briefcase " aria-hidden="true"></i>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/temporizador" 
                                 class="menu-opcao {{ classeAtivo }}" @click="ativarMenu" :style="estilo">
                                    <div class="menu-nome">
                                        <span>
                                        Temporizador
                                        </span>
                                    </div>
                                    <i class="fa fa-hourglass " aria-hidden="true"></i>
                                </router-link>
                            </li>
                            <!-- <li>
                                <router-link to="/agenda" class="menu-opcao" href="">
                                    <div class="menu-nome">
                                        <span>
                                        Agenda
                                        </span>
                                    </div>
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                </router-link>
                            </li> -->
                        </ul>
                        <ul class="menu-botton">
                            <!-- <li>
                                <router-link to="/configuracoes" class="menu-opcao">
                                    <div class="menu-nome">
                                        <span>
                                        Configurações
                                        </span>
                                    </div>
                                    <i class="fa fa-sliders" aria-hidden="true"></i>
                                </router-link>
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
                            </li> -->
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
            modoEscuroAtivo: false,
            telaAtual: false,
            estilo: {

                display: 'flex',
                justifyContent: 'space-between',
                margin: '0 auto',
                alignItems: 'center'
            }
        }
    },
    emits: ['aoTemaAlterado', 'aoMenuAtivado'],
    computed: {
        iconeBotao() {
            if (this.modoEscuroAtivo) {
                return 'sunny'
            }
            return 'dark_mode'
        },
        classeAtivo(){
            if (this.telaAtual){
                return  'is-active'
            }
            return ''
        }
    },
    methods: {

        ativarMenu(){
            this.telaAtual = !this.telaAtual
            this.$emit('aoMenuAtivado', this.telaAtual)
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