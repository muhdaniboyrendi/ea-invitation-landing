<!-- pages/terms.vue -->
<script setup>
useSeoMeta({
  title: "Syarat dan Ketentuan",
  description:
    "Syarat dan ketentuan penggunaan layanan EA Invitation untuk membuat undangan pernikahan digital. Pelajari hak dan kewajiban Anda sebagai pengguna.",
  ogTitle: "Syarat dan Ketentuan - EA Invitation",
  ogDescription:
    "Syarat dan ketentuan penggunaan layanan EA Invitation untuk membuat undangan pernikahan digital. Pelajari hak dan kewajiban Anda sebagai pengguna.",
  ogImage: "/og-image.webp",
  ogUrl: "https://eainvitation.com/terms-and-conditions",
  ogSiteName: "EA Invitation",
  twitterCard: 'summary_large_image',
});

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://eainvitation.com/terms-and-conditions',
    name: 'Syarat dan Ketentuan',
    description:
      'Syarat dan ketentuan penggunaan layanan EA Invitation untuk membuat undangan pernikahan digital. Pelajari hak dan kewajiban Anda sebagai pengguna.',
    dateModified: '2026-01-27',
    inLanguage: 'id-ID',
  },
])
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <TermsAndConditions />
    </NuxtLayout>
  </div>
</template>
