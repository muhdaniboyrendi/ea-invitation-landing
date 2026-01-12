<script setup>
useSeoMeta({
  title: "Tutorial Membuat Undangan Pernikahan Digital",
  description:
    "Pelajari cara membuat, mengedit, dan menyebarkan undangan pernikahan digital Anda menggunakan EA Invitation.",
  ogTitle: "EA Invitation - Tutorial Membuat Undangan Pernikahan Digital",
  ogDescription:
    "Pelajari cara membuat, mengedit, dan menyebarkan undangan pernikahan digital Anda menggunakan EA Invitation.",
  ogImage: "/og-image.webp",
  ogUrl: "https://eainvitation.com/tutorial", // ✅ TAMBAHKAN
  twitterCard: "summary_large_image",
});

// ✅ Canonical URL
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://eainvitation.com/tutorial'
    }
  ]
})

// Schema HowTo
useSchemaOrg([
  defineHowTo({
    name: "Cara Membuat Undangan Digital",
    step: [
      {
        text: "Daftar akun di Dashboard EA Invitation.",
        url: "https://app.eainvitation.com/register",
      },
      {
        text: "Pilih paket undangan sesuai dengan kebutukan.",
      },
      {
        text: "Lakukan checkout dan pembayaran.",
      },
      {
        text: "Masukan nama pasangan yang akan menjadi display undangan dan pilih tema yang Anda sukai dari katalog.",
      },
      {
        text: "Isi data mempelai, acara, dan lain-lain.",
      },
      {
        text: "Tambah dan kekola tamu.",
      },
      {
        text: "Bagikan undangan.",
      },
    ],
  }),
]);
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout>
      <Tutorial />
    </NuxtLayout>
  </div>
</template>