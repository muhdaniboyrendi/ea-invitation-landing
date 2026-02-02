<script setup>
useSeoMeta({
  title: "Undangan Pernikahan Digital Modern & Interaktif",
  description:
    "EA Invitation adalah platform undangan pernikahan digital berbasis web dengan berbagai tema yang modern dan interaktif. Berbagai fitur lengkap untuk membuat undangan pernikahan impianmu.",
  ogTitle: "EA Invitation - Undangan Pernikahan Digital Modern & Interaktif",
  ogDescription:
    "Buat undangan pernikahan digital berbasis website dengan berbagai tema modern dan interaktif serta fitur lengkap.",
  ogImage: "/og-image.webp",
  ogUrl: "https://eainvitation.com/",
  ogSiteName: "EA Invitation",
  twitterCard: 'summary_large_image',
});

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://eainvitation.com/'
    }
  ]
})

useSchemaOrg([
  defineSoftwareApp({
    name: "EA Invitation",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "100000",
      priceCurrency: "IDR",
    },
  }),
]);
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <Hero />
      <Greeting />
      <Features />
      <Package />
      <ThemesHome />
      <Faq />
    </NuxtLayout>
  </div>
</template>