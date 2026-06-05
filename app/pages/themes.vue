<script setup>
useSeoMeta({
  title: "Pilihan Desain Undangan Unik & Gak Pasaran",
  description:
    "Intip koleksi tema undangan pernikahan digital premium dari EA Invitation. Temukan deretan layout estetik, modern, dan penuh karakter yang siap bikin undangan pernikahanmu berkesan!",

  ogTitle: "EA Invitation - Pilihan Desain Undangan Unik & Gak Pasaran",
  ogDescription:
    "Cari template undangan web yang beda dari yang lain? Jelajahi galeri tema premium EA Invitation yang responsif, interaktif, dan mudah dimodifikasi sesuai konsep acaramu.",

  ogImage: "/og-image.webp",
  ogUrl: "https://eainvitation.com/themes",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://eainvitation.com/themes",
    },
  ],
});
</script>

<template>
  <div class="bg-light dark:bg-dark">
    <NuxtLayout>
      <Themes />
    </NuxtLayout>
  </div>
</template>
