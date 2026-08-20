<script setup>
useSeoMeta({
  title: "Tema Undangan Pernikahan Digital",
  description:
    "Koleksi tema undangan pernikahan digital dari EA Invitation. Dari gaya Instagram, budaya tradisional, sampai tampilan Windows 11 — pilih yang paling cocok dengan konsep pernikahanmu.",

  ogTitle: "EA Invitation - Tema Undangan Pernikahan Digital",
  ogDescription:
    "Jelajahi tema undangan digital EA Invitation dengan desain yang berbeda dari kebanyakan, mudah disesuaikan dengan konsep acaramu.",

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
