<script setup lang="ts">
useSeoMeta({
  title: 'Blog – BizzMark',
  description: 'Gedanken, Tipps und Einblicke rund um digitales Marketing, Webdesign und Unternehmenskommunikation.',
})

const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Blog</h1>
        <p>Gedanken und Einblicke rund um digitales Marketing &amp; Webdesign.</p>
      </div>
    </section>

    <section class="section container">
      <div v-if="posts && posts.length > 0" class="blog-grid">
        <NuxtLink
          v-for="post in posts"
          :key="post.path"
          :to="post.path"
          class="blog-card"
          style="text-decoration:none"
        >
          <div class="blog-card__body">
            <p class="blog-card__meta">{{ post.date ? new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) : '' }}</p>
            <h2 class="blog-card__title">{{ post.title }}</h2>
            <p class="blog-card__excerpt">{{ post.description }}</p>
            <span class="blog-card__link">Weiterlesen →</span>
          </div>
        </NuxtLink>
      </div>
      <p v-else style="color: var(--muted, #6b7a8a)">Noch keine Beiträge vorhanden.</p>
    </section>
  </div>
</template>
