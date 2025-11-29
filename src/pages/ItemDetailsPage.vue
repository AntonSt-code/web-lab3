<script setup>
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { items } from '../data/items';

const route = useRoute();

const itemId = computed(() => Number(route.params.id));

const item = computed(() =>
  items.find((i) => i.id === itemId.value)
);
</script>

<template>
  <section class="page">
    <RouterLink to="/items" class="back-link">
      ← Повернутися до списку босів
    </RouterLink>

    <div v-if="item" class="item">
      <h1 class="item__title">{{ item.title }}</h1>

      <img
        v-if="item.image"
        :src="item.image"
        :alt="item.title"
        class="item__image"
      />

      <p class="item__description">
        {{ item.description }}
      </p>

      <div class="item__content">
        <pre>{{ item.content }}</pre>
      </div>
    </div>

    <div v-else class="item item--not-found">
      <h1>Боса не знайдено</h1>
      <p>Можливо, ID в адресному рядку невірний.</p>
    </div>
  </section>
</template>

<style scoped>
.page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
}

.back-link {
  display: inline-block;
  margin-bottom: 1rem;
  color: #7cc2ff;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}

.item__title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.item__image {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.item__description {
  color: #bbb;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.item__content pre {
  white-space: pre-wrap;
  font-family: inherit;
  font-size: 0.98rem;
  line-height: 1.6;
}

.item--not-found {
  text-align: center;
  margin-top: 3rem;
}
</style>
