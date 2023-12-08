<script setup>
import NormalCard from '@/components/Cards/NormalCard.vue';
import Footers from '@/components/Navigations/Footer.vue';
import LanguageToggle from '@/components/Other/LanguageToggle.vue';
import data from '@/data/projects.json';
const projects = data;

import { computed } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
const languageStore = useLanguageStore();

const lang = computed({
     get: () => languageStore.lang,
});
</script>

<template>
     <section>
          <div class="container">
               <div class="head">
                    <router-link :to="{ name: 'Home' }" class="back-button" aria-label="Back to Home" data-aos="fade-up" data-aos-delay="50">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left" /></svg>
                    </router-link>
                    <div class="head2">
                         <h1 data-aos="fade-up" data-aos-delay="100">{{ lang === 'eng' ? 'My Projects' : 'Proyek Saya' }}</h1>

                         <languageToggle :dark="true" data-aos="fade-up" data-aos-delay="50" />
                    </div>
               </div>

               <div class="project-lists"><NormalCard v-for="(project, index) in projects" :key="project.id" :project="project" data-aos="fade-up" :data-aos-delay="index % 2 == 0 ? 0 : 50" /></div>
          </div>
     </section>
     <Footers />
</template>

<style scoped>
section {
     width: 100%;
     display: flex;
     justify-content: center;
     min-height: 100svh;
     background-color: #1c1c1c !important;
}
.container {
     width: 100%;
     max-width: 1300px;
     padding: 100px 20px 100px 20px;
}

.container .head {
     position: relative;
     display: flex;
     align-items: center;
     gap: 50px;
}

.container .head .head2 {
     width: 100%;
     display: flex;
     justify-content: space-between;
}

.container h1 {
     font-family: FoundersGrotesk;
     font-size: 50px;
     color: #fff;
     text-align: center;
     height: 0;
}

.container .back-button {
     width: 25px;
     height: 25px;
     padding: 20px;
     background-color: #232323;
     border-radius: 15px;
     color: #fff;
     display: flex;
     align-items: center;
     transition: 300ms;
}

.container .back-button:hover {
     background-color: #323232;
}
.container .back-button svg {
     width: 30px;
     height: 30px;
     fill: #fff;
}

.container .project-lists {
     margin-top: 100px;
     width: 100%;
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 20px;
}

@media only screen and (max-width: 758px) {
     .container h1 {
          font-size: 40px;
          height: 0;
     }
     .container .back-button {
          width: 20px;
          height: 20px;
     }
}

@media only screen and (max-width: 992px) {
     .container {
          padding: 40px 20px 40px 20px;
     }
     .container .project-lists {
          margin-top: 50px;
          grid-template-columns: 1fr;
     }
     .container .head {
          flex-direction: column;
          gap: 50px;
          align-items: start;
     }
}
</style>
