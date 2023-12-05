<script setup>
import Navbar from '@/components/Navigations/Navbar.vue';
import Footers from '@/components/Navigations/Footer.vue';
import Hero from '@/components/Sections/Hero.vue';
import Projects from '@/components/Sections/Projects.vue';
import About from '@/components/Sections/About.vue';
import Experience from '@/components/Sections/Experience.vue';
import Contact from '@/components/Sections/Contact.vue';
import FloatingStatus from '@/components/Other/FloatingStatus.vue';
</script>

<template>
     <Navbar />
     <main>
          <Hero />
          <Projects />
          <About />
          <Experience />
          <Contact />
     </main>
     <Footers />
     <FloatingStatus />
</template>
