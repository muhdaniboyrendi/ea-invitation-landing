<script setup>
useSeoMeta({
  title: "EA Invitation - Tutorial Pembuatan Undangan",
  description:
    "Tutorial lengkap langkah demi langkah untuk membuat undangan pernikahan digital di EA Invitation.",
  ogTitle: "EA Invitation - Tutorial Pembuatan Undangan",
  ogDescription:
    "Tutorial lengkap langkah demi langkah untuk membuat undangan pernikahan digital di EA Invitation.",
  ogImage: "/og.png",
  ogUrl: "/",
  twitterCard: "summary_large_image",
  twitterTitle: "EA Invitation - Tutorial Pembuatan Undangan",
  twitterDescription:
    "Tutorial lengkap langkah demi langkah untuk membuat undangan pernikahan digital di EA Invitation.",
  twitterImage: "/og.png",
});

useSchemaOrg([
  {
    "@type": "WebSite",
    name: "EA Invitation",
    url: "/",
    potentialAction: {
      "@type": "SearchAction",
      target: "/themes?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@type": "Organization",
    name: "EA Invitation",
    url: "/",
    logo: "/favicon.png",
    sameAs: [
      "https://instagram.com/ea.invitation",
      "https://tiktok.com/ea.invitation",
    ],
  },
]);
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <Tutorial />
    </NuxtLayout>
  </div>
</template>
