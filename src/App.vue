<script setup>
import ScreenLoad from '@/components/Loader/ScreenLoad.vue';
import { ref, onMounted } from 'vue';
import AOS from 'aos';

const loading = ref(true);
onMounted(() => {
     setTimeout(() => {
          loading.value = false;
          AOS.init({ once: true });
     }, 1500);
});
</script>

<template>
     <router-view v-if="!loading"></router-view>

     <Teleport to="body">
          <transition name="slide"> <ScreenLoad v-if="loading" /> </transition>
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
