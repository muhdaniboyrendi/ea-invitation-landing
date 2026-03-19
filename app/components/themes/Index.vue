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
  <section id="themes" class="pt-28 md:pt-40 pb-20 bg-light dark:bg-dark">
    <div class="max-w-7xl mx-auto px-4 lg:px-6">
      <!-- Section Header -->
      <div class="text-center mb-10 md:mb-30">
        <!-- Main Title -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-4xl/12 sm:text-5xl/15 lg:text-6xl/19 font-bold mb-6 text-black dark:text-white tracking-wide"
        >
          <span class="text-primary"> Daftar Tema </span>
          <br />Undangan EA Invitation
        </h1>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-xl lg:text-2xl text-black/60 dark:text-white/60 max-w-4xl mx-auto leading-relaxed"
        >
          Pilihan tema eksklusif untuk momen spesial Anda dengan desain yang
          modern dan interaktif
        </p>
      </div>

      <!-- Category Filter Buttons -->
      <!-- 
        Mobile  : overflow-x scroll, nowrap, sembunyikan scrollbar
        Desktop : flex-wrap justify-center seperti semula
      -->
      <div
        class="flex gap-2 mb-10 overflow-x-auto md:overflow-x-visible flex-nowrap md:flex-wrap md:justify-center px-4 md:px-0 -mx-4 md:mx-0 scrollbar-none pb-1 md:pb-0"
      >
        <!-- Semua Tema — key unik dengan prefix string agar tidak bentrok dengan category.id -->
        <button
          key="cat-all"
          @click="activeCategory = 'all'"
          type="button"
          class="shrink-0 px-4 py-2 border border-black/20 dark:border-white/20 rounded-lg font-medium cursor-pointer hover:-translate-y-0.5 transition-all duration-300"
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

        <!-- Gunakan category.id sebagai key, bukan index, agar tidak ada duplikat -->
        <button
          v-for="category in categories"
          :key="`cat-${category.id}`"
          @click="activeCategory = category.id"
          type="button"
          class="shrink-0 px-4 py-2 border border-black/20 dark:border-white/20 rounded-lg font-medium cursor-pointer hover:-translate-y-0.5 transition-all duration-300"
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

      <!-- Themes Grid -->
      <div class="flex flex-wrap justify-center gap-8">
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
/* Sembunyikan scrollbar di semua browser tanpa plugin Tailwind tambahan */
.scrollbar-none {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.scrollbar-none::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
</style>
