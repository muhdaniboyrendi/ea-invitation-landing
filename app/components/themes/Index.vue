<script setup>
// Category filter state
const activeCategory = ref("all");

// Categories with icons
const categories = ref([
  {
    id: "all",
    name: "All Themes",
  },
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
const themes = ref([
  {
    id: 1,
    name: "NeonCorp",
    category: "business",
    type: "Premium",
    price: "$49",
    originalPrice: "$69",
    rating: "4.9",
    popular: true,
    gradient: "from-blue-400/20 to-purple-500/20",
    previewBg: "bg-gradient-to-br from-blue-900 to-purple-900",
    contentBg: "bg-white/20",
    accentBg: "bg-blue-400",
    cardBg: "bg-white/10",
    badgeBg: "bg-blue-500/80",
    badgeText: "text-white",
  },
  {
    id: 2,
    name: "GlowFolio",
    category: "portfolio",
    type: "Premium",
    price: "$39",
    rating: "4.8",
    gradient: "from-purple-400/20 to-pink-500/20",
    previewBg: "bg-gradient-to-br from-purple-900 to-pink-900",
    contentBg: "bg-white/20",
    accentBg: "bg-purple-400",
    cardBg: "bg-white/10",
    badgeBg: "bg-purple-500/80",
    badgeText: "text-white",
  },
  {
    id: 3,
    name: "CyberShop",
    category: "ecommerce",
    type: "Premium",
    price: "$79",
    originalPrice: "$99",
    rating: "4.9",
    popular: true,
    gradient: "from-cyan-400/20 to-teal-500/20",
    previewBg: "bg-gradient-to-br from-cyan-900 to-teal-900",
    contentBg: "bg-white/20",
    accentBg: "bg-cyan-400",
    cardBg: "bg-white/10",
    badgeBg: "bg-cyan-500/80",
    badgeText: "text-white",
  },
  {
    id: 4,
    name: "GlowBlog",
    category: "blog",
    type: "Free",
    price: "Free",
    rating: "4.7",
    gradient: "from-green-400/20 to-emerald-500/20",
    previewBg: "bg-gradient-to-br from-green-900 to-emerald-900",
    contentBg: "bg-white/20",
    accentBg: "bg-green-400",
    cardBg: "bg-white/10",
    badgeBg: "bg-green-500/80",
    badgeText: "text-white",
  },
  {
    id: 5,
    name: "NeonLand",
    category: "landing",
    type: "Premium",
    price: "$29",
    rating: "4.8",
    gradient: "from-orange-400/20 to-red-500/20",
    previewBg: "bg-gradient-to-br from-orange-900 to-red-900",
    contentBg: "bg-white/20",
    accentBg: "bg-orange-400",
    cardBg: "bg-white/10",
    badgeBg: "bg-orange-500/80",
    badgeText: "text-white",
  },
  {
    id: 6,
    name: "TechStart",
    category: "business",
    type: "Premium",
    price: "$59",
    rating: "4.9",
    gradient: "from-indigo-400/20 to-blue-500/20",
    previewBg: "bg-gradient-to-br from-indigo-900 to-blue-900",
    contentBg: "bg-white/20",
    accentBg: "bg-indigo-400",
    cardBg: "bg-white/10",
    badgeBg: "bg-indigo-500/80",
    badgeText: "text-white",
  },
  {
    id: 7,
    name: "ArtistSpace",
    category: "portfolio",
    type: "Premium",
    price: "$45",
    rating: "4.7",
    gradient: "from-pink-400/20 to-rose-500/20",
    previewBg: "bg-gradient-to-br from-pink-900 to-rose-900",
    contentBg: "bg-white/20",
    accentBg: "bg-pink-400",
    cardBg: "bg-white/10",
    badgeBg: "bg-pink-500/80",
    badgeText: "text-white",
  },
  {
    id: 8,
    name: "LuxeStore",
    category: "ecommerce",
    type: "Premium",
    price: "$89",
    rating: "4.9",
    popular: true,
    gradient: "from-yellow-400/20 to-orange-500/20",
    previewBg: "bg-gradient-to-br from-yellow-900 to-orange-900",
    contentBg: "bg-white/20",
    accentBg: "bg-yellow-400",
    cardBg: "bg-white/10",
    badgeBg: "bg-yellow-500/80",
    badgeText: "text-black",
  },
]);

// Computed filtered themes
const filteredThemes = computed(() => {
  if (activeCategory.value === "all") {
    return themes.value;
  }
  return themes.value.filter(
    (theme) => theme.category === activeCategory.value
  );
});

// Get theme count for category
const getThemeCount = (categoryId) => {
  if (categoryId === "all") {
    return themes.value.length;
  }
  return themes.value.filter((theme) => theme.category === categoryId).length;
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
          Discover professionally designed themes crafted for modern websites
          and applications
        </p>
      </div>

      <!-- Category Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-3 mb-16">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
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
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <ThemesCard
          v-for="theme in filteredThemes"
          :key="theme.id"
          :theme="theme"
        />
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-16">
        <button
          class="group relative inline-flex items-center px-8 py-4 backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <span class="relative z-10">Load More Themes</span>
          <i
            class="bi bi-arrow-down ml-2 text-xl group-hover:translate-y-1 transition-transform duration-300"
          ></i>
          <!-- Hover Glow -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-violet-400/10 to-pink-400/10 blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl"
          ></div>
        </button>
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
