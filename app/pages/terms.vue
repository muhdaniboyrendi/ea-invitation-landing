<script setup>
useSeoMeta({
  title: "EA Invitation - Syarat dan Ketentuan",
  description:
    "Syarat dan ketentuan pembuatan undangan pernikahan digital EA Invitation.",
  ogTitle: "EA Invitation - Syarat dan Ketentuan",
  ogDescription:
    "Syarat dan ketentuan pembuatan undangan pernikahan digital EA Invitation.",
  ogImage: "/og-image.png",
  ogUrl: "/",
  twitterCard: "summary_large_image",
  twitterTitle: "EA Invitation - Syarat dan Ketentuan",
  twitterDescription:
    "Syarat dan ketentuan pembuatan undangan pernikahan digital EA Invitation.",
  twitterImage: "/og-image.png",
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
    logo: "/favicon.ico",
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
      <TermsAndConditions />
    </NuxtLayout>
  </div>
</template>
