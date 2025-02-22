<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
    <main class="max-w-[1440px] w-full md:px-8 px-3 mx-auto">
        <router-view></router-view>
    </main>
    <VueQueryDevtools />
</template>