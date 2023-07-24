import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const evenOrOdd = computed(() => (count.value % 2 ? 'odd' : 'even'))
  function increase() {
    count.value++
  }
  function decrease() {
    count.value--
  }

  return { count, evenOrOdd, increase, decrease }
})
