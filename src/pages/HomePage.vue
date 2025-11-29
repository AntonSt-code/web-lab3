<script setup>
</script>

<template>
  <section class="page">
    <h1 class="page__title">Hollow Knight Lorebook</h1>

    <p class="page__lead">
      Це невеликий SPA-довідник по босах всесвіту
      <strong>Hollow Knight</strong>, створений для лабораторної роботи №3
      з теми <em>«Vite + Vue 3 + Vue Router»</em>.
    </p>

    <div class="page__content">
      <h2>Структура застосунку</h2>
      <ul>
        <li>
          <strong>Головна</strong> — поточна сторінка з описом застосунку та технологій.
        </li>
        <li>
          <strong>Боси</strong> — список босів Hollow Knight із коротким описом.
        </li>
        <li>
          <strong>Деталі боса</strong> — окрема сторінка для кожного боса за адресою
          <code>/items/:id</code> з розширеним описом.
        </li>
      </ul>

      <h2>Використані технології</h2>
      <ul>
        <li>Vite — швидкий інструмент збірки для Vue 3.</li>
        <li>Vue 3 (Composition API) — для побудови компонентів.</li>
        <li>Vue Router — для організації SPA-навігації без перезавантаження сторінки.</li>
      </ul>

      <h2>Як працює SPA</h2>
      <p>
        Переходи між сторінками (<code>/</code>, <code>/items</code>,
        <code>/items/:id</code>) виконуються за допомогою
        <code>&lt;router-link&gt;</code> та <code>vue-router</code>,
        тому сторінка не перезавантажується повністю, а оновлюється лише вміст.
      </p>
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
  font-size: 2.3rem;
  margin-bottom: 1rem;
}

.page__lead {
  color: #ccc;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.page__content h2 {
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.page__content ul {
  padding-left: 1.25rem;
  margin-bottom: 0.75rem;
}

.page__content li {
  margin-bottom: 0.25rem;
}

code {
  background: #111;
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-size: 0.9rem;
}
</style>
