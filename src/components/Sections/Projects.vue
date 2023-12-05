<script setup>
import { watch, ref, computed, onMounted } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
import LargeCard from '@/components/Cards/LargeCard.vue';
import NormalCard from '@/components/Cards/NormalCard.vue';
import data from '@/data/projects.json';
const projects = data.slice(0, 3);

const languageStore = useLanguageStore();
const id = ref('');

const lang = computed({
     get: () => languageStore.lang,
});
watch(languageStore, (newValue) => {
     languageCheck(newValue.lang);
});

const languageCheck = (lang = languageStore.lang) => {
     lang === 'eng' ? (id.value = 'Projects') : (id.value = 'Proyek');
};

onMounted(() => {
     languageCheck();
});

const content = {
     idn: {
          sectionTitle: {
               p: 'Inilah',
               h3: 'Proyek Saya',
          },
          btn: 'Semua Proyek',
     },
     eng: {
          sectionTitle: {
               p: 'My Recent',
               h3: 'Projects',
          },
          btn: 'All Projects',
     },
};
</script>

<template>
     <section :id="id">
          <div class="container">
               <div class="title">
                    <p data-aos="fade-up" data-aos-delay="100">{{ content[lang].sectionTitle.p }}</p>
                    <h3 data-aos="fade-up" data-aos-delay="150">{{ content[lang].sectionTitle.h3 }}</h3>
               </div>
               <div class="project-lists">
                    <div class="first-row">
                         <LargeCard :project="projects[0]" data-aos="fade-up" data-aos-delay="100" />
                    </div>
                    <div class="rest-row">
                         <NormalCard :project="projects[1]" data-aos="fade-up" data-aos-delay="150" />
                         <NormalCard :project="projects[2]" data-aos="fade-up" data-aos-delay="200" />
                    </div>
               </div>
               <div class="foot">
                    <router-link :to="{ name: 'Projects' }" class="button" :aria-label="content[lang].btn">{{ content[lang].btn }}</router-link>
               </div>
          </div>
     </section>
</template>

<style scoped>
section {
     width: 100%;
     display: flex;
     justify-content: center;
     background-color: #1c1c1c;
}
.container {
     width: 100%;
     max-width: 1300px;
     padding: 100px 20px 100px 20px;
}

.container .title {
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
}

.container .title p {
     font-family: 'Inter';
     color: #b5b5b5;
     font-size: 20px;
     font-weight: 100;
}
.container .title h3 {
     font-family: 'FoundersGrotesk';
     color: #fff;
     font-weight: bold;
     margin-top: 15px;
     font-size: 50px;
}
.container .project-lists {
     width: 100%;
     display: flex;
     flex-direction: column;
     gap: 20px;
     margin: 70px 0 70px 0;
}

.container .project-lists .first-row {
     width: 100%;
}
.container .project-lists .rest-row {
     width: 100%;
     overflow: hidden;
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 20px;
}

.container .foot {
     width: 100%;
     display: flex;
     justify-content: center;
}

.container .foot .button {
     font-family: Inter;
     border: none;
     background-color: #232323;
     color: #fff;
     border-radius: 10px;
     padding: 15px 35px 15px 35px;
     font-size: 20px;
     cursor: pointer;
     font-weight: 500;
     transition: 300ms;
     text-decoration: none;
}

.container .foot .button:hover {
     background-color: #323232;
}

@media only screen and (max-width: 758px) {
     .container .foot .button {
          font-size: 16px;
     }
}
@media only screen and (max-width: 992px) {
     .container .project-lists .rest-row {
          grid-template-columns: 1fr;
     }
}
</style>
