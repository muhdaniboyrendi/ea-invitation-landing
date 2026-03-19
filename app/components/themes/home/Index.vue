<script setup>
const { themes } = useThemeStore();
</script>

<template>
  <section
    id="themes"
    class="relative py-20 overflow-hidden bg-light dark:bg-dark"
  >
    <div class="relative max-w-7xl mx-auto px-4 lg:px-6">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <!-- Main Title -->
        <h2
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-4xl/12 sm:text-5xl/15 lg:text-6xl/19 font-bold mb-6 text-black dark:text-white tracking-wide max-w-2xl mx-auto"
        >
          Stunning Themes For Every Style
        </h2>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-xl lg:text-2xl text-dark/60 dark:text-light/60 max-w-4xl mx-auto leading-relaxed"
        >
          Pilihan tema eksklusif untuk momen spesial Anda dengan desain yang
          memukau dan interaktif
        </p>
      </div>

      <!-- Themes Grid -->
      <div class="flex flex-wrap justify-center gap-4 md:gap-6">
        <ThemesCard
          v-for="theme in themes"
          :key="theme.id"
          :theme="theme"
        />
      </div>

      <!-- Load More Button -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="1000"
        class="text-center mt-10"
      >
        <NuxtLink
          to="/themes"
          class="group inline-flex items-center px-6 py-3 bg-white/80 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white font-semibold rounded-lg hover:scale-102 transition duration-300"
        >
          Lihat Semua Tema
          <i
            class="bi bi-arrow-down ml-2 text-xl group-hover:translate-y-1 transition-transform duration-300"
          ></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
