<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
</script>

<template>
  <div class="layout">
    <AppHeader />

    <main class="layout__main">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #050509;
  color: #f3f3f3;
}

.layout__main {
  flex: 1 0 auto;
}
</style>
