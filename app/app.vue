<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `EA Invitation - ${titleChunk}`
      : "EA Invitation - Platform Undangan Pernikahan Digital Modern & Interaktif";
  },
});

// Schema Global: Memberitahu Google ini adalah Bisnis/Organisasi
useSchemaOrg([
  defineOrganization({
    name: "EA Invitation",
    logo: "/logo.webp", // Pastikan ada file logo di folder public
    sameAs: [
      "https://www.instagram.com/ea_invitation?igsh=NHMzdnIxdnZ3Ymlq",
      "https://tiktok.com/@erlan.azr_",
      "https://wa.me/6282220633024",
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
