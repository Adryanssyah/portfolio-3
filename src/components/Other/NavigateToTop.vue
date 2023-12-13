<script setup>
import { ref, computed, onUnmounted, onMounted } from 'vue';
const visible = ref(false);
const windowTop = ref(0);
const handleScroll = () => {
     document.body.scrollTop = document.documentElement.scrollTop = 0;
};

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
</script>

<template>
     <div class="container">
          <Transition name="ease">
               <button v-if="visible" class="box" @click="handleScroll" aria-label="Scroll to top"><i class="bi bi-chevron-double-up"></i></button>
          </Transition>
     </div>
</template>

<style scoped>
.container {
     width: 100%;
     max-width: 1300px;
     position: fixed;
     bottom: -10px;
     right: 50%;
     transform: translate(50%, -50%);
     display: flex;
     justify-content: end;
     padding-right: 40px;
}
.box {
     height: 45px;
     width: 45px;
     background: rgba(0, 0, 0, 0.65);
     backdrop-filter: blur(10px);
     border: 1px solid #454545;
     display: flex;
     align-items: center;
     justify-content: center;
     color: white;
     cursor: pointer;
     border-radius: 10px;
     outline: none;
     transition: all 0.3s ease-in-out;
}

.box:hover {
     background: rgba(0, 0, 0, 0.85);
}

@media (min-width: 1300px) {
     .container {
          padding-right: 0px;
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
