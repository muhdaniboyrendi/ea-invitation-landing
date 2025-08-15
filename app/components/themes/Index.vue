<template>
  <section class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900 dark:via-indigo-950/30 dark:to-gray-900">
    
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Animated Background Orbs -->
      <div class="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float-reverse"></div>
      <div class="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-to-r from-pink-400/25 to-indigo-400/25 rounded-full blur-3xl animate-float"></div>
      
      <!-- Designer Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,black_25%,transparent_100%)]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-24">
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-sm font-medium text-indigo-600 dark:text-indigo-400 shadow-lg mb-6">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
          </svg>
          <span>Theme Collection</span>
        </div>
        
        <h2 class="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
          <span class="block bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
            Stunning
          </span>
          <span class="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Design Themes
          </span>
        </h2>
        
        <p class="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover our curated collection of premium themes. Each design is meticulously crafted to deliver exceptional user experiences across all devices.
        </p>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-3 mt-8">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="selectedCategory = category.id"
            class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            :class="[
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/20'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>

      <!-- Themes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <div 
          v-for="theme in filteredThemes" 
          :key="theme.id"
          class="group relative"
        >
          
          <!-- Premium Badge -->
          <div 
            v-if="theme.isPremium"
            class="absolute -top-3 -right-3 z-20"
          >
            <div class="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>PREMIUM</span>
            </div>
          </div>

          <!-- Theme Card -->
          <div class="relative h-full rounded-3xl bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:scale-105 overflow-hidden group-hover:bg-white/30 dark:group-hover:bg-white/10">
            
            <!-- Image Container -->
            <div class="relative aspect-[4/3] overflow-hidden rounded-t-3xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
              <!-- Simulated Theme Preview -->
              <div class="absolute inset-0 p-4">
                <!-- Mock Browser Bar -->
                <div class="flex items-center space-x-2 mb-3">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                  <div class="flex-1 h-2 bg-gray-300 dark:bg-gray-700 rounded ml-4"></div>
                </div>
                
                <!-- Mock Content with Theme Colors -->
                <div class="space-y-2">
                  <div class="h-4 rounded" :class="theme.mockup.headerBg"></div>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="h-16 rounded" :class="theme.mockup.cardBg"></div>
                    <div class="h-16 rounded" :class="theme.mockup.cardBg"></div>
                    <div class="h-16 rounded" :class="theme.mockup.cardBg"></div>
                  </div>
                  <div class="space-y-1">
                    <div class="h-2 rounded" :class="theme.mockup.textBg"></div>
                    <div class="h-2 w-3/4 rounded" :class="theme.mockup.textBg"></div>
                    <div class="h-2 w-1/2 rounded" :class="theme.mockup.textBg"></div>
                  </div>
                  <div class="flex space-x-2 pt-2">
                    <div class="h-6 w-16 rounded" :class="theme.mockup.buttonBg"></div>
                    <div class="h-6 w-16 rounded border-2" :class="theme.mockup.buttonBorder"></div>
                  </div>
                </div>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <button class="px-6 py-2 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  Quick Preview
                </button>
              </div>

              <!-- Category Tag -->
              <div class="absolute top-4 left-4">
                <span class="px-2 py-1 bg-black/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {{ theme.category }}
                </span>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6 lg:p-8 space-y-4">
              
              <!-- Theme Info -->
              <div class="space-y-2">
                <h3 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {{ theme.title }}
                </h3>
                
                <p class="text-gray-600 dark:text-gray-300 text-sm lg:text-base leading-relaxed">
                  {{ theme.description }}
                </p>
              </div>

              <!-- Theme Stats -->
              <div class="flex items-center justify-between text-sm">
                <div class="flex items-center space-x-4">
                  <div class="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ theme.likes }}</span>
                  </div>
                  
                  <div class="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ theme.downloads }}k</span>
                  </div>
                </div>

                <!-- Rating Stars -->
                <div class="flex items-center space-x-1">
                  <div class="flex">
                    <svg v-for="star in 5" :key="star" class="w-4 h-4" :class="star <= theme.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-500 dark:text-gray-400 ml-1">{{ theme.rating }}.0</span>
                </div>
              </div>

              <!-- Action Button -->
              <div class="pt-4">
                <button 
                  class="w-full py-3 rounded-2xl font-semibold text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  :class="[
                    theme.isPremium
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-amber-500/25 hover:shadow-amber-500/40'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-indigo-500/25 hover:shadow-indigo-500/40'
                  ]"
                >
                  {{ theme.isPremium ? 'Upgrade to View' : 'Lihat Tema' }}
                </button>
              </div>

            </div>

            <!-- Card Glow Effect -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <!-- Load More Section -->
      <div class="text-center mt-16 lg:mt-24">
        <div class="space-y-6">
          <p class="text-gray-600 dark:text-gray-300">
            Showing {{ filteredThemes.length }} of {{ totalThemes }} themes
          </p>
          
          <button class="px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-white/20 text-gray-700 dark:text-gray-200 font-semibold rounded-2xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Load More Themes
          </button>
          
          <div class="text-center mt-6">
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Can't find what you're looking for? 
              <a href="#" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-300">
                Request a custom theme
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Reactive state
const selectedCategory = ref('all')
const totalThemes = ref(24)

// Categories
const categories = [
  { id: 'all', name: 'All Themes' },
  { id: 'business', name: 'Business' },
  { id: 'portfolio', name: 'Portfolio' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'blog', name: 'Blog' },
  { id: 'landing', name: 'Landing Page' }
]

