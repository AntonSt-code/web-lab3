<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink to="/" class="header__logo">
        Hollow Knight Lorebook
      </RouterLink>

      <nav class="header__nav">
        <RouterLink
          to="/"
          class="header__link"
          active-class="header__link--active"
          exact-active-class="header__link--active"
        >
          Головна
        </RouterLink>

        <RouterLink
          to="/items"
          class="header__link"
          active-class="header__link--active"
        >
          Боси
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid #222;
  background: #050608;
}

.header__inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  font-weight: 700;
  text-decoration: none;
  color: #e5f0ff;
}

.header__nav {
  display: flex;
  gap: 1rem;
}

.header__link {
  text-decoration: none;
  color: #aaa;
  font-size: 0.95rem;
}

.header__link--active,
.header__link:hover {
  color: #7cc2ff;
}
</style>
