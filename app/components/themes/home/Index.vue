<script setup>
const { themes } = useThemeStore();
</script>

<template>
  <section
    id="themes"
    class="relative py-16 overflow-hidden bg-light dark:bg-dark"
  >
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-widest mb-4">
        Galeri Tema Eksklusif
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Temukan Palet Estetika Pernikahan Impian Anda
      </h2>

      <p class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14">
        EA Invitation mengurasi antologi desain premium dengan tingkat presisi tinggi. 
        Setiap tata letak dikerjakan secara eksklusif untuk menciptakan kesan pertama yang tak terlupakan.
      </p>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 lg:px-6">
      <!-- Themes Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
      >
        <ThemesCard
          v-for="theme in themes.slice(0, 6)"
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
          class="group inline-flex items-center px-6 py-3 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white font-semibold rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition duration-300 tracking-wide text-sm"
        >
          Jelajahi Seluruh Mahakarya
          <i
            class="bi bi-arrow-down ml-2 text-xl group-hover:translate-y-1 transition-transform duration-300"
          ></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>