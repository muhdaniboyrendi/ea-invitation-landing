<script setup>
useHead({
  title: "EA Invitation - Tutorial Pembuatan Undangan",
  meta: [
    {
      name: "description",
      content:
        "Buat undangan pernikahan digital yang elegan dan interaktif dengan EA Invitation. Berbagai tema menarik, fitur lengkap, dan harga terjangkau. Mulai dari Rp 100.000!",
    },
    {
      name: "keywords",
      content:
        "undangan pernikahan digital, undangan online, wedding invitation, undangan nikah, undangan digital murah, template undangan",
    },
    {
      name: "author",
      content: "EA Invitation",
    },
    {
      name: "robots",
      content: "index, follow",
    },

    // Open Graph Meta Tags
    {
      property: "og:title",
      content: "EA Invitation - Tutorial Pembuatan Undangan",
    },
    {
      property: "og:description",
      content:
        "Buat undangan pernikahan digital yang elegan dan interaktif dengan EA Invitation. Berbagai tema menarik, fitur lengkap, dan harga terjangkau.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://ea-invitation-landing.vercel.app",
    },
    {
      property: "og:image",
      content: "https://ea-invitation-landing.vercel.app/og.png",
    },
    {
      property: "og:site_name",
      content: "EA Invitation",
    },
    {
      property: "og:locale",
      content: "id_ID",
    },

    // Twitter Card Meta Tags
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "EA Invitation - Website Undangan Pernikahan Digital",
    },
    {
      name: "twitter:description",
      content:
        "Buat undangan pernikahan digital yang elegan dan interaktif dengan EA Invitation.",
    },
    {
      name: "twitter:image",
      content: "https://ea-invitation-landing.vercel.app/og.png",
    },

    // Additional SEO Meta Tags
    {
      name: "geo.region",
      content: "ID",
    },
    {
      name: "geo.country",
      content: "Indonesia",
    },
    {
      name: "language",
      content: "Indonesian",
    },
  ],

  link: [
    {
      rel: "canonical",
      href: "https://ea-invitation-landing.vercel.app",
    },
    {
      rel: "alternate",
      hreflang: "id",
      href: "https://ea-invitation-landing.vercel.app",
    },
  ],
});

// Schema Markup untuk Homepage
useSchemaOrg([
  defineOrganization({
    name: "EA Invitation",
    url: "https://ea-invitation-landing.vercel.app",
    logo: "https://ea-invitation-landing.vercel.app/og.png",
    description:
      "Penyedia layanan undangan pernikahan digital terbaik di Indonesia",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Indonesia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@ea-invitation.com",
    },
  }),

  // defineWebsite({
  //   name: 'EA Invitation',
  //   url: 'https://ea-invitation-landing.vercel.app',
  //   description: 'Website undangan pernikahan digital yang elegan dan interaktif',
  //   inLanguage: 'id',
  //   potentialAction: {
  //     '@type': 'SearchAction',
  //     target: 'https://ea-invitation-landing.vercel.app/search?q={search_term_string}',
  //     'query-input': 'required name=search_term_string'
  //   }
  // }),

  // defineService({
  //   name: 'Undangan Pernikahan Digital',
  //   description: 'Layanan pembuatan undangan pernikahan digital yang elegan dan interaktif',
  //   provider: {
  //     '@type': 'Organization',
  //     name: 'EA Invitation'
  //   },
  //   areaServed: 'Indonesia',
  //   serviceType: 'Digital Wedding Invitation Service'
  // })
]);
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <Demo />
    </NuxtLayout>
  </div>
</template>
