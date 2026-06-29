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
    brand: {
      "@type": "Brand",
      name: "EA Invitation",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IDR",
      priceValidUntil: "2026-06-29",
      availability: "https://schema.org/InStock",

      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "IDR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "ID",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            maxValue: 0,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            maxValue: 0,
            unitCode: "DAY",
          },
        },
      },

      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "ID",
        returnPolicyCategory: "https://schema.org/UnsupportedReturnPolicy",
        merchantReturnDays: 0,
        returnFees: "https://schema.org/FreeReturn",
      },
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Erlan Azhari" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Platform undangan digital yang sangat mudah digunakan, fiturnya lengkap, dan desainnya sangat modern.",
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
