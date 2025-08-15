<script setup>
const props = defineProps(["feature"]);
</script>

<template>
  <div
    class="group relative"
    :class="{ 'md:col-span-2 lg:col-span-1': index === 0 }"
  >
    <!-- Feature Card -->
    <div
      class="relative h-full p-8 lg:p-10 rounded-3xl bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105 hover:bg-white/25 dark:hover:bg-white/10 group"
    >
      <!-- Card Background Gradient -->
      <div
        class="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <!-- Content -->
      <div class="relative z-10 space-y-6">
        <!-- Icon Container -->
        <div class="relative">
          <div
            class="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
            :class="props.feature.iconBg"
          >
            <component
              :is="props.feature.icon"
              class="w-8 h-8 lg:w-10 lg:h-10 text-white"
            />
          </div>
        </div>

        <!-- Title & Description -->
        <div class="space-y-4">
          <h3
            class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
          >
            {{ props.feature.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ props.feature.description }}
          </p>
        </div>

        <!-- props.Feature Benefits -->
        <div class="space-y-3">
          <div
            v-for="benefit in props.feature.benefits"
            :key="benefit"
            class="flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-300"
          >
            <div
              class="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0"
            ></div>
            <span>{{ benefit }}</span>
          </div>
        </div>

        <!-- Action Link -->
        <div class="pt-4">
          <button
            class="group/btn inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm transition-colors duration-300"
          >
            <span>Learn More</span>
            <svg
              class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Hover Effect Overlay -->
      <div
        class="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      ></div>
    </div>
  </div>
</template>
