<script setup>
useSeoMeta({
  title: "Buat Undangan Pernikahan Digital dalam Hitungan Menit",
  description:
    "Platform SaaS terbaik untuk membuat undangan pernikahan digital. Tema premium, fitur lengkap, dan harga terjangkau.",
  ogTitle: "EA Invitation - Platform Undangan Pernikahan Digital",
  ogDescription: "Buat undangan pernikahan impianmu sekarang.",
  ogImage: "/og-image.png", // Siapkan gambar banner promosi ukuran 1200x630
});

// Schema Khusus SaaS (SoftwareApplication)
useSchemaOrg([
  defineSoftwareApp({
    name: "EA Invitation",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "100000", // Contoh harga terendah
      priceCurrency: "IDR",
    },
    aggregateRating: {
      ratingValue: "4.8",
      ratingCount: "120", // Bisa diambil dinamis dari database testimoni
    },
  }),
]);
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <Hero />
      <Features />
      <Package />
      <ThemesHome />
      <Faq />
    </NuxtLayout>
  </div>
</template>
