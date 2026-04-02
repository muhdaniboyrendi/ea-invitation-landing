<script setup>
useSeoMeta({
  title: "Katalog Tema Undangan",
  description:
    "Koleksi tema undangan pernikahan digital modern dan interaktif yang bisa Anda pilih.",
  ogTitle: "EA Invitation - Katalog Tema Undangan",
  ogDescription:
    "Koleksi tema undangan pernikahan digital modern dan interaktif yang bisa Anda pilih.",
  ogImage: "/og-image.webp",
  ogUrl: "https://eainvitation.com/themes",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://eainvitation.com/themes'
    }
  ]
})
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <Themes />
    </NuxtLayout>
  </div>
</template>