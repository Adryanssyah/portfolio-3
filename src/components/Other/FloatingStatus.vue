<script setup>
import { ref, computed, onUnmounted, onMounted } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
const languageStore = useLanguageStore();

const lang = computed({
     get: () => languageStore.lang,
});

let visible = ref(false);
const windowTop = ref(0);

onMounted(() => {
     window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
     window.removeEventListener('scroll', onScroll);
});

const onScroll = (e) => {
     windowTop.value = e.target.documentElement.scrollTop;
     windowTop.value > 300 ? (visible.value = true) : (visible.value = false);
};

const status = { idn: `Tersedia untuk Bekerja`, eng: `Available to Work` };
</script>

<template>
     <Transition name="ease">
          <div v-if="visible" class="container">
               <span></span>
               <div class="status">{{ status[lang] }}</div>
          </div>
     </Transition>
</template>

<style scoped>
.container {
     position: fixed;
     overflow: hidden;
     bottom: 0;
     left: 50%;
     transform: translate(-50%, -50%);
     padding: 8px 30px 8px 30px;
     border-radius: 50px;
     border: 1px solid #454545;
     background-color: rgba(0, 0, 0, 0.85);
     display: flex;
     align-items: center;
     gap: 20px;
     transition: 300ms;
}

.container span {
     width: 10px;
     height: 10px;
     border-radius: 100%;
     background-color: greenyellow;
}

.container .status {
     color: #fff;
     font-family: Inter;
     font-size: 14px;
     white-space: nowrap;
}
.ease-enter-active,
.ease-leave-active {
     transition: all 250ms ease-in-out;
}
.ease-enter-from,
.ease-leave-to {
     opacity: 0;
     transition: all 250ms ease-in-out;
}
</style>
