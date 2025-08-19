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
          <svg
            class="w-4 h-4 ml-2 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
            ></path>
          </svg>
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
              : 'backdrop-blur-md bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
          "
          class="group relative px-6 py-3 border border-white/10 hover:border-white/20 rounded-2xl font-medium transition-all duration-300 hover:scale-105"
        >
          <!-- Active Glow Effect -->
          <div
            v-if="activeCategory === category.id"
            class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl rounded-2xl"
          ></div>

          <span class="relative flex items-center">
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
        <div
          v-for="theme in filteredThemes"
          :key="theme.id"
          class="group relative"
        >
          <!-- Theme Card -->
          <div
            class="relative backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/10"
          >
            <!-- Theme Preview Image -->
            <div class="relative h-48 lg:h-56 overflow-hidden">
              <!-- Mock Browser Window -->
              <div class="absolute inset-0 p-4">
                <div
                  class="bg-white/10 rounded-xl h-full border border-white/20 overflow-hidden"
                >
                  <!-- Browser Header -->
                  <div
                    class="flex items-center px-4 py-2 border-b border-white/10"
                  >
                    <div class="flex space-x-2">
                      <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div class="flex-1 mx-4">
                      <div class="bg-white/10 rounded px-3 py-1">
                        <div class="w-24 h-2 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Mock Content -->
                  <div class="p-4 space-y-3">
                    <div :class="theme.contentBg" class="h-3 rounded"></div>
                    <div class="flex space-x-2">
                      <div
                        :class="theme.accentBg"
                        class="h-2 w-16 rounded"
                      ></div>
                      <div
                        :class="theme.contentBg"
                        class="h-2 flex-1 rounded"
                      ></div>
                    </div>
                    <div class="grid grid-cols-3 gap-2 mt-3">
                      <div :class="theme.cardBg" class="h-12 rounded"></div>
                      <div :class="theme.cardBg" class="h-12 rounded"></div>
                      <div :class="theme.cardBg" class="h-12 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Theme Type Badge -->
              <div class="absolute top-6 right-6 z-10">
                <span
                  :class="theme.badgeBg + ' ' + theme.badgeText"
                  class="px-3 py-1 rounded-full text-xs font-semibold"
                >
                  Premium
                </span>
              </div>
            </div>

            <!-- Theme Info -->
            <div class="p-4 pt-0">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-lg font-bold text-white">
                    {{ theme.name }}
                  </h3>
                </div>
                <span
                  class="py-1 px-2 rounded-lg bg-white/10 text-sm text-white/80"
                >
                  Modern
                </span>
              </div>

              <button
                class="group/btn relative w-full inline-flex justify-center items-center px-4 py-2 backdrop-blur-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <span class="relative z-10">Lihat Tema</span>
                <i class="bi bi-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
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
