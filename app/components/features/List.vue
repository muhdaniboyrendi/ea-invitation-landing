<!-- FeaturesList -->
<script setup>
const features1 = [
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
];

const features2 = [
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
];

const features3 = [
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
    <!-- Feature 1 -->
    <div
      v-for="(feature, index) in features1"
      :key="index"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :delay="index * 200"
      :duration="1000"
      class="group relative"
    >
      <div
        class="h-full rounded-2xl bg-white dark:bg-white/3 p-6 md:p-8 border border-dark/20 dark:border-light/20 shadow-xl hover:scale-102 transition-all duration-300"
      >
        <div
          class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 mb-4 flex items-center justify-center"
        >
          <i class="bi text-primary text-xl" :class="feature.icon"></i>
        </div>
        <h3 class="text-lg font-semibold text-black dark:text-white mb-2">
          {{ feature.title }}
        </h3>
        <p class="text-dark/70 dark:text-light/50 text-sm">
          {{ feature.description }}
        </p>
      </div>
    </div>

    <!-- Feature 2 -->
    <div
      v-for="(feature, index) in features2"
      :key="index"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :delay="index * 100"
      :duration="1000"
      class="group relative"
    >
      <div
        class="h-full rounded-2xl bg-white dark:bg-white/3 p-6 md:p-8 border border-dark/20 dark:border-light/20 shadow-xl hover:scale-102 transition-all duration-300"
      >
        <div
          class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 mb-4 flex items-center justify-center"
        >
          <i class="bi text-primary text-xl" :class="feature.icon"></i>
        </div>
        <h3 class="text-lg font-semibold text-black dark:text-white mb-2">
          {{ feature.title }}
        </h3>
        <p class="text-dark/70 dark:text-light/50 text-sm">
          {{ feature.description }}
        </p>
      </div>
    </div>

    <!-- Feature 3 -->
    <div
      v-for="(feature, index) in features3"
      :key="index"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :delay="index * 100"
      :duration="1000"
      class="group relative"
    >
      <div
        class="h-full rounded-2xl bg-white dark:bg-white/3 p-6 md:p-8 border border-dark/20 dark:border-light/20 shadow-xl hover:scale-102 transition-all duration-300"
      >
        <div
          class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 mb-4 flex items-center justify-center"
        >
          <i class="bi text-primary text-xl" :class="feature.icon"></i>
        </div>
        <h3 class="text-lg font-semibold text-black dark:text-white mb-2">
          {{ feature.title }}
        </h3>
        <p class="text-dark/70 dark:text-light/50 text-sm">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </div>
</template>
