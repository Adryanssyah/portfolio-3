<script setup></script>

<template>
     <div class="loading">
          <div class="wrapper">
               <span></span>
          </div>
     </div>
</template>

<style scoped>
.loading {
     position: fixed;
     top: 0;
     right: 0;
     width: 100%;
     height: 100vh;
     background-color: #1c1c1c;
     z-index: 1000;
     display: flex;
     align-items: center;
     justify-content: center;
     color: #fff;
     font-size: 25px;
     font-family: FoundersGrotesk;
}

.wrapper {
     width: 100px;
     height: 10px;
     overflow: hidden;
     position: relative;
}

.wrapper span {
     position: absolute;
     height: 3px;
     width: 100%;
     border-radius: 3px;
     background-color: #fff;
     animation: slido 1s ease-in-out infinite;
     transform-origin: center;
}

@keyframes slido {
     0% {
          transform: scaleX(0);
     }
     50% {
          transform: scaleX(1);
     }
     100% {
          transform: scaleX(0);
     }
}

.slide-enter-active,
.slide-leave-active {
     transition: transform 500ms ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
     transform: translateY(-100%);
     transition: all 500ms ease-in-out 0s;
}
</style>
