<script setup>
const { themes } = storeToRefs(useThemeStore());

useSeoMeta({
  title: "Katalog Tema Undangan Premium",
  description:
    "Pilih dari tema undangan pernikahan digital estetik. Minimalis, Floral, Adat, dan Modern.",
});

// Membuat OG Image Dinamis
defineOgImageComponent("NuxtSeo", {
  title: "Koleksi Tema Premium",
  description: "Temukan desain undangan yang cocok dengan gayamu.",
  theme: "#1c98ed", // Warna brand (misal: pink/purple)
  colorMode: "dark",
});
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <Themes />
    </NuxtLayout>
  </div>
</template>
