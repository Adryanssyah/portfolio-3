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
     <div class="container">
          <Transition name="ease">
               <div v-if="visible" class="box">
                    <span></span>
                    <div class="status">{{ status[lang] }}</div>
               </div>
          </Transition>
     </div>
</template>

<style scoped>
.container {
     width: 100%;
     max-width: 1300px;
     position: fixed;
     bottom: 0px;
     right: 50%;
     transform: translate(50%, -50%);
     display: flex;
     padding-left: 40px;
     justify-content: start;
}

.container .box {
     padding: 8px 30px 8px 30px;
     border-radius: 50px;
     border: 1px solid #454545;
     background: rgba(0, 0, 0, 0.65);
     backdrop-filter: blur(10px);
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
     font-size: 12px;
     white-space: nowrap;
}
@media (min-width: 640px) {
     .container {
          padding-left: 0px;
          justify-content: center;
     }
     .container .status {
          font-size: 14px;
     }
}

.ease-enter-active,
.ease-leave-active {
     transition: all 250ms ease-in-out;
}
.ease-enter-from,
.ease-leave-to {
     opacity: 0;
     transform: translateY(20px);
     transition: all 250ms ease-in-out;
}
</style>
