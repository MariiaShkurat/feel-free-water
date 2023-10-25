<template>
  <headerComponent />
  <fixedPanel />
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>

  <footerComponent />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
import FixedPanel from '@/components/FixedPanel.vue'
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
