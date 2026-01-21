import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  
  state: () => ({ 
    count: 0 
  }),

  actions: {
    incrementSimple() {
      this.count++
    },
    incrementDouble() {
      this.count = this.count + 2;
    },
  },
});
