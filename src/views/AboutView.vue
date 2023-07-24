<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>

<template>
  <div class="about">
    <button class="buttons" @click="storeCounter.increase">{{ storeCounter.count }}</button>
  </div>
</template>

<style scoped>
.buttons {
  font-size: 50px;
  margin: 30px;
}
</style>
