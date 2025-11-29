<script setup>
import { RouterLink } from 'vue-router';
import { items } from '../data/items';
</script>

<template>
  <section class="page">
    <h1 class="page__title">Боси Hollow Knight</h1>
    <p class="page__subtitle">
      Це невеликий довідник по ключових босах світу Hallownest.
      Оберіть боса зі списку, щоб переглянути детальну інформацію.
    </p>

    <div class="items-grid">
      <article
        v-for="item in items"
        :key="item.id"
        class="item-card"
      >
        <img
          v-if="item.image"
          :src="item.image"
          :alt="item.title"
          class="item-card__image"
        />

        <h2 class="item-card__title">{{ item.title }}</h2>
        <p class="item-card__description">
          {{ item.description }}
        </p>

        <RouterLink
          :to="`/items/${item.id}`"
          class="item-card__link"
        >
          Детальніше →
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.page {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
}

.page__title {
  font-size: 2.1rem;
  margin-bottom: 0.5rem;
}

.page__subtitle {
  color: #888;
  margin-bottom: 1.5rem;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.item-card {
  background: #111;
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid #333;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.item-card__image {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 0.75rem;
}

.item-card__title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.item-card__description {
  flex-grow: 1;
  color: #bbb;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.item-card__link {
  align-self: flex-start;
  font-weight: 600;
  text-decoration: none;
  color: #7cc2ff;
}

.item-card__link:hover {
  text-decoration: underline;
}
</style>
