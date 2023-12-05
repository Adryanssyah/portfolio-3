import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLanguageStore = defineStore({
     id: 'language',
     state: () => ({
          lang: ref('eng'),
     }),
});
