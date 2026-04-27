<script setup lang="ts">
useSeoMeta({
  title: 'BizzMark – Hier entsteht etwas Neues',
  description: 'Die neue Website der BizzMark UG (haftungsbeschränkt) ist in Kürze verfügbar.',
})
</script>

<template>
  <div class="under-construction">
    <img src="/Logo.svg" alt="BizzMark" class="uc-logo" />
    <h1>Under Construction</h1>
    <p>Hier finden Sie bald die neue Seite der BizzMark UG (haftungsbeschränkt).</p>
    <NuxtLink to="/contact" class="btn btn-primary">Kontakt aufnehmen</NuxtLink>
  </div>
</template>

<style scoped>
.under-construction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  gap: 1.25rem;
  padding: 3rem 1.5rem;
}

.uc-logo {
  height: 56px;
  width: auto;
}
</style>
