<!-- components/tutorial/Steps.vue -->
<script setup>
const steps = [
  {
    stepNumber: "01",
    title: "Daftar Akun",
    description: "Buat akun untuk mulai membuat dan mengelola undangan.",
  },
  {
    stepNumber: "02",
    title: "Pilih Desain Undangan",
    description: "Pilih tema yang paling cocok dengan konsep pernikahanmu.",
  },
  {
    stepNumber: "03",
    title: "Isi Detail Acara",
    description:
      "Masukkan info akad, resepsi, lokasi, foto prewedding, musik latar, dll.",
  },
  {
    stepNumber: "04",
    title: "Undangan Siap Dibagikan",
    description:
      "Undangan aktif, langsung bagikan ke keluarga serta teman dekat.",
  },
];

const premiumSpring = {
  type: "spring",
  stiffness: 45,
  damping: 18,
  mass: 1,
};
</script>

<template>
  <section
    id="tutorial"
    class="relative py-16 overflow-hidden bg-light dark:bg-dark"
  >
    <!-- Header Section -->
    <div class="px-4 max-w-7xl mx-auto">
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-primary text-sm font-bold uppercase tracking-widest mb-4"
      >
        Cara Kerja
      </p>

      <h2
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, delay: 100 },
        }"
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        4 Langkah Membuat Undangan
      </h2>

      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, delay: 200 },
        }"
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        Tanpa perlu keahlian desain atau coding. Kamu bisa membuat dan mengelola
        undangan digital sendiri dengan mudah.
      </p>
    </div>

    <!-- Steps Grid Wrapper -->
    <div
      class="relative max-w-7xl mx-auto p-2 md:p-4 bg-black/10 dark:bg-white/10 grid md:grid-cols-2 gap-2"
    >
      <!-- Left Side: Steps Stack -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
        <!-- Card Container with Staggered Scroll Entrance -->
        <div
          v-for="(step, index) in steps"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { ...premiumSpring, delay: index * 100 },
          }"
          class="relative overflow-hidden h-full p-6 bg-light dark:bg-dark border border-black/20 dark:border-white/20 rounded-2xl group"
        >
          <!-- Step Badge Number with Interactive Scale & Subtle Delay Reveal -->
          <span
            v-motion
            :initial="{ opacity: 0, scale: 0.8, x: 20 }"
            :visible-once="{
              opacity: 1,
              scale: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 30,
                damping: 15,
                delay: index * 100 + 200,
              },
            }"
            class="absolute -top-15 right-0 text-9xl font-extrabold text-black/10 dark:text-white/10 tracking-tight select-none"
          >
            {{ step.stepNumber }}
          </span>

          <!-- Content -->
          <h3
            class="text-lg font-bold text-black dark:text-white mb-2 tracking-tight flex items-center gap-2"
          >
            {{ step.title }}
          </h3>

          <p
            class="text-black/70 dark:text-white/70 text-sm leading-relaxed max-w-[85%]"
          >
            {{ step.description }}
          </p>
        </div>
      </div>

      <!-- Right Side: Video Showcase Container -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.96, y: 20 }"
        :visible-once="{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { ...premiumSpring, delay: 300 },
        }"
        class="bg-light dark:bg-dark rounded-2xl border border-black/20 dark:border-white/20 h-full flex items-center overflow-hidden"
      >
        <div class="w-full">
          <div class="p-6 pb-0 mb-4">
            <h3
              class="text-lg text-black dark:text-white font-bold tracking-tighter mb-2"
            >
              Video Panduan
            </h3>
            <p class="text-black/60 dark:text-white/60 text-sm">
              Lihat cara membuat undangan dari awal sampai selesai dalam
              hitungan menit.
            </p>
          </div>

          <div class="p-2 md:p-6 pt-0 md:pt-0">
            <!-- Video Mockup Placeholder with subtle interactive hover depth -->
            <div
              class="w-full aspect-video bg-black/10 dark:bg-white/10 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden relative group/video cursor-pointer"
            >
              <!-- Masking overlay effect for premium look -->
              <div
                class="absolute inset-0 bg-primary/5 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <div
                  class="w-14 h-14 rounded-full bg-light dark:bg-dark shadow-xl flex items-center justify-center border border-black/10 dark:border-white/10 transform scale-90 group-hover/video:scale-100 transition-transform duration-300"
                >
                  <i class="bi bi-play-fill text-2xl text-primary ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
