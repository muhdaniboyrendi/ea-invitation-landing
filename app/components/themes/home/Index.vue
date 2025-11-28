<script setup>
const { themes } = storeToRefs(useThemeStore());

const filteredThemes = computed(() => {
  return themes.value.slice(0, 6);
});
</script>

<template>
  <section
    id="themes"
    class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-violet-900/90 to-slate-900 dark:from-black dark:via-violet-950/20 dark:to-dark"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/10 rounded-full shadow-lg"
        >
          <span
            class="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-pulse"
          ></span>
          <span class="text-sm font-medium text-white/80"
            >Beautiful Themes</span
          >
          <i class="bi bi-palette2 ml-2 text-sm text-white/60"></i>
        </div>

        <!-- Main Title -->
        <h2
          class="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200"
        >
          Stunning Themes
          <br />
          <span class="text-3xl lg:text-5xl text-white/60"
            >For Every Style</span
          >
        </h2>

        <!-- Description -->
        <p
          class="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
        >
          Pilihan tema eksklusif untuk momen spesial Anda dengan desain yang
          memukau dan interaktif
        </p>
      </div>

      <!-- Themes Grid -->
      <div class="flex flex-wrap justify-center gap-8">
        <ThemesCard
          v-for="theme in filteredThemes"
          :key="theme.id"
          :theme="theme"
        />
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-16">
        <NuxtLink
          to="/themes"
          class="group relative inline-flex items-center px-8 py-4 backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <span class="relative z-10">Lihat Semua Tema</span>
          <i
            class="bi bi-arrow-down ml-2 text-xl group-hover:translate-y-1 transition-transform duration-300"
          ></i>
          <!-- Hover Glow -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-violet-400/10 to-pink-400/10 blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl"
          ></div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Grid Pattern Background */
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
  background-size: 80px 80px;
}
</style>
