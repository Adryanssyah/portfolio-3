<script setup>
import ExperienceCard from '@/components/Cards/ExperienceCard.vue';
import experienceData from '@/data/experience.json';
import { watch, ref, computed, onMounted } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';

const languageStore = useLanguageStore();
const id = ref('');
const data = experienceData;

watch(languageStore, (newValue) => {
     languageCheck(newValue.lang);
});

const lang = computed({
     get: () => languageStore.lang,
});

const languageCheck = (lang = languageStore.lang) => {
     lang === 'eng' ? (id.value = 'Experience') : (id.value = 'Pengalaman');
};

onMounted(() => {
     languageCheck();
});

const content = {
     idn: { p: 'Jelajahi', h3: 'Pengalaman Saya' },
     eng: { p: 'Explore My', h3: 'Experience' },
};
</script>

<template>
     <section :id="id">
          <div class="container">
               <div class="title">
                    <p data-aos="fade-up" data-aos-delay="100">{{ content[lang].p }}</p>
                    <h3 data-aos="fade-up" data-aos-delay="150">{{ content[lang].h3 }}</h3>
               </div>
               <div class="content">
                    <ExperienceCard :experience="data[0]" data-aos="fade-up" data-aos-delay="200" />
                    <ExperienceCard :experience="data[1]" data-aos="fade-up" data-aos-delay="250" />
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

.container .content {
     display: grid;
     grid-template-columns: 1fr 1fr;
     margin: 70px 0 70px 0;
     gap: 20px;
}

@media only screen and (max-width: 768px) {
     .container .content {
          grid-template-columns: 1fr;
     }
}
</style>
