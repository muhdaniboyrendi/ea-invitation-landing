<script setup>
useSeoMeta({
  title: "Panduan & Tutorial Penggunaan",
  description:
    "Pelajari cara membuat, mengedit, dan menyebarkan undangan pernikahan digital Anda menggunakan EA Invitation.",
});

// Schema HowTo (Sangat bagus untuk rich snippet di Google)
useSchemaOrg([
  defineHowTo({
    name: "Cara Membuat Undangan Digital",
    step: [
      {
        text: "Daftar akun di Dashboard EA Invitation.",
        url: "https://app.eainvitation.com/register", // Link ke port 3001 (Production URL)
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
