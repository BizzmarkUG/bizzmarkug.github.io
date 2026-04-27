<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ClientOnly>
      <ConsentBanner />
    </ClientOnly>
  </div>
</template>
