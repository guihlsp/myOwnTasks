<template>
    <header>
        <section class="logo">
            <h1>    
                <a href="http://localhost:8080/#/">
                    <img src="@/assets/logo_alura.png" 
                        alt="Logo Alura Tracker"
                    />
                </a>
            </h1>
            <h2> Olá, Guilherme!</h2>
        </section>
        <section class="menu-options">
            <aside class="menu">
                <p class="menu-label">
                    General
                </p>
                <ul class="menu-list">
                    <li><a>Dashboard</a></li>
                    <li><a class="is-active">Temporizador</a></li>
                    <li><a>Dashboard</a></li>
                    <li><a>Dashboard</a></li>
                    <li><a>Dashboard</a></li>

                </ul>
                <p class="menu-label">
                    Auxiliares
                </p>
                <ul class="menu-list">
                    <li><a>Agenda</a></li>
                    <li><a>Configurações</a></li>
                    <li><a class ="sair">Sair</a></li>
                </ul>
            </aside>
        </section>
    </header>
    
</template>

<script lang="ts">

import { defineComponent } from "vue"

export default defineComponent({
    name: "BarraLateralComponent"
});

</script>
<style scoped>
header {
    padding: 1rem;
    background: #35393d;
    width: 100%;
    height: 100vh;
}
@media only screen and (max-width: 768px) {
    header  {
        padding: 2.5rem;
        height: auto;
    }
}
.logo h2{
    color: bisque;
    padding: 0.5rem;
}
.menu {
    margin-top: 40px;
}
.menu-label {
    color: antiquewhite;
}
.menu-list li a {
    color: rgb(224, 178, 26);
    padding: 1rem;
}
</style>