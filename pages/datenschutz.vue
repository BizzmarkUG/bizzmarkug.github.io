<script setup lang="ts">
useSeoMeta({
  title: 'Datenschutz – BizzMark',
  description: 'Datenschutzerklärung der BizzMark UG (haftungsbeschränkt).',
})

const consent = useCookie<'accepted' | 'declined' | null>('bizzmark-consent')

function revokeConsent() {
  consent.value = null
}
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Datenschutzerklärung</h1>
        <p>Informationen zum Umgang mit Ihren personenbezogenen Daten.</p>
      </div>
    </section>

    <section class="section container">
      <div class="prose">
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>

        <h3>Datenerfassung auf unserer Website</h3>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
          können Sie dem <NuxtLink to="/impressum">Impressum</NuxtLink> dieser Website entnehmen.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA)
          gehostet. Details entnehmen Sie der
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von GitHub</a>.
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
          Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerklärung.
        </p>

        <h3>Verantwortliche Stelle</h3>
        <p>
          Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
          BizzMark UG (haftungsbeschränkt)<br />
          Birkenweg 12, 91058 Erlangen<br />
          <a href="mailto:info@bizzmark.io">info@bizzmark.io</a>
        </p>

        <h2>4. Datenerfassung auf unserer Website</h2>
        <h3>Cookies</h3>
        <p>
          Diese Website setzt ein funktionelles Cookie (<code>bizzmark-consent</code>), das Ihre
          Einwilligungsentscheidung zum Thema Tracking speichert (Gültigkeit: 1 Jahr). Tracking-Cookies
          (Google Analytics 4) werden ausschließlich gesetzt, wenn Sie im Cookie-Hinweis zustimmen.
        </p>

        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
          Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion,
          verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage,
          IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
        </p>

        <h2>5. Google Analytics 4</h2>
        <p>
          Diese Website verwendet Google Analytics 4 (GA4), einen Webanalysedienst der Google LLC,
          1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA. GA4 erfasst anonymisierte Nutzungsdaten
          (Seitenaufrufe, Verweildauer, Herkunft). Die Verarbeitung erfolgt auf Servern von Google;
          IP-Adressen werden vor der Speicherung anonymisiert.
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Google Analytics
          wird ausschließlich nach Ihrer ausdrücklichen Zustimmung über den Cookie-Hinweis aktiviert.
        </p>
        <p>
          <strong>Einwilligung widerrufen:</strong> Sie können Ihre Einwilligung jederzeit mit Wirkung
          für die Zukunft widerrufen. Klicken Sie dazu auf die Schaltfläche unten – der Cookie-Hinweis
          wird erneut angezeigt und Google Analytics wird nicht mehr geladen.
        </p>
        <button class="btn btn-outline" style="margin-bottom: 1.5rem;" @click="revokeConsent">
          Cookie-Einstellungen ändern / Einwilligung widerrufen
        </button>
        <p>
          Weitere Informationen:
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Google</a>,
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out-Browser-Add-on</a>.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten,
          deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
          an uns wenden: <a href="mailto:info@bizzmark.io">info@bizzmark.io</a>.
        </p>
      </div>
    </section>
  </div>
</template>
