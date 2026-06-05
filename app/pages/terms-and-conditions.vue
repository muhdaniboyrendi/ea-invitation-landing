<script setup>
useSeoMeta({
  title: "Syarat dan Ketentuan Layanan",
  description:
    "Syarat dan ketentuan penggunaan layanan EA Invitation untuk pembuatan undangan pernikahan digital. Pelajari hak, batasan, dan kewajiban Anda sebagai pengguna platform kami.",

  ogTitle: "EA Invitation - Syarat dan Ketentuan Layanan",
  ogDescription:
    "Syarat dan ketentuan penggunaan layanan EA Invitation untuk pembuatan undangan pernikahan digital. Pelajari hak, batasan, dan kewajiban Anda sebagai pengguna platform kami.",
  ogImage: "/og-image.webp",
  ogUrl: "https://eainvitation.com/terms-and-conditions",
  ogSiteName: "EA Invitation",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://eainvitation.com/terms-and-conditions",
    },
  ],
});

useSchemaOrg([
  defineWebPage({
    "@id": "https://eainvitation.com/terms-and-conditions",
    name: "Syarat dan Ketentuan Layanan - EA Invitation",
    description:
      "Syarat dan ketentuan penggunaan layanan EA Invitation untuk pembuatan undangan pernikahan digital. Pelajari hak, batasan, dan kewajiban Anda sebagai pengguna platform kami.",
    inLanguage: "id-ID",
    dateModified: "2026-01-27",
  }),
]);
</script>

<template>
  <div class="bg-light dark:bg-dark">
    <NuxtLayout>
      <TermsAndConditions />
    </NuxtLayout>
  </div>
</template>