// Themes data
const themes = [
  {
    id: 1,
    title: "Corporate Elite",
    description: "Professional business theme with clean design and powerful features for corporate websites.",
    category: 'Business',
    categoryId: 'business',
    isPremium: true,
    likes: 1240,
    downloads: 15.2,
    rating: 5,
    mockup: {
      headerBg: 'bg-gradient-to-r from-blue-600 to-blue-800',
      cardBg: 'bg-white dark:bg-gray-800 shadow-lg',
      textBg: 'bg-gray-300 dark:bg-gray-600',
      buttonBg: 'bg-blue-600',
      buttonBorder: 'border-blue-600'
    }
  },
  {
    id: 2,
    title: "Creative Studio",
    description: "Bold and artistic theme perfect for creative agencies and portfolio showcases.",
    category: 'Portfolio',
    categoryId: 'portfolio',
    isPremium: false,
    likes: 982,
    downloads: 8.7,
    rating: 4,
    mockup: {
      headerBg: 'bg-gradient-to-r from-purple-600 to-pink-600',
      cardBg: 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900',
      textBg: 'bg-gray-400 dark:bg-gray-500',
      buttonBg: 'bg-gradient-to-r from-purple-600 to-pink-600',
      buttonBorder: 'border-purple-600'
    }
  },
  {
    id: 3,
    title: "Shop Luxury",
    description: "Premium e-commerce theme designed for high-end retail and luxury brands.",
    category: 'E-commerce',
    categoryId: 'ecommerce',
    isPremium: true,
    likes: 2156,
    downloads: 22.4,
    rating: 5,
    mockup: {
      headerBg: 'bg-gradient-to-r from-amber-600 to-orange-600',
      cardBg: 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200',
      textBg: 'bg-amber-200 dark:bg-amber-700',
      buttonBg: 'bg-gradient-to-r from-amber-600 to-orange-600',
      buttonBorder: 'border-amber-600'
    }
  },
  {
    id: 4,
    title: "Minimal Blog",
    description: "Clean and elegant blogging theme focusing on typography and readability.",
    category: 'Blog',
    categoryId: 'blog',
    isPremium: false,
    likes: 756,
    downloads: 12.1,
    rating: 4,
    mockup: {
      headerBg: 'bg-gradient-to-r from-gray-700 to-gray-900',
      cardBg: 'bg-gray-50 dark:bg-gray-800 border border-gray-200',
      textBg: 'bg-gray-300 dark:bg-gray-600',
      buttonBg: 'bg-gray-800',
      buttonBorder: 'border-gray-800'
    }
  },
  {
    id: 5,
    title: "Startup Launch",
    description: "Modern landing page theme perfect for startups and product launches.",
    category: 'Landing Page',
    categoryId: 'landing',
    isPremium: true,
    likes: 1489,
    downloads: 18.9,
    rating: 5,
    mockup: {
      headerBg: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      cardBg: 'bg-emerald-50 dark:bg-emerald-900/20 shadow-lg',
      textBg: 'bg-emerald-200 dark:bg-emerald-700',
      buttonBg: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      buttonBorder: 'border-emerald-600'
    }
  },
  {
    id: 6,
    title: "Tech Innovation",
    description: "Futuristic theme designed for technology companies and software products.",
    category: 'Business',
    categoryId: 'business',
    isPremium: false,
    likes: 834,
    downloads: 9.3,
    rating: 4,
    mockup: {
      headerBg: 'bg-gradient-to-r from-indigo-600 to-purple-600',
      cardBg: 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200',
      textBg: 'bg-indigo-200 dark:bg-indigo-700',
      buttonBg: 'bg-gradient-to-r from-indigo-600 to-purple-600',
      buttonBorder: 'border-indigo-600'
    }
  }
]

// Computed
const filteredThemes = computed(() => {
  if (selectedCategory.value === 'all') {
    return themes
  }
  return themes.filter(theme => theme.categoryId === selectedCategory.value)
})
</script>

<style scoped>
/* Custom Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(1deg);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-18px) translateX(12px) rotate(1deg);
  }
  66% {
    transform: translateY(8px) translateX(-10px) rotate(-0.5deg);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateY(15px) translateX(-12px) rotate(-1deg);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 7s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 6s ease-in-out infinite reverse;
}

/* Enhanced Glassmorphism */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Card Hover Effects */
.group:hover {
  transform: translateY(-8px) scale(1.05);
}

.group:hover .aspect-\[4\/3\] {
  transform: scale(1.1);
}

/* Custom Gradient Animations */
.bg-gradient-to-r,
.bg-gradient-to-br {
  background-size: 200% 200%;
}

/* Smooth transitions for all elements */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  border-radius: 3px;
}

/* Loading shimmer effect for images */
.loading-shimmer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: shimmer 2s infinite;
}

/* Premium badge glow */
.group:hover .bg-gradient-to-r.from-amber-500 {
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.4);
}

/* Focus states for accessibility */
button:focus-visible {
  outline: 2px solid #4f46e5;
  outline-offset: 2px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-1 {
    gap: 1.5rem;
  }
}

/* Accessibility - Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-float-slow,
  .animate-float-reverse,
  .transition-all,
  .loading-shimmer::before {
    animation: none;
    transition: none;
  }
}

/* Enhanced hover states */
.group:hover .shadow-2xl {
  filter: drop-shadow(0 25px 50px rgba(79, 70, 229, 0.15));
}

/* Category button active state animation */
.bg-gradient-to-r.from-indigo-600 {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>