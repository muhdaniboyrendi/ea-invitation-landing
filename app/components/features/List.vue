<!-- FeaturesList -->
<script setup>
const features = [
  {
    title: "Profil Mempelai Pria",
    description:
      "Tampilkan biodata lengkap mempelai pria dengan foto berkualitas tinggi dan informasi personal yang menarik dalam desain yang maskulin dan elegan.",
    icon: "bi-person-standing",
  },
  {
    title: "Profil Mempelai Wanita",
    description:
      "Sajikan profil cantik mempelai wanita dengan sentuhan feminin yang memukau, dilengkapi foto portrait dan detail personal yang menawan.",
    icon: "bi-person-standing-dress",
  },
  {
    title: "Detail Acara",
    description:
      "Informasi lengkap jadwal pernikahan dengan countdown timer real-time, lokasi venue, dan rundown acara yang detail dan mudah dipahami.",
    icon: "bi-calendar-event",
  },
  {
    title: "Kisah Cinta",
    description:
      "Bagikan perjalanan romantis hubungan Anda melalui timeline interaktif dengan milestone penting yang berkesan dan penuh makna.",
    icon: "bi-heart-fill",
  },
  {
    title: "Galeri Foto & Video",
    description:
      "Koleksi momen berharga dalam galeri multimedia yang responsif, lengkap dengan slideshow otomatis dan efek transisi yang memukau.",
    icon: "bi-camera-fill",
  },
  {
    title: "Konfirmasi RSVP",
    description:
      "Sistem konfirmasi kehadiran yang user-friendly dengan notifikasi real-time dan tracking jumlah tamu untuk memudahkan perencanaan acara.",
    icon: "bi-person-check-fill",
  },
  {
    title: "Amplop Digital",
    description:
      "Fitur hadiah digital yang aman dan praktis, memungkinkan tamu memberikan kado dalam bentuk transfer bank dengan QR code terintegrasi.",
    icon: "bi-gift-fill",
  },
  {
    title: "Buku Tamu Digital",
    description:
      "Fitur buku tamu digital yang memudahkan tamu untuk meninggalkan pesan dan ucapan selamat secara online, dengan tampilan yang menarik dan interaktif.",
    icon: "bi-chat-heart-fill",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Fitur analitik yang memberikan wawasan mendalam tentang perilaku tamu, statistik undangan, dan metrik kinerja acara secara real-time.",
    icon: "bi-graph-up-arrow",
  },
];
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    <!-- Feature 1 - Informasi Mempelai Pria -->
    <div
      v-for="(feature, index) in features"
      :key="index"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :delay="index * 200"
      :duration="1000"
      class="group relative"
    >
      <div
        class="h-full rounded-2xl bg-primary p-6 md:p-8 border border-dark/10 dark:border-light/10 hover:scale-102 transition-all duration-300"
      >
        <div
          class="w-12 h-12 bg-light rounded-xl mb-4 flex items-center justify-center shadow-lg"
        >
          <i class="bi text-primary text-xl" :class="feature.icon"></i>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">
          {{ feature.title }}
        </h3>
        <p class="text-light/90 text-sm">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </div>
</template>
