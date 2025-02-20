<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <h1>
    Страничка
  </h1>
  <button @click="count++">Счетчик {{ count }}</button>

</template>