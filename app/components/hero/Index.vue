<!-- components/hero/Index.vue -->
<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-light dark:bg-dark">
    <!-- Hero Section Part 1 -->
    <div
      class="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-y-10 pt-30 md:pt-40 pb-20"
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
          <span class="text-primary"> Undangan </span>
          Pernikahan Digital
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, x: -200 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="200"
          :duration="1000"
          class="md:text-xl lg:text-xl text-black/70 dark:text-white/60 mb-6 md:mb-8 font-medium text-balance"
        >
          Buat undangan pernikahan digital berbasis web dalam hitungan menit
          dengan berbagai tema modern dan interaktif.
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, x: -200 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="400"
          :duration="1000"
          class="flex flex-row gap-2 mb-4"
        >
          <a
            :href="dashboardAppUrl + '/login'"
            rel="external"
            class="py-3 px-8 bg-primary border border-black/20 dark:border-white/20 hover:bg-primary/80 text-light font-bold rounded-lg active:scale-95 transition duration-300"
          >
            Buat Sekarang Gratis
          </a>

          <NuxtLink
            to="/tutorial"
            class="py-3 px-8 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white font-semibold rounded-lg hover:bg-black/10 dark:hover:bg-white/10 active:scale-95 transition duration-300"
          >
            Tutorial
            <i class="bi bi-play-circle ml-1"></i>
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
        class="w-full max-w-110 px-4 lg:pr-6 lg:pl-0 flex justify-end items-center"
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
