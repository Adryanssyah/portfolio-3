<script setup>
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
const props = defineProps(['experience']);
const languageStore = useLanguageStore();
const img = props.experience.img;
const lang = computed({
     get: () => languageStore.lang,
});
</script>

<template>
     <div class="card">
          <div class="head">
               <img :src="`./images/experience/${props.experience.img}.webp`" :alt="props.experience.img" />
               <div class="title">
                    <h4>{{ props.experience[lang].title }}</h4>
                    <p>{{ props.experience[lang].period }}</p>
               </div>
          </div>
          <div class="description">
               <p>{{ props.experience[lang].desc }}</p>
          </div>
          <div class="tools">
               <div v-for="(tool, index) in props.experience.tools" :key="index" class="tag">{{ tool }}</div>
          </div>
     </div>
</template>
<style scoped>
.card {
     font-family: 'Inter';
     display: grid;
     grid-template-columns: 1fr;
     gap: 60px;
     background-color: #232323;
     border-radius: 30px;
     padding: 50px;
     border: 1px solid #373737;
     transition: 300ms;
}

.card:hover {
     background-color: #272727;
}
.card .head {
     display: flex;
     gap: 30px;
}
.card .head img {
     width: 71px;
     height: 71px;
}

.card .head .title {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
}
.card .head .title h4 {
     font-family: 'FoundersGrotesk';
     color: #fff;
     font-size: 35px;
}
.card .head .title p {
     color: #939393;
     font-size: 20px;
}

.card .description p {
     color: #b1b1b1;
     font-size: 20px;
     line-height: 2rem;
}

.card .tools {
     display: flex;
     gap: 15px;
}

.card .tools .tag {
     font-size: 16px;
     color: #fff;
     font-weight: 600;
     padding: 12px 25px 12px 25px;
     border: 1px solid #494949;
     border-radius: 10px;
}

@media only screen and (max-width: 768px) {
     .card {
          padding: 25px;
     }
     .card .head img {
          width: 51px;
          height: 51px;
     }
     .card .head .title h4 {
          font-size: 26px;
     }

     .card .head .title p {
          font-size: 16px;
     }

     .card .description p {
          font-size: 16px;
          line-height: 2rem;
     }

     .card .tools .tag {
          font-size: 12px;
     }
}
</style>
