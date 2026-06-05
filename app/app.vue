<script setup>
const route = useRoute();

const canonicalUrl = computed(() => {
  const baseUrl = "https://eainvitation.com";
  const path = route.path === "/" ? "" : route.path;
  return `${baseUrl}${path}`;
});

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `EA Invitation - ${titleChunk}`
      : "EA Invitation - Platform Undangan Pernikahan Digital Unik & Premium";
  },
  link: [
    {
      rel: "canonical",
      href: () => canonicalUrl.value,
    },
  ],
});

useSchemaOrg([
  defineOrganization({
    name: "EA Invitation",
    logo: "/logo.webp",
    sameAs: [
      "https://www.instagram.com/ea_invitation?igsh=NHMzdnIxdnZ3Ymlq",
      "https://www.tiktok.com/@ea_invitation?_r=1&_t=ZS-95BtHMlCBca",
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
