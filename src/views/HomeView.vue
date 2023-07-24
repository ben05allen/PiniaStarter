<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>

<template>
  <div class="home">
    <div class="count">{{ storeCounter.count }}</div>
    <div class="buttons">
      <button @click="storeCounter.decrease">-</button>
      <button @click="storeCounter.increase">+</button>
    </div>
    <div class="oddOrEven">The counter is {{ storeCounter.evenOrOdd }}.</div>
    <div>
      <h3>Edit Counter</h3>
      <input type="number" v-model="storeCounter.count" class="input" />
    </div>
  </div>
</template>

<style scoped>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
  width: 40px;
}
.oddOrEven {
  font-size: 20px;
  margin: 10px;
}
.input {
  width: 50px;
}
</style>
