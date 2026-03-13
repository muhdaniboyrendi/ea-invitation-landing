<!-- components/hero/Index.vue -->
<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-white dark:bg-black">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>

    <!-- Hero Section Part 1 -->
    <div
      class="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-y-10 pt-30 pb-28"
    >
      <!-- Left Content -->
      <div class="w-full px-4 lg:pl-6 lg:pr-0">
        <h1
          class="relative max-w-4xl mx-auto text-5xl/14 sm:text-6xl/18 md:text-7xl/20 font-bold mb-4 md:mb-8 text-black dark:text-white text-balance"
        >
          <span
            class="bg-linear-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent"
          >
            Undangan
          </span>
          Pernikahan Digital
        </h1>

        <p
          class="md:text-xl lg:text-xl text-gray-500 dark:text-gray-400 mb-6 md:mb-8 font-medium text-balance"
        >
          Buat undangan pernikahan digital berbasis web dengan berbagai tema
          modern dan interaktif serta fitur lengkap
        </p>

        <div class="flex flex-row gap-2">
          <NuxtLink
            :to="dashboardAppUrl + '/login'"
            class="py-2 px-6 md:py-3 md:px-8 bg-sky-500 dark:bg-sky-600 hover:bg-sky-400 dark:hover:bg-sky-500 text-white text-sm md:text-base font-semibold rounded-md active:scale-95 transition duration-300"
          >
            Buat Undangan
          </NuxtLink>

          <NuxtLink
            to="/tutorial"
            class="py-2 px-6 md:py-3 md:px-8 border-2 border-sky-500 dark:border-sky-600 text-sky-500 dark:text-sky-600 hover:text-white text-sm md:text-base font-semibold rounded-md hover:bg-sky-500 dark:hover:bg-sky-600 active:scale-95 transition duration-300"
          >
            Tutorial
            <i class="bi bi-play-circle ml-1"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Right Content -->
      <div
        class="w-full max-w-110 px-4 lg:pr-6 lg:pl-0 flex justify-end items-center"
      >
        <div
          class="w-full max-w-100 aspect-square rounded-2xl border-2 border-sky-500 dark:border-sky-600 flex justify-center items-center"
        >
          <i
            class="bi bi-card-image text-7xl text-sky-500 dark:text-sky-600"
          ></i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 120px 120px;
  --grid-color: rgba(0, 0, 0, 0.55);
}

:global(.dark .bg-grid-pattern) {
  --grid-color: rgba(255, 255, 255, 0.55);
}
</style>
