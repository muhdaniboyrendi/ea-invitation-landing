<!-- components/hero/Index.vue -->
<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-light dark:bg-dark">
    <div
      class="relative w-full max-w-7xl mx-auto pt-30 px-4 md:pt-32 pb-5 lg:pb-20"
    >
      <h1
        class="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold md:font-medium tracking-tighter text-black dark:text-white text-balance"
      >
        Ciptakan Kesan Abadi Lewat Undangan Digital
        <span class="text-primary"> Paling Eksklusif </span>
      </h1>

      <p
        class="mt-4 md:mt-8 max-w-4xl text-lg md:text-xl text-black/60 dark:text-white/60 font-semibold text-balance"
      >
        Sistem tema premium terkurasi untuk pasangan modern. Menghadirkan
        atmosfer sinematik, minimalis, dan teknologi mutakhir yang selesai dalam
        hitungan menit.
      </p>

      <div class="flex flex-col sm:flex-row text-center gap-2 mt-10">
        <a
          :href="dashboardAppUrl + '/login'"
          rel="external"
          class="py-3 px-8 bg-primary border border-black/20 dark:border-white/20 hover:bg-primary/80 text-light font-bold rounded-full shrink-0 active:scale-95 transition duration-300"
        >
          Coba Gratis Sekarang
        </a>

        <NuxtLink
          to="/#themes"
          class="py-3 px-8 text-black dark:text-white font-bold rounded-full shrink-0 hover:bg-black/10 dark:hover:bg-white/10 active:scale-95 transition duration-300"
        >
          Lihat Tema Eksklusif
          <i class="bi bi-arrow-right ml-1"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
