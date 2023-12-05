<script setup>
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
const languageStore = useLanguageStore();
const props = defineProps(['project']);

const lang = computed({
     get: () => languageStore.lang,
});
</script>

<template>
     <div class="card">
          <div class="image">
               <img :src="`./images/projects/${props.project.img}.webp`" :alt="props.project[lang].name" />
          </div>
          <div class="details">
               <div class="description">
                    <div>
                         <h4>{{ props.project[lang].name }}</h4>
                         <p>{{ props.project[lang].desc }}</p>
                    </div>
                    <div v-if="props.project.link" class="link-hover">
                         <a :href="props.project.link" target="_blank" :aria-label="`Visit live demo ${props.project[lang].name}`"><i class="bi bi-box-arrow-up-right"></i></a>
                         <span></span>
                    </div>
               </div>
               <div class="tools">
                    <div v-for="(tool, index) in props.project.tools" :key="index" class="tag">{{ tool }}</div>
               </div>
          </div>
     </div>
</template>

<style scoped>
.card {
     font-family: 'Inter';
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     background-color: #232323;
     border-radius: 30px;
     padding: 40px;
     border: 1px solid #373737;
     transition: 300ms;
}

.card:hover {
     background-color: #272727;
}

.card .image {
     width: 100%;
     height: 320px;
     background-color: #373737;
     border-radius: 15px;
     overflow: hidden;
}
.card .image img {
     width: 100%;
     height: 100%;
     object-fit: cover;
}
.card .details {
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
}

.card .details .description {
     width: 100%;
     display: flex;
     justify-content: space-between;
     margin-top: 10px;
}
.card .details .description div:first-child {
     width: 85%;
}
.card .details .description div:only-child {
     width: 100%;
}

.card .details .description h4 {
     font-family: 'FoundersGrotesk';
     font-size: 35px;
     color: #fff;
}
.card .details .description p {
     font-size: 20px;
     font-weight: 500;
     color: #b1b1b1;
     margin-top: 10px;
     line-height: 2rem;
}
.card .details .description a {
     text-decoration: none;
     font-size: 20px;
     color: #fff;
}

.card .details .description .link-hover {
     padding: 0 5px 5px 5px;
}
.card .details .description .link-hover span {
     background-color: #fff;
}

.card .details .tools {
     display: flex;
     gap: 15px;
     flex-wrap: wrap;
     white-space: nowrap;
}

.card .details .tools .tag {
     font-size: 16px;
     color: #fff;
     font-weight: 600;
     padding: 12px 25px 12px 25px;
     border: 1px solid #494949;
     border-radius: 10px;
}

@media only screen and (max-width: 576px) {
     .card .image {
          height: 180px !important;
     }
}

@media only screen and (max-width: 768px) {
     .card {
          grid-template-columns: 1fr;
          padding: 25px;
     }

     .card .image {
          height: 240px;
     }
     .card .details {
          gap: 50px;
     }
     .card .details .description {
          margin-top: 0;
     }
     .card .details .description h4 {
          font-size: 26px;
     }
     .card .details .description p {
          font-size: 16px;
     }
     .card .details .description a {
          font-size: 16px;
     }
     .card .details .description div:first-child {
          width: 100%;
     }

     .card .details .tools .tag {
          font-size: 12px;
     }
}
</style>
