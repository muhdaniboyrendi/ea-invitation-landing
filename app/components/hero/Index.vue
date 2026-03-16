<!-- components/hero/Index.vue -->
<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-light dark:bg-dark">
    <!-- Hero Section Part 1 -->
    <div
      class="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-y-10 pt-30 pb-20"
    >
      <!-- Left Content -->
      <div class="w-full px-4 lg:pl-6 lg:pr-0">
        <h1
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{ opacity: 1, x: 0 }"
          :duration="1000"
          class="relative max-w-4xl mx-auto text-5xl/14 sm:text-6xl/18 md:text-7xl/20 font-bold mb-4 md:mb-8 text-dark dark:text-light text-balance tracking-wide"
        >
          <span
            class="bg-linear-to-r from-[#0061FF] to-[#60EFFF] bg-clip-text text-transparent"
          >
            Undangan
          </span>
          Pernikahan Digital
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="200"
          :duration="1000"
          class="md:text-xl lg:text-xl text-dark/70 dark:text-light/60 mb-6 md:mb-8 font-medium text-balance"
        >
          Buat undangan pernikahan digital berbasis web dengan berbagai tema
          modern dan interaktif serta fitur lengkap
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="400"
          :duration="1000"
          class="flex flex-row gap-2"
        >
          <NuxtLink
            :to="dashboardAppUrl + '/login'"
            class="py-3 px-8 bg-primary hover:scale-102 text-light text-sm md:text-base font-semibold rounded-md active:scale-95 transition duration-300"
          >
            Buat Undangan
          </NuxtLink>

          <NuxtLink
            to="/tutorial"
            class="py-3 px-8 border-2 border-primary text-primary text-sm md:text-base font-semibold rounded-md hover:scale-102 active:scale-95 transition duration-300"
          >
            Tutorial
            <i class="bi bi-play-circle ml-1"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Right Content -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0 }"
        :delay="600"
        :duration="1000"
        class="w-full max-w-110 px-4 lg:pr-6 lg:pl-0 flex justify-end items-center"
      >
        <div
          class="w-full max-w-100 aspect-square rounded-2xl border-2 border-primary flex justify-center items-center"
        >
          <i class="bi bi-card-image text-7xl text-primary"></i>
        </div>
      </div>
    </div>
  </section>
</template>
