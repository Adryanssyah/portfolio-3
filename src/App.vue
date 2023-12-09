<script setup>
import ScreenLoad from '@/components/Loader/ScreenLoad.vue';
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import AOS from 'aos';

const loading = ref(true);
const route = useRoute();
const routeName = computed(() => route.name);

const loadings = () => {
     if (routeName.value !== 'NotFound') {
          setTimeout(() => {
               loading.value = false;
          }, 1500);
     } else {
          loading.value = false;
     }
};

AOS.init({ once: true });
watch(routeName, (newValue) => {
     loadings();
});
</script>

<template>
     <router-view v-if="!loading"></router-view>

     <Teleport to="body" v-if="routeName !== 'NotFound'">
          <transition name="slide"> <ScreenLoad v-if="loading && routeName !== 'NotFound'" /> </transition>
     </Teleport>
</template>

<style>
* {
     padding: 0;
     margin: 0;
}

html {
     scroll-behavior: smooth;
     font-family: Inter;
}

main {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     padding: 0;
}
</style>
