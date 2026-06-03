<script setup>
const steps = [
  {
    stepNumber: "01",
    title: "Aktivasi Akun",
    description:
      "Masuk ke dashboard EA Invitation untuk mengaktifkan ruang kerja digital Anda dan memulai manajemen proyek undangan.",
  },
  {
    stepNumber: "02",
    title: "Input Data Acara",
    description:
      "Lengkapi informasi agenda, peta lokasi acara, galeri dokumentasi, hingga musik latar melalui panel kontrol.",
  },
  {
    stepNumber: "03",
    title: "Pilih Tema Desain",
    description:
      "Pilih salah satu dari ketersediaan tema modern yang responsif dan siap pakai sesuai dengan konsep acara Anda.",
  },
  {
    stepNumber: "04",
    title: "Publikasikan & Bagikan",
    description:
      "Undangan digital berbasis web siap diterbitkan seketika dan dapat langsung Anda distribusikan ke daftar tamu.",
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
        Alur Kerja
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        4 Langkah Mudah Membuat Undangan Anda
      </h2>

      <p
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        Sistem manajemen undangan kami dirancang secara terstruktur untuk
        memudahkan Anda mengelola seluruh informasi pernikahan secara mandiri
        dan cepat.
      </p>
    </div>

    <!-- Steps Grid -->
    <div
      class="relative max-w-7xl mx-auto p-2 md:p-4 bg-black/10 dark:bg-white/10 grid md:grid-cols-2 gap-2"
    >
      <!-- Grid disesuaikan menjadi 4 kolom untuk menampung 4 langkah secara simetris -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="group relative overflow-hidden"
        >
          <!-- Card Container -->
          <div
            class="h-full p-6 bg-light dark:bg-dark border border-black/10 dark:border-white/10 rounded-2xl"
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
      </div>

      <div
        class="bg-light dark:bg-dark rounded-2xl border border-black/20 dark:border-white/20 p-6 h-full flex items-center"
      >
        <div class="w-full">
          <h3
            class="text-lg text-black dark:text-white font-bold tracking-tighter mb-2"
          >
            Video Tutorial
          </h3>
          <p class="text-black/60 dark:text-white/60 mb-4">
            Buat undangan dalam hitungan menit
          </p>

          <div
            class="w-full aspect-video bg-black/10 dark:bg-white/10 rounded-lg"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
