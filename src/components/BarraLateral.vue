<template>
    <header>
        <section class="logo">
                <div class="botao-menu">
                    <button class="button is-warning is-outlined">
                        <span class="icon">
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </span> 
                    </button>
                    
                </div>
            <h1>    
                <a href="http://localhost:8080/#/">
                    <img src="@/assets/myOwnTasks_2.png" 
                        alt="Logo myOwnTasks"
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
                        <ul class="menu-top">
                        <li><a class="is-disabled"><i class="fa fa-home" aria-hidden="true"></i>
                        Dashboard</a></li>
                        <li><a class="is-active"   ><i class="fa fa-hourglass " aria-hidden="true"></i>
                        Timetracker</a></li>
                        <li><a><i class="fa fa-calendar" aria-hidden="true"></i>
                        Agenda</a></li>
                    </ul>
                    <ul class="menu-botton">
                        <li><a><i class="fa fa-sliders" aria-hidden="true"></i>
                        Configurações</a></li>
                        <li><a class ="sair"><i class="fa fa-power-off" aria-hidden="true"></i>
                        Sair</a></li>
                    </ul>
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
        padding: 2rem;
        height: auto;
    }
    .menu-top{
    display: flex;
    justify-content:center;
    ;
    }
    .menu-botton{
    display: flex;
    justify-content:center;
    }
}

.logo .botao-menu{
    display: flex;
    justify-content: right;
}

.logo{
    height: auto;
    width: 100%;
}
.logo h2{
    color: #faf0ca;
    padding: 0.5rem;
}
.menu {
    margin-top: 40px;
}
.menu-label {
    color: #faf0ca;
}
.menu-list li a {
    color: rgb(224, 178, 26);
    padding: 1rem;
}
</style>