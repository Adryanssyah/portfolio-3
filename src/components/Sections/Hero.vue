<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
const languageStore = useLanguageStore();
const props = defineProps(['project']);
const project = ref('');

const lang = computed({
     get: () => languageStore.lang,
});

watch(languageStore, (newValue) => {
     languageCheck(newValue.lang);
});

const scrollTo = (target) => {
     const targetSection = document.getElementById(target);
     if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
     }
};

const languageCheck = (lang = languageStore.lang) => {
     lang === 'eng' ? (project.value = 'Projects') : (project.value = 'Proyek');
};
onMounted(() => {
     languageCheck();
});

const content = {
     idn: {
          p: 'Halo, Saya',
          btn: 'Proyek Saya',
     },
     eng: {
          p: "Hello, i'm",
          btn: 'My Works',
     },
};
</script>

<template>
     <section id="Hero">
          <div class="container">
               <div class="wrapper">
                    <div class="left">
                         <p data-aos="fade-up" data-aos-delay="250">{{ content[lang].p }}</p>
                         <h1 data-aos="fade-up" data-aos-delay="300">Adryan Syahputra</h1>
                         <h2 data-aos="fade-up" data-aos-delay="350">Frontend Web Developer</h2>
                         <div class="links">
                              <a class="button" :href="`#${project}`" @click="scrollTo(project)" data-aos="fade-up" data-aos-delay="450">{{ content[lang].btn }}</a>
                              <div class="divider">
                                   <div class="link-hover" data-aos="fade-up" data-aos-delay="500">
                                        <a target="_blank" href="https://www.linkedin.com/in/muhammad-adryan-syahputra-9322281a8/" aria-label="See My LinkedIn"><i class="bi bi-linkedin"></i></a><span></span>
                                   </div>
                                   <div class="link-hover" data-aos="fade-up" data-aos-delay="550">
                                        <a target="_blank" href="https://github.com/Adryanssyah" aria-label="See My Github"><i class="bi bi-github"></i></a><span></span>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="right">
                         <div data-aos="fade-up" data-aos-delay="550">
                              <img fetchpriority="high" src="@/assets/Images/profile/1.webp" alt="My Image" />
                         </div>
                    </div>
               </div>
          </div>
     </section>
</template>

<style scoped>
section {
     width: 100%;
     display: flex;
     justify-content: center;
     background-color: #fff;
}
.container {
     width: 100%;
     max-width: 1300px;
     min-height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
}
.container .wrapper {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 100px 20px 100px 20px;
}

.container .wrapper .left p {
     font-family: 'Inter';
     font-size: 24px;
     font-weight: 500;
     margin-bottom: 19px;
}
.container .wrapper .left h1 {
     font-family: 'FoundersGrotesk';
     margin: 0;
     padding: 0;
}
.container .wrapper .left h1 {
     font-size: 80px;
     color: #1c1c1c;
}
.container .wrapper .left h2 {
     font-family: Inter;

     font-size: 30px;
     color: #424242;
     font-weight: 300;
}

.container .wrapper .left .links {
     display: flex;
     align-items: center;
     gap: 40px;
     font-family: 'Inter';
     margin-top: 50px;
}
.container .wrapper .left .links .divider {
     height: 100%;
     border-left: 1px solid black;
     display: flex;
     gap: 40px;
     justify-content: space-around;
     padding: 0 40px 0 40px;
}
.container .wrapper .left .links .button {
     border: none;
     background-color: #1c1c1c;
     color: #fff;
     border-radius: 10px;
     padding: 15px 35px 15px 35px;
     font-size: 20px;
     cursor: pointer;
     font-weight: 500;
     text-decoration: none;
     transition: 300ms;
}

.container .wrapper .left .links .button:hover {
     background-color: #424242;
}
.container .wrapper .left .links .link-hover {
     width: 40px;
     height: 40px;
}
.container .wrapper .left .links a {
     font-size: 26px;
     color: #1b1b1b;
}

.container .wrapper .right div {
     width: 400px;
     height: 400px;
     overflow: hidden;
     border-radius: 30px;
     background-color: #d6d6d6;
     box-shadow: 8px 9px 0px 1px rgba(28, 28, 28, 1);
     -webkit-box-shadow: 8px 9px 0px 1px rgba(28, 28, 28, 1);
     -moz-box-shadow: 8px 9px 0px 1px rgba(28, 28, 28, 1);
}
.container .wrapper .right img {
     width: 100%;
     height: 100%;
     object-fit: cover;
     object-position: 50% 10%;
}

@media only screen and (max-width: 576px) {
     .container .wrapper .right div {
          width: 250px !important;
          height: 250px !important;
     }

     .container .wrapper .left h1 {
          font-size: 50px !important;
     }

     .container .wrapper .left h2 {
          font-size: 20px !important;
     }
}

@media only screen and (max-width: 768px) {
     section .container {
          padding: 40px 0 40px 0;
     }
     .container .wrapper .right div {
          width: 300px;
          height: 300px;
     }

     .container .wrapper {
          flex-direction: column-reverse;
          gap: 50px;
     }
     .container .wrapper .left {
          text-align: center;
     }
     .container .wrapper .left h1 {
          font-size: 50px;
     }

     .container .wrapper .left h2 {
          font-size: 26px;
          /* margin-top: 20px; */
     }

     .container .wrapper .left .links {
          flex-direction: column;
     }
     .container .wrapper .left .links .divider {
          border-left: none;
     }

     .container .wrapper .left .links .button {
          font-size: 16px;
     }
}
@media only screen and (max-width: 992px) {
     .container .wrapper .left h1 {
          font-size: 65px;
     }
     .container .wrapper .left h2 {
          font-size: 35px;
     }

     .container .wrapper .right div {
          width: 330px;
          height: 330px;
     }
}
</style>
