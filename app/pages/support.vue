<script setup>
useSeoMeta({
  title: "EA Invitation - Bantuan",
  description:
    "Bantuan mengenai platform undangan pernikahan digital EA Invitation.",
  ogTitle: "EA Invitation - Bantuan",
  ogDescription:
    "Bantuan mengenai platform undangan pernikahan digital EA Invitation.",
  ogImage: "/og.png",
  ogUrl: "/",
  twitterCard: "summary_large_image",
  twitterTitle: "EA Invitation - Bantuan",
  twitterDescription:
    "Bantuan mengenai platform undangan pernikahan digital EA Invitation.",
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
      <Support />
    </NuxtLayout>
  </div>
</template>
