<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(
  `blog-${route.path}`,
  () => queryCollection('blog').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Beitrag nicht gefunden' })
}

useSeoMeta({
  title: () => `${post.value?.title ?? ''} – BizzMark Blog`,
  description: () => post.value?.description ?? '',
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p style="color:rgba(255,255,255,.6); font-size:0.85rem; margin-bottom:0.5rem">
          {{ post?.date ? new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) : '' }}
        </p>
        <h1>{{ post?.title }}</h1>
        <p v-if="post?.description">{{ post.description }}</p>
      </div>
    </section>

    <section class="section container">
      <div class="prose">
        <ContentRenderer v-if="post" :value="post" />
      </div>
      <div style="margin-top:3rem">
        <NuxtLink to="/blog" class="btn btn-outline">← Zurück zum Blog</NuxtLink>
      </div>
    </section>
  </div>
</template>
