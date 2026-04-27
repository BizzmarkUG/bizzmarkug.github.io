<template>
  <div class="site-wrapper">
    <header class="navbar" :class="{ scrolled }">
      <div class="navbar-inner container">
        <NuxtLink to="/" class="navbar-brand">
          <img src="/Logo.svg" alt="BizzMark Logo" class="navbar-logo" />
        </NuxtLink>
        <nav class="navbar-nav" :class="{ open: menuOpen }" aria-label="Hauptnavigation">
          <NuxtLink to="/" class="nav-link" @click="menuOpen = false">Startseite</NuxtLink>
          <NuxtLink to="/ueber-uns" class="nav-link" @click="menuOpen = false">Über uns</NuxtLink>
          <NuxtLink to="/blog" class="nav-link" @click="menuOpen = false">Blog</NuxtLink>
          <NuxtLink to="/impressum" class="nav-link" @click="menuOpen = false">Impressum</NuxtLink>
        </nav>
        <div class="navbar-actions">
          <a href="mailto:info@bizzmark.io" class="nav-cta" aria-label="E-Mail senden">
            Kontakt
          </a>
          <button
            class="navbar-burger"
            :aria-expanded="menuOpen"
            aria-label="Menü öffnen"
            @click="menuOpen = !menuOpen"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>

    <main class="main-content">
      <slot />
    </main>

    <footer class="site-footer">
      <div class="footer-inner container">
        <div class="footer-brand">
          <img src="/Logo.svg" alt="BizzMark" class="footer-logo" />
          <p>BizzMark UG (haftungsbeschränkt)<br />Ihr Partner für digitale Lösungen.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <span class="footer-col-title">Seiten</span>
            <NuxtLink to="/">Startseite</NuxtLink>
            <NuxtLink to="/ueber-uns">Über uns</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </div>
          <div class="footer-col">
            <span class="footer-col-title">Kontakt</span>
            <a href="tel:+4991318117839">+49 9131 811 7839</a>
            <a href="mailto:info@bizzmark.io">info@bizzmark.io</a>
            <span>Birkenweg 12, 91058 Erlangen</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom container">
        <span>© {{ currentYear }} BizzMark UG (haftungsbeschränkt)</span>
        <nav class="footer-legal" aria-label="Rechtliches">
          <NuxtLink to="/impressum">Impressum</NuxtLink>
          <NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const scrolled = ref(false)
const currentYear = ref(2026)

onMounted(() => {
  currentYear.value = new Date().getFullYear()
  const onScroll = () => { scrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>
