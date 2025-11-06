<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;
</script>

<template>
  <div
    id="home"
    class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-dark"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>

    <!-- Hero Section Part 1 -->
    <section
      class="relative w-full max-w-7xl mx-auto z-10 flex flex-col gap-y-20 lg:flex-row items-center justify-between min-h-dvh py-30"
    >
      <!-- Left Content -->
      <div class="text-center lg:text-left lg:mb-0 px-4 lg:pl-10 lg:pr-0">
        <div
          class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-full shadow-lg"
        >
          <span
            class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"
          ></span>
          <span class="text-sm font-medium text-white/90"
            >Developer Beta Version</span
          >
        </div>

        <h1
          class="relative max-w-2xl mx-auto lg:mx-0 text-5xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200"
        >
          Platform Undangan Pernikahan Digital
        </h1>

        <p
          class="text-xl lg:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed"
        >
          Wujudkan momen bahagia pernikahan Anda dengan undangan digital yang
          elegan dan interaktif
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a
            :href="dashboardAppUrl"
            class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span class="relative z-10">Buat Undangan</span>
          </a>

          <NuxtLink
            to="/tutorial"
            class="group px-8 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Tutorial
            <i class="bi bi-play-circle ml-1"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Right Content -->
      <div class="flex justify-center lg:justify-end">
        <div class="relative group max-w-xl w-full">
          <!-- Glow Effect -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-2xl rounded-3xl group-hover:blur-3xl transition-all duration-500"
          ></div>
          <!-- Image Container with fixed aspect ratio -->
          <div class="relative w-full aspect-video">
            <NuxtImg
              src="/img/hero.png"
              class="min-w-full h-full object-cover"
              alt="main image"
              width="960"
              height="540"
              format="webp"
              quality="100"
              loading="eager"
              placeholder
              preload
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Hero Section Part 2 - Features Grid -->
    <section class="relative z-10 px-6 lg:px-12 xl:px-20 pb-20">
      <div class="text-center mb-16">
        <h2
          class="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200"
        >
          Fitur Unggulan
        </h2>
        <p class="text-xl text-white/70 max-w-3xl mx-auto">
          Discover the tools that will transform your workflow and accelerate
          your success
        </p>
      </div>

      <!-- Features Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        <!-- Feature 1 -->
        <div
          class="group relative rounded-2xl bg-linear-to-b from-white to-white dark:from-cyan-400 dark:to-blue-600 hover:scale-105 transition-all duration-300"
        >
          <div
            class="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
          ></div>
          <div
            class="relative w-full h-full bg-linear-to-b p-8 rounded-2xl transition-all duration-300 hover:bg-white/10 dark:hover:bg-black/5 border border-white/10 hover:border-white/20 from-cyan-950/90 to-blue-900/90 dark:from-black/70 dark:to-black/60"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mb-6 flex items-center justify-center"
            >
              <i class="bi bi-lightning-charge text-white text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Instant</h3>
            <p class="text-white/70">
              Undangan langsung jadi tanpa menunggu dan langsung bagikan.
            </p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div
          class="group relative rounded-2xl bg-linear-to-b from-white to-white dark:from-purple-400 dark:to-pink-600 hover:scale-105 transition-all duration-300"
        >
          <div
            class="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
          ></div>
          <div
            class="relative w-full h-full bg-linear-to-b p-8 rounded-2xl transition-all duration-300 hover:bg-white/10 dark:hover:bg-black/5 border border-white/10 hover:border-white/20 from-purple-950/90 to-pink-900/90 dark:from-black/70 dark:to-black/60"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl mb-6 flex items-center justify-center"
            >
              <i class="bi bi-layers text-white text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Anti-mainstream Design
            </h3>
            <p class="text-white/70">
              Rasakan desain undangan yang unik dan berbeda dari yang lain.
            </p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div
          class="group relative rounded-2xl bg-linear-to-b from-white to-white dark:from-green-400 dark:to-teal-600 hover:scale-105 transition-all duration-300"
        >
          <div
            class="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-teal-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
          ></div>
          <div
            class="relative w-full h-full bg-linear-to-b p-8 rounded-2xl transition-all duration-300 hover:bg-white/10 dark:hover:bg-black/5 border border-white/10 hover:border-white/20 from-green-950/90 to-teal-900/90 dark:from-black/70 dark:to-black/60"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl mb-6 flex items-center justify-center"
            >
              <i class="bi bi-sliders2 text-white text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Limitless</h3>
            <p class="text-white/70">
              Ubah konten undangan dan pilih tema kapanpun anda mau.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <div
          class="flex flex-col sm:flex-row gap-y-4 justify-center items-center w-fit mx-auto px-8 py-4 backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl"
        >
          <span class="text-white font-medium mr-4 block"
            >Siap untuk memulai?</span
          >
          <a
            :href="dashboardAppUrl"
            class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
          >
            Buat Undangan Sekarang
          </a>
        </div>
      </div>
    </section>
  </div>
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
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.4) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>
