<script setup>
const { themes } = storeToRefs(useThemeStore());

useSeoMeta({
  title: "Katalog Tema Undangan Premium",
  description:
    "Pilih dari tema undangan pernikahan digital estetik. Minimalis, Floral, Adat, dan Modern.",
});
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <Themes />
    </NuxtLayout>
  </div>
</template>
