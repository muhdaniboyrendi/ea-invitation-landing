<script setup>
const { categories, themes } = storeToRefs(useThemeStore());

const activeCategory = ref("all");

const filteredThemes = computed(() => {
  if (activeCategory.value === "all") {
    return themes.value;
  }
  return themes.value.filter(
    (theme) => theme.theme_category_id === activeCategory.value,
  );
});

const getThemeCount = (categoryId) => {
  if (categoryId === "all") {
    return themes.value.length;
  }
  return themes.value.filter((theme) => theme.theme_category_id === categoryId)
    .length;
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
        Temukan Palet Estetika Pernikahan Impian Anda
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
              class="px-4 py-2 border border-black/20 dark:border-white/20 rounded-full font-medium shadow-lg cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition duration-300"
              :class="
                activeCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white/80 dark:bg-white/3 text-black dark:text-white'
              "
            >
              <span class="flex items-center text-sm">
                Semua Tema
                <span
                  class="ml-2 text-xs text-dark dark:text-light bg-black/5 dark:bg-white/5 px-2 py-1 rounded-full"
                >
                  {{ getThemeCount("all") }}
                </span>
              </span>
            </button>
          </div>

          <!-- Gunakan category.id sebagai key, bukan index, agar tidak ada duplikat -->
          <div v-for="(category, index) in categories" :key="index">
            <button
              @click="activeCategory = category.id"
              type="button"
              class="shrink-0 px-4 py-2 border border-black/20 dark:border-white/20 rounded-full font-medium shadow-lg cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition duration-300"
              :class="
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white/80 dark:bg-white/3 text-black dark:text-white'
              "
            >
              <span class="flex items-center text-sm">
                {{ category.name }}
                <span
                  class="ml-2 text-xs text-dark dark:text-light bg-black/5 dark:bg-white/5 px-2 py-1 rounded-full"
                >
                  {{ getThemeCount(category.id) }}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Themes Grid -->
      <div
        class="bg-black/10 dark:bg-white/10 p-2 md:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
      >
        <ThemesCard
          v-for="theme in filteredThemes"
          :key="theme.id"
          :theme="theme"
        />
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
