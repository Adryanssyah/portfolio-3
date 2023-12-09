<script setup></script>

<template>
     <div class="container">
          <h1><strong>404</strong> | Page Not Found</h1>
          <router-link :to="{ name: 'Home' }">← Home</router-link>
     </div>
</template>

<style scoped>
.container {
     width: 100%;
     background-color: #1c1c1c;
     min-height: 100vh;
     display: flex;
     flex-direction: column;
     gap: 25px;
     align-items: center;
     justify-content: center;
}

.container h1 {
     color: #fff;
     font-weight: 100;
     font-size: 25px;
}

.container a {
     text-decoration: none;
     color: #fff;
     transition: 300ms;
}

.container a:hover {
     color: #c2c2c2;
}
</style>
