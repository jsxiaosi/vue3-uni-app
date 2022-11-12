import { defineStore } from 'pinia';
import { ref } from 'vue';
import { store } from '@/store';

export const useCounterStore = defineStore('counter', () => {
  const num = ref<number>(0);

  function setNum() {
    num.value = num.value + 1;
  }

  return {
    setNum,
    num,
  };
});

export function useCounterStoreHook() {
  return useCounterStore(store);
}
