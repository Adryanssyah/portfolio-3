<script setup>
import { watch, ref, computed, onMounted } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
const languageStore = useLanguageStore();
const id = ref('');

const lang = computed({
     get: () => languageStore.lang,
});

watch(languageStore, (newValue) => {
     languageCheck(newValue.lang);
});

const languageCheck = (lang = languageStore.lang) => {
     lang === 'eng' ? (id.value = 'Contact') : (id.value = 'Kontak');
};

onMounted(() => {
     languageCheck();
});

const content = {
     idn: { h1: 'Tertarik dengan kerjaan saya?', h2: 'Hubungi Saya! 👇', mail: 'Surel' },
     eng: { h1: 'Interested with my work?', h2: 'Hit me up! 👇', mail: 'Email' },
};
</script>

<template>
     <section :id="id">
          <div class="container">
               <div class="head">
                    <h1 data-aos="fade-up" data-aos-delay="100">{{ content[lang].h1 }}</h1>
                    <h2 data-aos="fade-up" data-aos-delay="150">{{ content[lang].h2 }}</h2>
               </div>
               <div class="contact">
                    <div class="item" data-aos="fade-up" data-aos-delay="250">
                         <div class="icon">
                              <i class="bi bi-linkedin"></i>
                         </div>
                         <div class="description">
                              <h3>LinkedIn</h3>
                              <div class="link-hover"><a target="_blank" href="https://www.linkedin.com/in/muhammad-adryan-syahputra-9322281a8/">Muhammad Adryan Syahputra</a><span></span></div>
                         </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="200">
                         <div class="icon">
                              <i class="bi bi-envelope"></i>
                         </div>
                         <div class="description">
                              <h3>{{ content[lang].mail }}</h3>

                              <div class="link-hover">
                                   <a href="mailto:adryansyah434@gmail.com">adryansyah434@gmail.com</a>
                                   <span></span>
                              </div>
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
     font-family: 'Inter';
}
.container {
     width: 100%;
     max-width: 1300px;
     display: flex;
     align-items: center;
     flex-direction: column;
     padding: 200px 20px 200px 20px;
}

.container .head {
     font-family: FoundersGrotesk;
     text-align: center;
}
.container .head h1 {
     font-size: 80px;
     color: #1c1c1c;
}
.container .head h2 {
     font-family: Inter;
     margin-top: 20px;
     font-size: 30px;
     color: #1c1c1c;
     font-weight: lighter;
}

.container .contact {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     margin: 60px 0 0px 0;
}

.container .contact .item {
     display: flex;
     gap: 20px;
     align-items: center;
}

.container .contact .item .icon {
     font-size: 35px;
     padding: 15px 20px 15px 20px;
     border: 2px solid black;
     border-radius: 15px;
}

.container .contact .item .description h3 {
     font-family: FoundersGrotesk;
     font-size: 26px;
}
.container .contact .item .description a {
     color: #666666;
     font-size: 20px;
     text-decoration: none;
}

@media only screen and (max-width: 768px) {
     .container {
          padding: 150px 20px 150px 20px !important;
     }
     .container .contact {
          grid-template-columns: 1fr;
     }

     .container .contact .item:nth-child(2) {
          order: -1;
     }

     .container .head h1 {
          font-size: 40px;
     }
     .container .head h2 {
          font-size: 20px;
     }

     .container .contact .item {
          flex-direction: column;
     }
     .container .contact .item .description {
          text-align: center;
     }

     .container .contact .item .icon {
          font-size: 20px;
     }
     .container .contact .item .description h3 {
          font-size: 20px;
     }

     .container .contact .item .description a {
          font-size: 16px;
     }
}

@media only screen and (max-width: 992px) {
     .container .head h1 {
          font-size: 60px;
     }

     .container .head h2 {
          font-size: 26px;
     }

     .container .contact .item {
          flex-direction: column;
     }

     .container .contact .item .description {
          text-align: center;
     }

     .container .contact .item .description h3 {
          font-size: 26px;
     }

     .container .contact .item .description a {
          font-size: 20px;
     }
}
</style>
