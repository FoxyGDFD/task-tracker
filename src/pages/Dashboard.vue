<template>
    <h1 class="text-4xl font-bold">{{ data?.name }}</h1>
    <section class="grid grid-cols-3 gap-2 rounded-xl bg-indigo-100 p-4 mt-5">
      <Column v-for="(item, index) in data?.columns" :key="index" :name="item" />
    </section>
</template>

<script setup lang="ts">
  import Column from '@shared/ui/Column.vue'
  import { useReadDashboard } from '@entities/dashboards/hooks'
  const { data } = useReadDashboard();
  console.log(data.value)
</script>