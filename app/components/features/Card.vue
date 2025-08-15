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
      class="relative h-full p-8 lg:p-10 rounded-3xl bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105 hover:bg-white/25 dark:hover:bg-black/50 group"
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
          <p class="text-gray-600 dark:text-gray-200 leading-relaxed">
            {{ props.feature.description }}
          </p>
        </div>
      </div>

      <!-- Hover Effect Overlay -->
      <div
        class="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      ></div>
    </div>
  </div>
</template>
