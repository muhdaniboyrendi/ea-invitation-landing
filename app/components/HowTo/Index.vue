<script setup>
const steps = [
  {
    stepNumber: "01",
    title: "Daftar & Masuk ke Dasbor",
    description:
      "Buat akun atau langsung login ke dasbor EA Invitation untuk membuka ruang kreasi digitalmu.",
  },
  {
    stepNumber: "02",
    title: "Isi Detail Acara Bahagiamu",
    description:
      "Masukkan info akad, resepsi, peta lokasi, foto prewedding terbaik, hingga musik latar pilihanmu lewat panel yang simpel.",
  },
  {
    stepNumber: "03",
    title: "Pilih Tema Desain Favorit",
    description:
      "Pilih satu dari deretan koleksi tema anti-mainstream kami yang estetik, responsif, dan cocok dengan konsep pernikahanmu.",
  },
  {
    stepNumber: "04",
    title: "Siap Rilis & Sebar Undangan",
    description:
      "Undangan web premium milikmu langsung aktif seketika. Tinggal salin tautannya dan bagikan ke keluarga serta teman dekat.",
  },
];
</script>

<template>
  <section
    id="tutorial"
    class="relative py-16 overflow-hidden bg-light dark:bg-dark"
  >
    <!-- Header Section -->
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-widest mb-4">
        Cara Kerja
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        4 Langkah Gampang Bikin Undangan Unikmu
      </h2>

      <p
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        Gak perlu keahlian khusus atau paham coding. Sistem kami didesain super
        ramah pengguna agar kamu bisa merancang, mengubah, dan mengelola
        undangan digitalmu sendiri dengan cepat.
      </p>
    </div>

    <!-- Steps Grid -->
    <div
      class="relative max-w-7xl mx-auto p-2 md:p-4 bg-black/10 dark:bg-white/10 grid md:grid-cols-2 gap-2"
    >
      <!-- Grid disesuaikan menjadi 4 kolom untuk menampung 4 langkah secara simetris -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
        <!-- Card Container -->
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative overflow-hidden h-full p-6 bg-light dark:bg-dark border border-black/20 dark:border-white/20 rounded-2xl"
        >
          <!-- Step Badge & Icon Indicator -->
          <span
            class="absolute -top-15 right-0 text-9xl font-extrabold text-black/10 dark:text-white/10 tracking-tight"
          >
            {{ step.stepNumber }}
          </span>

          <!-- Content -->
          <h3
            class="text-lg font-bold text-black dark:text-white mb-2 tracking-tight"
          >
            {{ step.title }}
          </h3>

          <p class="text-black/70 dark:text-white/70 text-sm leading-relaxed">
            {{ step.description }}
          </p>
        </div>
      </div>

      <div
        class="bg-light dark:bg-dark rounded-2xl border border-black/20 dark:border-white/20 h-full flex items-center"
      >
        <div class="w-full">
          <div class="p-6 pb-0 mb-4">
            <h3
              class="text-lg text-black dark:text-white font-bold tracking-tighter mb-2"
            >
              Intip Video Panduan
            </h3>
            <p class="text-black/60 dark:text-white/60 text-sm">
              Lihat langsung gimana seru dan gampangnya bikin undangan dalam
              hitungan menit.
            </p>
          </div>

          <div class="p-2 md:p-6 pt-0 md:pt-0">
            <div
              class="w-full aspect-video bg-black/10 dark:bg-white/10 rounded-lg border border-black/10 dark:border-white/10"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
