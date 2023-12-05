<script setup>
import { watch, ref, computed, onMounted } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
const languageStore = useLanguageStore();
const id = ref('');

watch(languageStore, (newValue) => {
     languageCheck(newValue.lang);
});

const lang = computed({
     get: () => languageStore.lang,
});

const languageCheck = (lang = languageStore.lang) => {
     lang === 'eng' ? (id.value = 'About') : (id.value = 'Tentang');
};

onMounted(() => {
     languageCheck();
});

const content = {
     idn: {
          sectionTitle: {
               p: 'Lebih Banyak',
               h3: 'Tentang Saya',
          },
          role: 'Frontend Web Developer',
          location: 'Berbasis di Jambi, Indonesia.',
          desc: 'Sebagai Pengembang Front-End Junior, Saya memiliki keterampilan yang mengesankan dalam HTML, CSS, JavaScript, Vue, Tailwind. Saya unggul dalam merancang dan merawat situs web responsif yang menawarkan pengalaman pengguna yang lancar. Keahlian Saya terletak pada menciptakan antarmuka dinamis dan menarik melalui penulisan kode yang bersih dan dioptimalkan serta menggunakan alat dan teknik pengembangan mutakhir. Saya juga seorang yang berkembang dengan baik dalam berkolaborasi dengan tim lintas fungsional untuk menghasilkan aplikasi web yang baik.',
     },
     eng: {
          sectionTitle: {
               p: 'More',
               h3: 'About Me',
          },
          role: 'Frontend Web Developer',
          location: 'Based in Jambi, Indonesia.',
          desc: 'As a Junior Front-End Developer, I wield an impressive array of skills in HTML, CSS, JavaScript, Vue, Tailwind. I excel in designing and maintaining responsive websites that deliver a seamless user experience. My expertise lies in crafting dynamic and engaging interfaces by writing clean and optimized code and leveraging cutting-edge development tools and techniques. I am also a team player who thrives on collaborating with cross-functional teams to deliver outstanding web applications.',
     },
};
</script>

<template>
     <section :id="id">
          <div class="container">
               <div class="title">
                    <p data-aos="fade-up" data-aos-delay="50">{{ content[lang].sectionTitle.p }}</p>
                    <h3 data-aos="fade-up" data-aos-delay="100">{{ content[lang].sectionTitle.h3 }}</h3>
               </div>
               <div class="content">
                    <div class="image" data-aos="fade-up" data-aos-delay="50">
                         <img src="@/assets/Images/profile/2.webp" alt="My Image 2" />
                    </div>
                    <div class="description">
                         <h4 data-aos="fade-up" data-aos-delay="100">{{ content[lang].role }}</h4>
                         <h5 data-aos="fade-up" data-aos-delay="150">{{ content[lang].location }}</h5>
                         <p data-aos="fade-up" data-aos-delay="170">
                              {{ content[lang].desc }}
                         </p>
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
     color: #282828;
     font-size: 20px;
     font-weight: 100;
}
.container .title h3 {
     font-family: 'FoundersGrotesk';
     color: #1c1c1c;
     font-weight: bold;
     margin-top: 15px;
     font-size: 50px;
}

.container .content {
     display: grid;
     grid-template-columns: 1fr 1fr;
     margin: 70px 0 70px 0;
     gap: 40px;
     padding: 0;
}
.container .content .image {
     width: 100%;
     aspect-ratio: 2.6 / 2;
     overflow: hidden;
     border-radius: 30px;
     background-color: #e6e6e6;
}

.container .content .image img {
     width: 100%;
     height: 100%;
     object-fit: cover;
     object-position: 50% 25%;
}

.container .content .description {
     padding: 20px 0 20px 0;
     display: flex;
     flex-direction: column;
     justify-content: center;
}

.container .content .description h4 {
     font-family: 'FoundersGrotesk';
     font-size: 35px;
     color: #1c1c1c;
}
.container .content .description h5 {
     color: #2f2f2f;
     font-size: 20px;
     font-weight: 400;
     margin-top: 10px;
}
.container .content .description p {
     color: #242424;
     font-size: 20px;
     margin-top: 40px;
     line-height: 2rem;
}

@media only screen and (max-width: 576px) {
     .container .content {
          padding: 0px 0px 0px 0px !important;
     }
}
@media only screen and (max-width: 768px) {
     .container .content {
          padding: 0 10px 0 10px !important;
     }
     .container .content .description h4 {
          font-size: 26px;
     }
     .container .content .description h5,
     .container .content .description p {
          font-size: 16px;
     }
}

@media only screen and (max-width: 992px) {
     .container .content .description h4 {
          font-size: 30px !important;
     }
     .container .content .description h5,
     .container .content .description p {
          font-size: 16px !important;
     }
}

@media only screen and (max-width: 1200px) {
     .container .content {
          grid-template-columns: 1fr;
          padding: 0 150px 0 150px;
     }
     .container .content .description {
          text-align: center;
     }
     .container .content .image {
          width: 100%;
          aspect-ratio: 1 / 1;
     }
}
</style>
