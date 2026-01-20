<script setup>
const { categories, themes } = storeToRefs(useThemeStore());
// Category filter state
const activeCategory = ref("all");

// Categories with icons
const categoriesFake = ref([
  {
    id: "business",
    name: "Business",
  },
  {
    id: "portfolio",
    name: "Portfolio",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
  },
  {
    id: "blog",
    name: "Blog",
  },
  {
    id: "landing",
    name: "Landing Page",
  },
]);

// Sample themes data
const themesFake = ref([
  {
    id: 1,
    name: "NeonCorp",
    theme_category_id: "business",
    is_premium: 0,
  },
  {
    id: 2,
    name: "GlowFolio",
    theme_category_id: "portfolio",
    is_premium: 0,
  },
  {
    id: 3,
    name: "CyberShop",
    theme_category_id: "ecommerce",
    is_premium: 0,
  },
  {
    id: 4,
    name: "GlowBlog",
    theme_category_id: "blog",
    is_premium: 1,
  },
  {
    id: 5,
    name: "NeonLand",
    theme_category_id: "landing",
    is_premium: 0,
  },
  {
    id: 6,
    name: "TechStart",
    theme_category_id: "business",
    is_premium: 0,
  },
  {
    id: 7,
    name: "ArtistSpace",
    theme_category_id: "portfolio",
    is_premium: 0,
  },
  {
    id: 8,
    name: "LuxeStore",
    theme_category_id: "ecommerce",
    is_premium: 0,
  },
]);

// Computed filtered themes
const filteredThemes = computed(() => {
  if (themes.value) {
    if (activeCategory.value === "all") {
      return themes.value;
    }
    return themes.value.filter(
      (theme) => theme.theme_category_id === activeCategory.value,
    );
  } else {
    if (activeCategory.value === "all") {
      return themesFake.value;
    }
    return themesFake.value.filter(
      (theme) => theme.theme_category_id === activeCategory.value,
    );
  }
});

// Get theme count for category
const getThemeCount = (categoryId) => {
  if (categories.value) {
    if (categoryId === "all") {
      return themes.value.length;
    }
    return themes.value.filter(
      (theme) => theme.theme_category_id === categoryId,
    ).length;
  } else {
    if (categoryId === "all") {
      return themesFake.value.length;
    }
    return themesFake.value.filter(
      (theme) => theme.theme_category_id === categoryId,
    ).length;
  }
};
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
        <!-- Main Title -->
        <h1
          class="text-4xl max-w-2xl mx-auto lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200"
        >
          Daftar Tema Undangan Digital
          <br />
          <span class="text-white/60"> EA Invitation</span>
        </h1>

        <!-- Description -->
        <p
          class="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
        >
          Pilihan tema eksklusif untuk momen spesial Anda dengan desain yang
          modern dan interaktif
        </p>
      </div>

      <!-- Category Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-3 mb-16">
        <button
          @click="activeCategory = 'all'"
          type="button"
          :class="
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
              : ' bg-violet-950 dark:bg-dark text-white/70 hover:text-white'
          "
          class="group relative px-4 py-2 border border-white/10 hover:border-white/20 rounded-xl font-medium cursor-pointer hover:-translate-y-0.5 transition-all duration-300 hover:scale-105"
        >
          <!-- Active Glow Effect -->
          <div
            v-if="activeCategory === 'all'"
            class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl rounded-2xl"
          ></div>

          <span class="relative flex items-center text-sm">
            Semua Tema
            <span class="ml-2 text-xs bg-white/10 px-2 py-1 rounded-full">
              {{ getThemeCount("all") }}
            </span>
          </span>
        </button>

        <button
          v-for="category in categories ? categories : categoriesFake"
          :key="category.id"
          @click="activeCategory = category.id"
          type="button"
          :class="
            activeCategory === category.id
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
              : ' bg-violet-950 dark:bg-dark text-white/70 hover:text-white'
          "
          class="group relative px-4 py-2 border border-white/10 hover:border-white/20 rounded-xl font-medium cursor-pointer hover:-translate-y-0.5 transition-all duration-300 hover:scale-105"
        >
          <!-- Active Glow Effect -->
          <div
            v-if="activeCategory === category.id"
            class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl rounded-2xl"
          ></div>

          <span class="relative flex items-center text-sm">
            {{ category.name }}
            <span class="ml-2 text-xs bg-white/10 px-2 py-1 rounded-full">
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
/* Grid Pattern Background */
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
  background-size: 80px 80px;
}
</style>
