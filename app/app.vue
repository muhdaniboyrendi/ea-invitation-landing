<script setup>
const route = useRoute()
const config = useRuntimeConfig()

// Generate canonical URL dinamis
const canonicalUrl = computed(() => {
  const baseUrl = 'https://eainvitation.com'
  const path = route.path
  return `${baseUrl}${path}`
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `EA Invitation - ${titleChunk}`
      : "EA Invitation - Platform Undangan Pernikahan Digital Modern & Interaktif";
  },
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl
    }
  ]
});

// Schema Global
useSchemaOrg([
  defineOrganization({
    name: "EA Invitation",
    logo: "/logo.webp",
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