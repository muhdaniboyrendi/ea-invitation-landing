<!-- pages/privacy-policy.vue -->
<script setup>
useSeoMeta({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi eainvitation.com menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat menggunakan layanan undangan digital kami.",
  ogTitle: "Kebijakan Privasi - EA Invitation",
  ogDescription:
    "Kebijakan Privasi eainvitation.com menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat menggunakan layanan undangan digital kami.",
  ogImage: "/og-image.webp",
  ogUrl: "https://eainvitation.com/privacy-policy",
  ogSiteName: "EA Invitation",
  twitterCard: 'summary_large_image',
});

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://eainvitation.com/privacy-policy'
    }
  ]
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://eainvitation.com/privacy-policy',
    name: 'Kebijakan Privasi',
    description:
      'Kebijakan Privasi eainvitation.com menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda.',
    dateModified: '2026-01-27',
    inLanguage: 'id-ID',
    isPartOf: {
      '@type': 'WebSite',
      name: 'eainvitation.com',
      url: 'https://eainvitation.com',
    },
  },
])
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <PrivacyPolicy />
    </NuxtLayout>
  </div>
</template>
