<script setup>
import LanguageToggle from '@/components/Other/LanguageToggle.vue';
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
const languageStore = useLanguageStore();

const mobile = ref(true);
const mobileNav = ref(false);
const windowTop = ref(0);
const whichSection = ref('Hero');

const menus = ref([]);

const sectionDark = ['Projects', 'Experience', 'Proyek', 'Pengalaman'];

watch(languageStore, (newValue) => {
     languageCheck(newValue.lang);
});

const languageCheck = (lang = languageStore.lang) => {
     lang === 'eng' ? (menus.value = ['Projects', 'About', 'Experience', 'Contact']) : (menus.value = ['Proyek', 'Tentang', 'Pengalaman', 'Kontak']);
};

const handleResize = () => {
     window.innerWidth <= 768 ? (mobile.value = true) : (mobileNav.value = false), (mobile.value = false);
};

handleResize();

const addListener = () => {
     window.addEventListener('resize', handleResize);
     window.addEventListener('scroll', checkWhichSection);
};
const removeListener = () => {
     window.removeEventListener('resize', handleResize);
     window.removeEventListener('scroll', checkWhichSection);
};

onMounted(() => {
     addListener();
     languageCheck();
});

onUnmounted(() => {
     removeListener();
});

const toggleMobileNav = () => {
     mobileNav.value = !mobileNav.value;
};

const checkWhichSection = (e) => {
     const sectionPosition = menus.value.map((el) => [el, Math.floor(document.getElementById(el).getBoundingClientRect().top) + Math.floor(window.scrollY)]);
     sectionPosition.unshift(['Hero', 0]);
     windowTop.value = Math.floor(e.target.documentElement.scrollTop);
     sectionPosition.forEach((el, index) => {
          if (sectionPosition[index + 1] != undefined) {
               if (windowTop.value >= el[1] && windowTop.value < sectionPosition[index + 1][1] && windowTop.value < sectionPosition[sectionPosition.length - 1][1]) {
                    whichSection.value = el[0];
               } else if (windowTop.value < Infinity && windowTop.value >= sectionPosition[sectionPosition.length - 1][1]) {
                    whichSection.value = sectionPosition[sectionPosition.length - 1][0];
               }
          }
     });
};

const scrollTo = (target) => {
     mobileNav.value = false;
     const targetSection = document.getElementById(target);

     if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
     }
};
</script>

<template>
     <nav id="nav" :class="{ dark: sectionDark.includes(whichSection) }">
          <div class="container">
               <div class="logos">
                    <a v-show="!sectionDark.includes(whichSection)" href="#" class="logo"><img src="@/assets/Images/logo/dark.svg" alt="Logo light" /></a>
                    <a v-show="sectionDark.includes(whichSection)" href="#" class="logo"><img src="@/assets/Images/logo/light.svg" alt="Logo light" /></a>
               </div>
               <ul>
                    <li v-for="(menu, index) in menus" :key="index">
                         <div class="link-hover" :class="{ active: menu === whichSection }">
                              <a @click="scrollTo(menu)" :href="`#${menu}`">{{ menu }}</a>
                              <span></span>
                         </div>
                    </li>
               </ul>
               <div class="buttons">
                    <LanguageToggle :dark="sectionDark.includes(whichSection)" />
                    <div @click="toggleMobileNav" class="toggle">
                         <span></span>
                         <span></span>
                    </div>
               </div>
          </div>
          <div class="wrapper">
               <transition name="slide-in">
                    <div v-show="mobileNav" class="mobile-nav">
                         <ul>
                              <li v-for="(menu, index) in menus" :key="index">
                                   <div class="link-hover" :class="{ active: menu === whichSection }">
                                        <a @click="scrollTo(menu)" :href="`#${menu}`">{{ menu }}</a>
                                        <span></span>
                                   </div>
                              </li>
                         </ul>
                         <div @click="toggleMobileNav" class="toggle">
                              <span></span>
                              <span></span>
                         </div>
                    </div>
               </transition>
          </div>
     </nav>
</template>

<style scoped>
nav {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     border-bottom: 1px solid #1c1c1c;
     display: flex;
     justify-content: center;
     background-color: #fff;
     z-index: 99;
     transition: all 300ms ease-in-out;
}

nav .container {
     width: 100%;
     max-width: 1300px;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     padding: 15px 20px 15px 20px;
}

nav .container .logos {
     display: flex;
     align-items: center;
}
nav .container .logo img {
     width: 35px;
     height: 100%;
}

nav ul {
     list-style-type: none;
     width: 100%;
     max-width: 500px;
     gap: 50px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     text-align: center;
}

nav .container .buttons {
     display: flex;
     width: 100%;
     justify-content: end;
     gap: 30px;
     align-items: center;
}

nav .container .toggle {
     display: none;
     position: relative;
     width: 30px;
     height: 15px;
     cursor: pointer;
}

nav .container .toggle span {
     position: absolute;
     right: 0;
     height: 3px;
     background: #1c1c1c;
}

nav .container .toggle span:nth-child(1) {
     top: 0;
     width: 30px;
}
nav .container .toggle span:nth-child(2) {
     top: 12px;
     width: 20px;
}

nav .mobile-nav {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100vh;
     z-index: 100;
     background-color: #1c1c1c;
     display: flex;
     justify-content: center;
     align-items: center;
}

nav .wrapper {
     position: relative;
}

nav .mobile-nav ul {
     display: flex;
     flex-direction: column;
     gap: 40px;
}
nav .mobile-nav ul .link-hover {
     height: auto;
}
nav .mobile-nav ul .link-hover span {
     background: #fff;
}

nav .mobile-nav ul li a {
     font-family: FoundersGrotesk;
     font-size: 40px;
     color: #fff;
     text-decoration: none;
}

nav .wrapper .toggle {
     position: absolute;
     top: 80px;
     z-index: 1000;
     right: 40px;
     width: 40px;
     height: 25px;
     cursor: pointer;
}

nav .wrapper .toggle span {
     position: absolute;
     height: 3px;
     background: #ffffff;
}
nav .wrapper .toggle span:nth-child(1) {
     top: 0;
     width: 30px;
     transform: rotate(-45deg);
     transform-origin: right;
}
nav .wrapper .toggle span:nth-child(2) {
     top: 21px;
     width: 30px;
     transform: rotate(45deg);
     transform-origin: right;
}

.active {
     font-weight: bold;
}

.link-hover a {
     opacity: 0.7;
     font-weight: 600;
}

.link-hover.active a {
     opacity: 1;
     font-weight: 900 !important;
}

.link-hover a:hover {
     font-weight: 900 !important;
     opacity: 1;
}

nav.dark {
     background-color: #1c1c1c;
     border-bottom: 1px solid #313131;
}

nav.dark .container .link-hover a {
     color: #fff;
}
nav.dark .container .link-hover span {
     background-color: #fff;
}
nav.dark .container .toggle span {
     background: #fff;
}

@media only screen and (max-width: 768px) {
     nav .container {
          grid-template-columns: 1fr 1fr;
     }
     nav .container ul {
          display: none;
     }
     nav .container .toggle {
          display: block;
     }
}

.slide-in-enter-active,
.slide-in-leave-active {
     transition: transform 500ms ease-in-out;
}
.slide-in-enter-from,
.slide-in-leave-to {
     transform: translateX(200%);
     transition: all 500ms ease-in-out 0s;
}
</style>
