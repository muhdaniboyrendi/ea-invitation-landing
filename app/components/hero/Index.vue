<!-- components/hero/Index.vue -->
<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-light dark:bg-dark">
    <!-- Hero Section Part 1 -->
    <div
      class="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center pt-30 md:pt-40 pb-5 lg:pb-20"
    >
      <!-- Left Content -->
      <div class="w-full px-4 lg:pl-6 lg:pr-0">
        <h1
          v-motion
          :initial="{ opacity: 0, x: -200 }"
          :enter="{ opacity: 1, x: 0 }"
          :duration="1000"
          class="relative max-w-4xl mx-auto text-5xl/14 sm:text-6xl/18 md:text-7xl/20 font-bold mb-4 md:mb-8 text-black dark:text-white text-balance tracking-wide"
        >
          Undangan Pernikahan
          <span class="text-primary"> Anti-Mainstream </span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, x: -200 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="200"
          :duration="1000"
          class="md:text-xl lg:text-xl text-black/70 dark:text-white/60 mb-6 md:mb-8 font-medium text-balance"
        >
          Pilih dari tema unik yang tidak ada di tempat lain — dari Instagram
          vibes sampai estetika Jawa modern. Dibuat dalam menit, dibagikan lewat
          satu link.
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, x: -200 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="400"
          :duration="1000"
          class="flex flex-wrap gap-2 mb-5"
        >
          <a
            :href="dashboardAppUrl + '/login'"
            rel="external"
            class="py-3 px-8 bg-primary border border-black/20 dark:border-white/20 hover:bg-primary/80 text-light font-bold rounded-lg shrink-0 active:scale-95 transition duration-300"
          >
            Coba Gratis Sekarang
          </a>

          <NuxtLink
            to="/#themes"
            class="py-3 px-8 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white font-semibold rounded-lg shrink-0 hover:bg-black/10 dark:hover:bg-white/10 active:scale-95 transition duration-300"
          >
            Lihat Semua Tema
            <i class="bi bi-arrow-right ml-1"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Right Content -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 200 }"
        :enter="{ opacity: 1, x: 0 }"
        :delay="600"
        :duration="1000"
        class="hidden lg:block w-full max-w-110 px-4 lg:pr-6 lg:pl-0 flex justify-end items-center"
      >
        <div
          class="w-full max-w-200 aspect-square rounded-2xl flex justify-center items-center overflow-hidden"
        >
          <NuxtImg
            src="/img/hero.webp"
            preload
            loading="eager"
            fetchpriority="high"
            width="612"
            height="612"
            sizes="612px"
            quality="80"
            class="w-full mask-t-from-50% mask-t-to-100% md:mask-t-from-100% md:mask-t-to-100% md:mask-l-from-50% md:mask-l-to-100%"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  </section>
</template>
