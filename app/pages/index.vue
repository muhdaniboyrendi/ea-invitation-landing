<script setup>
useSeoMeta({
  title: "Undangan Pernikahan Digital Modern dengan Desain Anti-mainstream",
  description:
    "Bikin undangan pernikahan digital sendiri di EA Invitation. Tema dengan desain berbeda dari kebanyakan dan mudah diedit.",

  ogTitle:
    "EA Invitation - Undangan Pernikahan Digital Modern dengan Desain Anti-mainstream",
  ogDescription:
    "Buat undangan pernikahan digital dengan tema yang berbeda dari biasanya. Lengkap dengan RSVP otomatis, kado digital, dan QR code check-in.",

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
      "Layanan untuk membuat undangan pernikahan digital berbasis web, dengan tema desain yang berbeda dari kebanyakan dan fitur interaktif seperti RSVP dan check-in.",
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

    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "4.9",
    //   reviewCount: "150",
    // },
    // review: [
    //   {
    //     "@type": "Review",
    //     author: { "@type": "Person", name: "Erlan Azhari" },
    //     reviewRating: { "@type": "Rating", ratingValue: "5" },
    //     reviewBody:
    //       "Fiturnya lengkap dan gampang digunakan. Desainnya juga beda dari undangan digital kebanyakan.",
    //   },
    // ],
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
