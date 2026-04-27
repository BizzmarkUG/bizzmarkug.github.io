<script setup lang="ts">
useSeoMeta({
  title: 'Kontakt – BizzMark',
  description: 'Nehmen Sie Kontakt mit BizzMark auf – wir freuen uns auf Ihre Anfrage.',
})

const { public: { staticFormsKey } } = useRuntimeConfig()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Kontakt</h1>
        <p>Wir freuen uns auf Ihre Nachricht.</p>
      </div>
    </section>

    <section class="section container">
      <div class="contact-box">
        <div class="contact-item">
          <span class="contact-item-label">📞 Telefon</span>
          <span class="contact-item-value"><a href="tel:+4991318117839">+49 9131 811 7839</a></span>
        </div>
        <div class="contact-item">
          <span class="contact-item-label">✉️ E-Mail</span>
          <span class="contact-item-value"><a href="mailto:info@bizzmark.io">info@bizzmark.io</a></span>
        </div>
        <div class="contact-item">
          <span class="contact-item-label">📍 Adresse</span>
          <span class="contact-item-value">Birkenweg 12, 91058 Erlangen</span>
        </div>
      </div>

      <hr />
      <h2>Schreiben Sie uns</h2>
      <p>Nutzen Sie unser Kontaktformular – wir melden uns in der Regel innerhalb eines Werktages.</p>

      <form
        action="https://api.staticforms.dev/submit"
        method="POST"
        class="contact-form"
      >
        <input type="hidden" name="apiKey" :value="staticFormsKey" />
        <input type="hidden" name="redirectTo" value="https://bizzmarkug.github.io/danke" />
        <!-- Honeypot gegen Spam -->
        <input type="text" name="honeypot" style="display:none" tabindex="-1" autocomplete="off" />

        <div class="form-group">
          <label for="name">Name *</label>
          <input id="name" v-model="form.name" type="text" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">E-Mail *</label>
          <input id="email" v-model="form.email" type="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="phone">Telefon</label>
          <input id="phone" v-model="form.phone" type="tel" name="phone" />
        </div>
        <div class="form-group">
          <label for="subject">Betreff</label>
          <input id="subject" v-model="form.subject" type="text" name="subject" placeholder="z. B. Website-Anfrage, Branding, ..." />
        </div>
        <div class="form-group">
          <label for="message">Nachricht *</label>
          <textarea id="message" v-model="form.message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Nachricht senden</button>
      </form>

      <p style="margin-top:1rem; font-size:0.85rem; color:#6b7a8a">
        Das Formular nutzt <a href="https://www.staticforms.dev" target="_blank" rel="noopener">StaticForms</a> als Backend.
      </p>
    </section>
  </div>
</template>

<style scoped>
.contact-box {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: baseline;
}

.contact-item-label {
  font-weight: 600;
  min-width: 120px;
  color: #1e4354;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 640px;
  margin-top: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e4354;
}

.form-group input,
.form-group textarea {
  padding: 0.6rem 0.9rem;
  border: 1.5px solid rgba(30, 67, 84, 0.25);
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color 0.2s;
  background: #fff;

  &:focus {
    outline: none;
    border-color: #ef4a26;
  }
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}
</style>
