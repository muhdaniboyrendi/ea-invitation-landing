<script setup>
useSeoMeta({
  title: "Daftar Harga dan Paket Undangan",
  description:
    "Lihat daftar harga dan paket undangan pernikahan digital yang tersedia di EA Invitation.",
  ogTitle: "EA Invitation - Daftar Harga dan Paket Undangan",
  ogDescription:
    "Lihat daftar harga dan paket undangan pernikahan digital yang tersedia di EA Invitation.",
  ogImage: "/og-image.webp",
  ogUrl: "https://eainvitation.com/pricing",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://eainvitation.com/pricing'
    }
  ]
})
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <Pricing />
    </NuxtLayout>
  </div>
</template>