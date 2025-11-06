<script setup>
useSeoMeta({
  title: "EA Invitation - Koleksi Tema Undangan",
  description:
    "Berbagai macam pilihan tema desain undangan pernikahan dengan desain yang anti mainstream, modern, dan interaktif.",
  ogTitle: "EA Invitation - Koleksi Tema Undangan",
  ogDescription:
    "Berbagai macam pilihan tema desain undangan pernikahan dengan desain yang anti mainstream, modern, dan interaktif.",
  ogImage: "/og.png",
  ogUrl: "/",
  twitterCard: "summary_large_image",
  twitterTitle: "EA Invitation - Koleksi Tema Undangan",
  twitterDescription:
    "Berbagai macam pilihan tema desain undangan pernikahan dengan desain yang anti mainstream, modern, dan interaktif.",
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
      <Themes />
    </NuxtLayout>
  </div>
</template>
