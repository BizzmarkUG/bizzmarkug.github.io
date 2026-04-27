<script setup lang="ts">
const consent = useCookie<'accepted' | 'declined' | null>('bizzmark-consent', {
  default: () => null,
  maxAge: 60 * 60 * 24 * 365, // 1 Jahr
  sameSite: 'lax',
})

const { initialize } = useGtag()

const showBanner = computed(() => consent.value === null)

function accept() {
  consent.value = 'accepted'
  initialize()
}

function decline() {
  consent.value = 'declined'
}

onMounted(() => {
  if (consent.value === 'accepted') {
    initialize()
  }
})
</script>

<template>
  <Transition name="slide-up">
    <div
      v-if="showBanner"
      class="consent-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einwilligung"
    >
      <div class="consent-inner container">
        <p class="consent-text">
          Wir nutzen <strong>Google Analytics 4</strong>, um die Nutzung unserer Website zu analysieren und zu
          verbessern. Daten werden erst nach Ihrer Zustimmung erhoben. Mehr dazu in unserer
          <NuxtLink to="/datenschutz" class="consent-link">Datenschutzerklärung</NuxtLink>.
        </p>
        <div class="consent-actions">
          <button class="btn btn-primary" @click="accept">Zustimmen</button>
          <button class="btn btn-outline consent-decline" @click="decline">Ablehnen</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.consent-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #1e4354;
  color: #fff;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.25);
}

.consent-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem 1rem;
}

@media (min-width: 640px) {
  .consent-inner {
    flex-direction: row;
    align-items: center;
  }
}

.consent-text {
  flex: 1;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
}

.consent-link {
  color: #f46e44;
  text-decoration: underline;
}

.consent-actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.consent-decline {
  color: #fff !important;
  border-color: rgba(255, 255, 255, 0.7) !important;
}
.consent-decline:hover {
  background: rgba(255, 255, 255, 0.15) !important;
  color: #fff !important;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
