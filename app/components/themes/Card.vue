<script setup>
const props = defineProps(["theme"]);
</script>

<template>
  <div class="group relative">
    <!-- Theme Card -->
    <div
      class="relative bg-violet-950 dark:bg-dark border border-white/10 hover:border-white/20 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105"
    >
      <!-- Theme Preview Image -->
      <div class="relative h-fit overflow-hidden">
        <!-- Mock Browser Window -->
        <div class="p-4">
          <!-- Option 2: Simplified approach - remove placeholder -->
          <NuxtImg
            src="/img/hero.jpg"
            :alt="props.theme.name || 'theme'"
            class="w-full aspect-4/3 object-cover object-center rounded-xl border border-white/10"
            loading="lazy"
            format="webp"
          />
        </div>

        <!-- Theme Type Badge -->
        <div class="absolute top-6 right-6 z-10">
          <span
            :class="[props.theme.badgeBg, props.theme.badgeText]"
            class="px-3 py-1 rounded-full text-xs font-semibold"
          >
            {{ props.theme.type || 'Premium' }}
          </span>
        </div>
      </div>

      <!-- Theme Info -->
      <div class="p-4 pt-0">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h3 class="text-lg font-bold text-white">
              {{ props.theme.name }}
            </h3>
          </div>
          <span class="py-1 px-2 rounded-lg bg-white/10 text-sm text-white/80">
            {{ props.theme.category || 'Modern' }}
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
</template>