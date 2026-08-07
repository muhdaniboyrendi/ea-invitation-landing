<script setup>
const { themes } = storeToRefs(useThemeStore());

const categories = ["basic", "premium", "luxury"];

const activeCategory = ref("all");

const filteredThemes = computed(() => {
  if (activeCategory.value === "all") {
    return themes.value;
  }
  return themes.value.filter(
    (theme) => theme.category === activeCategory.value,
  );
});

const getThemeCount = (category) => {
  if (category === "all") {
    return themes.value.length;
  }
  return themes.value.filter((theme) => theme.category === category).length;
};
</script>

<template>
  <section id="themes" class="pt-28 pb-16 bg-light dark:bg-dark">
    <!-- Section Header -->
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-widest mb-4">
        Koleksi Tema Pilihan
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Pilihan Desain Unik & Gak Pasaran
      </h2>

      <p
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        Kami mengurasi deretan desain undangan digital modern yang penuh
        karakter khusus untuk kamu yang bosan dengan template sejuta umat.
        Setiap layout dibuat presisi agar undanganmu sukses bikin tamu berkesan
        sejak pandangan pertama.
      </p>
    </div>

    <div class="max-w-7xl mx-auto">
      <!-- Category Filter Buttons -->
      <div class="px-4">
        <div
          class="flex gap-2 mb-4 overflow-x-auto md:overflow-x-visible flex-nowrap md:flex-wrap md:justify-center px-4 md:px-0 -mx-4 md:mx-0 scrollbar-none pb-1 md:pb-0"
        >
          <!-- Semua Tema — key unik dengan prefix string agar tidak bentrok dengan category.id -->
          <div class="shrink-0">
            <button
              key="cat-all"
              @click="activeCategory = 'all'"
              type="button"
              class="px-4 py-2 border border-black/10 dark:border-white/10 rounded-full font-medium cursor-pointer transition duration-300"
              :class="
                activeCategory === 'all'
                  ? 'bg-primary text-white hover:bg-primary/80'
                  : 'bg-white/80 dark:bg-white/3 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
              "
            >
              <span class="flex items-center text-sm">
                Semua Tema
                <span
                  class="ml-2 text-xs px-2 py-1 rounded-full"
                  :class="
                    activeCategory === 'all'
                      ? 'text-black dark:text-white bg-white dark:bg-dark'
                      : 'text-black dark:text-white bg-black/10 dark:bg-white/10'
                  "
                >
                  {{ getThemeCount("all") }}
                </span>
              </span>
            </button>
          </div>

          <div v-for="(category, index) in categories" :key="index">
            <button
              @click="activeCategory = category"
              type="button"
              class="shrink-0 px-4 py-2 border border-black/10 dark:border-white/10 rounded-full font-medium cursor-pointer transition duration-300"
              :class="
                activeCategory === category
                  ? 'bg-primary text-white hover:bg-primary/80'
                  : 'bg-white/80 dark:bg-white/3 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
              "
            >
              <span class="flex items-center text-sm capitalize">
                {{ category }}
                <span
                  class="ml-2 text-xs px-2 py-1 rounded-full"
                  :class="
                    activeCategory === category
                      ? 'text-black dark:text-white bg-white dark:bg-dark'
                      : 'text-black dark:text-white bg-black/10 dark:bg-white/10'
                  "
                >
                  {{ getThemeCount(category) }}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Themes Grid -->
      <div
        v-if="filteredThemes.length > 0"
        class="bg-black/10 dark:bg-white/10 p-2 md:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
      >
        <ThemesCard
          v-for="theme in filteredThemes"
          :key="theme.id"
          :theme="theme"
        />
      </div>

      <div v-else class="bg-black/10 dark:bg-white/10 px-4 py-8">
        <p class="text-sm text-center text-black/60 dark:text-white/60">
          Belum ada tema tersedia
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-none {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
