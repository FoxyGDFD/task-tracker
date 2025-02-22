<script setup lang="ts">
import { Task } from '@entities/tasks/types';

defineProps<{
  task: Task;
}>();
</script>

<template>
  <div class="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
    <h3 class="text-lg font-semibold text-gray-800">{{ task.title }}</h3>
    <p class="text-sm text-gray-600 mt-2">{{ task.description }}</p>
    <div class="mt-3 space-y-1 text-sm text-gray-500">
      <div>Статус: <span class="font-medium">{{ task.status }}</span></div>
      <div>Приоритет: <span class="font-medium">{{ task.priority }}</span></div>
    </div>
  </div>
</template>s