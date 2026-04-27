<script setup lang="ts">
useSeoMeta({
  title: 'Vielen Dank – BizzMark',
  description: 'Ihre Nachricht wurde erfolgreich übermittelt.',
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Vielen Dank!</h1>
        <p>Ihre Nachricht ist bei uns eingegangen.</p>
      </div>
    </section>

    <section class="section container" style="text-align:center">
      <div style="font-size:3rem; margin-bottom:1.5rem">✅</div>
      <h2>Wir haben Ihre Anfrage erhalten.</h2>
      <p style="max-width:520px; margin-inline:auto; margin-bottom:2rem">
        Wir melden uns in der Regel innerhalb eines Werktages bei Ihnen. Bis dahin – schauen Sie gerne in unserem Blog vorbei.
      </p>
      <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap">
        <NuxtLink to="/" class="btn btn-primary">Zur Startseite</NuxtLink>
        <NuxtLink to="/blog" class="btn btn-outline">Zum Blog</NuxtLink>
      </div>
    </section>
  </div>
</template>
