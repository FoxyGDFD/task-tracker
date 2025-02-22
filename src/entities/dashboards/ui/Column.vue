<script setup lang="ts">
  import { useListTasks } from '@entities/tasks/hooks';
  import TaskCard from './ColumnCard.vue';
  // TODO: rewrite to string
  const { name } = defineProps<{ name: "todo" | "in_progress" | "done" }>();
  const { data } = useListTasks({ status: name });
</script>

<template>
  <article class="w-full bg-indigo-50 rounded-xl p-4">
    <h3 class="text-2xl font-medium text-indigo-900 mb-6">{{ name }}</h3>
    <ul class="bg-white p-2 rounded-xl space-y-4">
      <TaskCard v-for="item in data" :key="item.id" :task="item" />
      <p v-if="data?.length === 0" class="text-gray-500">Нет задач</p>
    </ul>
  </article>
</template>