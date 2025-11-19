<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `EA Invitation - ${titleChunk}`
      : "EA Invitation - Platform Undangan Pernikahan Digital";
  },
});

// Schema Global: Memberitahu Google ini adalah Bisnis/Organisasi
useSchemaOrg([
  defineOrganization({
    name: "EA Invitation",
    logo: "/logo.png", // Pastikan ada file logo di folder public
    sameAs: [
      "https://instagram.com/erlan.azr_",
      "https://tiktok.com/@erlan.azr_",
      "https://wa.me/6282220633024", // Link WhatsApp
    ],
  }),
  defineWebSite({
    name: "EA Invitation",
  }),
]);
</script>

<template>
  <div class="font-primary">
    <NuxtPage />
  </div>
</template>
