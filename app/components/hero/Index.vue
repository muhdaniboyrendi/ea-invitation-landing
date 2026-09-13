<!-- components/hero/Index.vue -->
<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;

// Kita definisikan kurva transpirasi premium agar reusable dan konsisten
const premiumTransition = {
  type: "spring",
  stiffness: 45, // Membuat gerakan meluncur lebih santai/lambat
  damping: 18, // Meredam pantulan agar tidak terkesan memantul seperti mainan
  mass: 0.8,
};
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-light dark:bg-dark">
    <div
      class="relative w-full max-w-7xl mx-auto pt-30 px-4 md:pt-32 pb-5 lg:pb-20"
    >
      <!-- 1. HEADLINE: Meluncur halus dari bawah dengan opacity -->
      <h1
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: premiumTransition,
        }"
        class="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold lg:font-medium tracking-tighter text-black dark:text-white text-balance"
      >
        <span class="text-primary"> Solusi Instan </span>
        Undangan Pernikahan Dalam Satu Platform
      </h1>

      <!-- 2. SUB-TEXT: Muncul sedikit lebih lambat (staggered delay) -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { ...premiumTransition, delay: 200 },
        }"
        class="mt-4 md:mt-8 max-w-3xl sm:text-lg md:text-xl text-black/60 dark:text-white/60 font-medium text-balance-dashboard"
      >
        Buat undangan digital dalam hitungan menit dengan berbagai pilihan
        desain yang unik dan modern serta fitur lengkap.
      </p>

      <!-- 3. BUTTONS CTA: Muncul paling akhir dengan transisi halus -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { ...premiumTransition, delay: 400 },
        }"
        class="flex flex-col sm:flex-row text-center gap-2 mt-10"
      >
        <a
          :href="dashboardAppUrl + '/login'"
          rel="external"
          class="py-3 px-8 bg-primary border border-black/20 dark:border-white/20 hover:bg-primary/80 text-light font-bold rounded-full shrink-0 active:scale-95 transition duration-300"
        >
          Buat Sekarang Gratis
        </a>

        <NuxtLink
          to="/#themes"
          class="py-3 px-8 bg-black/10 dark:bg-white/10 text-black dark:text-white font-bold rounded-full shrink-0 hover:bg-black/15 dark:hover:bg-white/15 active:scale-95 transition duration-300"
        >
          Lihat Koleksi Tema
          <i class="bi bi-arrow-right ml-1"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
