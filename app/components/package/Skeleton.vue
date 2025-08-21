<script setup>
const props = defineProps({
  isBestSeller: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <!-- Skeleton Card Container -->
  <div
    class="group relative bg-gradient-to-b rounded-3xl w-full max-w-90 h-fit animate-pulse"
    :class="
      props.isBestSeller
        ? 'from-indigo-900 to-indigo-900 dark:from-purple-500 dark:to-pink-500'
        : 'from-black to-black dark:from-blue-400 dark:to-cyan-400'
    "
  >
    <!-- Skeleton Best Seller Badge -->
    <div
      v-if="props.isBestSeller"
      class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div class="bg-gray-700 h-8 w-28 rounded-full animate-pulse"></div>
    </div>

    <!-- Skeleton Glow Effect -->
    <div
      class="absolute -inset-2 bg-gradient-to-r blur-xl rounded-3xl opacity-30"
      :class="
        props.isBestSeller
          ? 'from-purple-400/25 via-pink-400/25 to-purple-400/25'
          : 'from-blue-400/10 via-cyan-400/10 to-blue-400/10'
      "
    ></div>

    <div
      class="relative w-full h-full bg-linear-to-b p-8 rounded-3xl"
      :class="
        props.isBestSeller
          ? 'border-2 border-purple-400/30 from-purple-950 to-pink-900/30 dark:from-black/80 dark:to-black/80'
          : 'border border-white/10 from-indigo-950 to-indigo-900/90 dark:from-black/90 dark:to-black/90'
      "
    >
      <!-- Skeleton Package Header -->
      <div class="text-center mb-8">
        <!-- Skeleton Title -->
        <div class="mb-8">
          <div
            class="h-8 bg-gray-700 rounded-lg w-3/4 mx-auto animate-pulse"
          ></div>
        </div>

        <!-- Skeleton Price Section -->
        <div class="relative">
          <!-- Skeleton Discount Badge -->
          <div class="absolute -top-4 right-0">
            <div class="h-6 w-16 bg-gray-600 rounded-full animate-pulse"></div>
          </div>

          <!-- Skeleton Main Price -->
          <div class="flex items-baseline justify-center mb-2">
            <div class="flex items-baseline gap-2">
              <div class="h-6 w-8 bg-gray-700 rounded animate-pulse"></div>
              <div class="h-12 w-24 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>

          <!-- Skeleton Crossed Price -->
          <div class="flex justify-center">
            <div class="h-4 w-20 bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Skeleton Features List -->
      <div class="space-y-4 mb-6">
        <!-- 5 Skeleton Features (maksimal yang ditampilkan) -->
        <div
          v-for="index in 5"
          :key="`skeleton-feature-${index}`"
          class="flex items-start gap-x-3"
        >
          <!-- Skeleton Check Icon -->
          <div
            class="w-6 h-6 bg-gray-600 rounded-full animate-pulse flex-shrink-0 mt-0.5"
          ></div>
          <!-- Skeleton Feature Text -->
          <div class="flex-1">
            <div
              class="h-4 bg-gray-600 rounded animate-pulse"
              :class="{
                'w-full': index === 1,
                'w-5/6': index === 2,
                'w-4/5': index === 3,
                'w-full': index === 4,
                'w-3/4': index === 5,
              }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Skeleton Show More Button -->
      <div class="text-center mb-6">
        <div class="h-5 w-32 bg-gray-600 rounded animate-pulse mx-auto"></div>
      </div>

      <!-- Skeleton CTA Button -->
      <div
        class="w-full h-14 rounded-xl animate-pulse"
        :class="props.isBestSeller ? 'bg-purple-700/50' : 'bg-blue-700/50'"
      ></div>
    </div>
  </div>
</template>

<style scoped>
/* Custom pulse animation for smoother effect */
@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.shimmer {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  background-size: 200px 100%;
  animation: shimmer 1.5s infinite;
}

/* Enhanced pulse animation */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
