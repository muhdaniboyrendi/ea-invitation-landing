<script setup>
useSeoMeta({
  title: "Platform Undangan Pernikahan Digital Unik & Premium",
  description:
    "Bosan dengan template undangan digital sejuta umat? Bikin undangan pernikahan web kamu sendiri di EA Invitation. Banyak pilihan desain anti-mainstream, gampang, instan, dan bebas kuota tamu!",

  ogTitle: "EA Invitation - Undangan Pernikahan Digital Unik & Premium",
  ogDescription:
    "Bikin undangan pernikahan digital web yang estetik dan anti-mainstream dengan mudah. Fitur premium terlengkap: RSVP otomatis, gift digital, hingga QR code check-in.",

  ogImage: "/og-image.webp",
  ogUrl: "https://eainvitation.com/",
  ogSiteName: "EA Invitation",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://eainvitation.com/",
    },
  ],
});

useSchemaOrg([
  defineSoftwareApp({
    name: "EA Invitation",
    description:
      "Software-as-a-Service (SaaS) untuk pembuatan undangan pernikahan digital berbasis web dengan desain modern dan fitur interaktif.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IDR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Muhdani Boyrendi",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Platform undangan digital yang sangat mudah digunakan, fiturnya lengkap, dan desainnya sangat modern dan unik.",
      },
    ],
  }),
]);
</script>

<template>
  <NuxtLayout>
    <Hero />
    <Greeting />
    <!-- <SocialProof /> -->
    <Features />
    <HowTo />
    <ThemesHome />
    <Package />
    <Faq />
  </NuxtLayout>
</template>
