<!-- components/hero/Index.vue -->
<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;
</script>

<template>
  <section
    id="home"
    class="relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-dark"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>

    <!-- Hero Section Part 1 -->
    <div
      class="relative w-full max-w-7xl mx-auto z-10 flex flex-col pt-36 pb-28"
    >
      <!-- Left Content -->
      <div class="text-center lg:mb-0 px-4 lg:pl-10 lg:pr-0">
        <div
          class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-full shadow-lg"
        >
          <span
            class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"
          ></span>
          <span class="text-sm font-medium text-white/90">Beta</span>
        </div>

        <h1
          class="relative max-w-4xl mx-auto text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 lg:mb-10 text-white tracking-tighter text-balance"
        >
          Platform
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"
            >Undangan Pernikahan</span
          >
          <span class="italic"> Digital</span>
        </h1>

        <p
          class="text-lg md:text-xl lg:text-xl mx-auto text-white/90 mb-10 max-w-2xl font-medium text-balance"
        >
          Buat undangan pernikahan digital berbasis website dengan berbagai tema
          modern dan interaktif serta fitur lengkap
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="dashboardAppUrl + '/login'"
            class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span class="relative z-10">Buat Undangan</span>
          </NuxtLink>

          <NuxtLink
            to="/tutorial"
            class="group px-8 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Tutorial
            <i class="bi bi-play-circle ml-1"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes gradient-x {
  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 4s ease infinite;
}

/* Grid pattern */
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>
