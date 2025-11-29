<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <p>© {{ year }} Лабораторна робота 3 — SPA на Vue 3 (Hollow Knight).</p>
      <p class="footer__note">
        Проєкт створено для навчальних цілей: Vite + Vue Router + Composition API.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #222;
  background: #050608;
  margin-top: 2rem;
}

.footer__inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  font-size: 0.85rem;
  color: #777;
}

.footer__note {
  margin-top: 0.25rem;
  color: #555;
}
</style>
