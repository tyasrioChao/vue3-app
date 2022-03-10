import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

export const useCounterStore2 = defineStore('counter2', () => {
  const count2 = ref(0)
  function increment(): void {
    count2.value++
  }

  return { count2, increment }
})
