<script setup>
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
const languageStore = useLanguageStore();

const lang = computed({
     get: () => languageStore.lang,
});

const d = new Date();
let year = d.getFullYear();

const copyright = { idn: `Hak Cipta © ${year}. Semua hak dilindungi undang-undang`, eng: `Copyright © ${year}. All rights are reserved` };
</script>

<template>
     <footer id="Footer">
          <div class="container">
               <div class="copyright">
                    <p>{{ copyright[lang] }}</p>
               </div>
               <div class="socials">
                    <div class="link-hover">
                         <a target="_blank" href="https://www.linkedin.com/in/muhammad-adryan-syahputra-9322281a8/" aria-label="See My LinkedIn"><i class="bi bi-linkedin"></i></a>
                         <span></span>
                    </div>

                    <div class="link-hover">
                         <a target="_blank" href="https://github.com/Adryanssyah" aria-label="See My Github"><i class="bi bi-github"></i></a>
                         <span></span>
                    </div>
               </div>
          </div>
     </footer>
</template>

<style scoped>
footer {
     display: flex;
     justify-content: center;
     background-color: #1c1c1c;
     font-family: 'Inter';
     color: #fff;
}

footer .container {
     width: 100%;
     max-width: 1300px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     align-items: center;
     padding: 30px 20px 30px 20px;
}

footer .container .copyright p {
     font-weight: 100;
     font-size: 16px;
}

footer .container .socials {
     display: flex;
     gap: 50px;
}

footer .container .socials a {
     text-decoration: none;
     color: #fff;
     font-size: 20px;
}

footer .container .socials .link-hover span {
     background-color: #fff;
}
footer .container .socials .link-hover {
     transition: all 300ms;
}
footer .container .socials .link-hover:hover {
     transform: scale(1.3);
}

@media only screen and (max-width: 768px) {
     footer .container {
          flex-direction: column-reverse;
          gap: 20px;
     }

     footer {
          padding-top: 50px;
          padding-bottom: 50px;
     }

     footer .container .copyright p {
          font-size: 14px;
          margin-top: 15px;
          text-align: center;
     }
}
</style>
