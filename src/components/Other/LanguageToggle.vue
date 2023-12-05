<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import useClickOutside from '@/composables/useClickOutside';
import { useLanguageStore } from '@/stores/languageStore';
const languageStore = useLanguageStore();

const lang = computed({
     get: () => languageStore.lang,
     set(val) {
          languageStore.lang = val;
     },
});

const props = defineProps(['dark']);

const selectVisible = ref(false);
const componentRef = ref();
const excludeRef = ref();

const toggleSelect = () => {
     selectVisible.value = !selectVisible.value;
};

useClickOutside(
     componentRef,
     () => {
          selectVisible.value = false;
     },
     excludeRef
);

watch(lang, (newValue) => {
     localStorage.setItem('lang-portfolio-adryan', lang.value);
});

onMounted(() => {
     localStorage.getItem('lang-portfolio-adryan') === null ? localStorage.setItem('lang-portfolio-adryan', lang.value) : (lang.value = localStorage.getItem('lang-portfolio-adryan'));
});
</script>

<template>
     <div class="outer">
          <div @click="toggleSelect" ref="excludeRef" class="box" :class="{ active: props.dark }">
               <img v-if="lang === 'eng'" src="@/assets/Images/logo/eng.png" alt="EN-selected" />
               <img v-if="lang === 'idn'" src="@/assets/Images/logo/idn.png" alt="ID-selected" />
               <span v-if="lang === 'eng'">EN</span>
               <span v-if="lang === 'idn'">ID</span>
          </div>
          <transition name="select">
               <div v-if="selectVisible" ref="componentRef" class="select" :class="{ active: props.dark }">
                    <label for="idn" :class="{ selected: lang === 'idn' }">
                         <img src="@/assets/Images/logo/idn.png" alt="ID" /> <span>Indonesia</span>
                         <input type="radio" name="lang" id="idn" value="idn" v-model="lang" @change="toggleSelect" />
                    </label>
                    <label for="eng" :class="{ selected: lang === 'eng' }"
                         ><img src="@/assets/Images/logo/eng.png" alt="EN" /><span>English</span>
                         <input type="radio" name="lang" id="eng" value="eng" v-model="lang" @change="toggleSelect" />
                    </label>
               </div>
          </transition>
     </div>
</template>

<style scoped>
.outer {
     position: relative;
}
.box {
     padding: 10px;
     background-color: rgba(232, 232, 232, 0.9);
     color: #1c1c1c;
     border-radius: 10px;
     font-family: Inter;
     font-weight: 700;
     font-size: small;
     display: flex;
     gap: 10px;
     cursor: pointer;
     transition: all 300ms;
     align-items: center;
}

.box.active {
     background-color: rgba(45, 45, 45, 1);
     color: #fff;
}

.box.active:hover {
     background-color: rgba(45, 45, 45, 0.5);
}
.box:hover {
     background-color: rgba(223, 223, 223, 1);
}

img {
     width: 20px;
     height: 20px;
}

.select {
     position: absolute;
     right: 0;
     top: 50px;
     padding: 10px;
     background-color: rgb(253, 253, 253);
     border: 1px solid #1c1c1c;
     color: #1c1c1c;
     border-radius: 10px;
     display: flex;
     gap: 10px;
     flex-direction: column;
     font-family: Inter;
}

.select.active {
     background-color: rgba(45, 45, 45, 1);
     color: #fff;
     border: 1px solid #313131;
}

.select label {
     display: flex;
     gap: 10px;
     cursor: pointer;
     padding: 7px 10px 7px 10px;
     border-radius: 5px;
}

.select label.selected,
.select label:hover {
     background-color: #eaeaea;
}
.select.active label.selected,
.select.active label:hover {
     background-color: #454545;
}
.select label input {
     display: none;
}

.select-enter-active,
.select-leave-active {
     transition: all 250ms ease-in-out;
}
.select-enter-from,
.select-leave-to {
     opacity: 0;
     transition: all 250ms ease-in-out;
}
</style>
