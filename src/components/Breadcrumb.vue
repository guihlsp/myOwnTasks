<template>
    <nav class="breadcrumb is-left" aria-label="breadcrumbs">
    <ul>
        <li>
        <a href="#">
            <span class="icon is-small">
            <i class="fas fa-home" aria-hidden="true"></i>
            </span>
            <span>Dashboard</span>
        </a>
        </li>
        <li>
        <a href="#">
            <span class="icon is-small">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            <span><slot></slot>></span>
        </a>
        </li>
    </ul>
    </nav>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent ({
    name: 'BreadcrumbComponent'
})
</script>

<style>

</style>