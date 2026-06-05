<script setup>
useSeoMeta({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi EA Invitation menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda secara aman saat menggunakan layanan undangan digital kami.",

  ogTitle: "EA Invitation - Kebijakan Privasi",
  ogDescription:
    "Kebijakan Privasi EA Invitation menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda secara aman saat menggunakan layanan undangan digital kami.",
  ogImage: "/og-image.webp",
  ogUrl: "https://eainvitation.com/privacy-policy",
  ogSiteName: "EA Invitation",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://eainvitation.com/privacy-policy",
    },
  ],
});

useSchemaOrg([
  defineWebPage({
    "@id": "https://eainvitation.com/privacy-policy",
    name: "Kebijakan Privasi - EA Invitation",
    description:
      "Kebijakan Privasi EA Invitation menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda secara aman.",
    inLanguage: "id-ID",
    dateModified: "2026-01-27",
  }),
]);
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <PrivacyPolicy />
    </NuxtLayout>
  </div>
</template>
