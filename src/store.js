import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  incrementSimple() {
    this.count++;
  },
  incrementDouble() {
    this.count = this.count + 2;
  },
})